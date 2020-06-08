
function geoOptions(mapName: string, 
    seriesData: any = {
        bar3dData:[],
        scatter3dData:[],
        alirl:[],
}) {
    const options = {
        title: {
            text: '',
            x: 'left',
            top: "10",
            textStyle: {
                color: '#fff',
                fontSize: 14
            }
        },
        tooltip: {
            show: true,
            //  formatter:(params)=>{
            //    let data = "测试1:"+params.name + "<br/>"+"值:"+ params.value[2]+"<br/>"+"地理坐标:[" + params.value[0]+","+params.value[1] +"]";
            //    return data;
            //  },
        },
        visualMap: [{
            type: 'continuous',
            seriesIndex: 0,
            text: ['bar3D'],
            calculable: true,
            max: 300,
            inRange: {
                color: ['rgb(74, 169, 255)', '#eba438', '#d94d4c']
            }
        }, {
            type: 'continuous',
            seriesIndex: 1,
            text: ['scatter3D'],
            left: 'right',
            max: 100,
            calculable: true,
            inRange: {
                color: ['#000', 'blue', 'purple']
            }
        }],
        geo3D: {
            map: mapName,
            roam: true,
            boxWidth: 100,
            boxDepth: 90,
            normal: {
                areaColor: 'rgba(21, 82, 135, 0.6)', // '#ffff33',
                borderColor: 'rgba(147, 235, 248, 1)',
                borderWidth: 1
            },
            itemStyle: {
                color: 'rgba(21, 82, 135, 0.8)', // 地图颜色
                areaColor: '#f9be00', // '#ffff33',
                opacity: 1,
                borderWidth: 1,
                borderColor: '#eee' // 边框颜色
            },
            shading: {
                color: '#000'
            },
            label: {
                show: true,
                textStyle: {
                    color: '#000', //  地图初始化区域字体颜色
                    fontSize: 8,
                    opacity: 1,
                    backgroundColor: 'rgba(0,23,11,0)'
                }
            },
            emphasis: { // 当鼠标放上去  地区区域是否显示名称
                label: {
                    show: true,
                    textStyle: {
                        color: '#fff',
                        fontSize: 3,
                        backgroundColor: 'rgba(0,23,11,0)'
                    }
                },
                areaColor: 'transparent'
            },
            // shading: 'lambert',
            light: { // 光照阴影
                main: {
                    color: '#fff', //  光照颜色
                    intensity: 1, //  光照强度
                    // shadowQuality: 'high', // 阴影亮度
                    shadow: false, // 是否显示阴影
                    alpha: 55,
                    beta: 10

                },
                ambient: {
                    intensity: 0.3
                }
            }
        },
        series: [
            // 柱状图
            {
                name: 'bar3D',
                type: "bar3D",
                coordinateSystem: 'geo3D',
                barSize: 1, // 柱子粗细
                shading: 'lambert',
                opacity: 1,
                bevelSize: 0.3,
                label: {
                    show: false,
                    formatter: '{b}'
                },
                data: seriesData.bar3dData

            },
            {
                name: 'scatter3D',
                type: "scatter3D",
                coordinateSystem: 'geo3D',
                symbol: 'pin',
                symbolSize: 30,
                opacity: 1,
                label: {
                    show: false,
                    formatter: '{b}'
                },
                itemStyle: {
                    borderWidth: 0.5,
                    borderColor: '#fff'
                },
                data: seriesData.scatter3dData
            },
            // 画线
            {
                type: 'lines3D',
                coordinateSystem: 'geo3D',
                effect: {
                    show: true,
                    period: 2,
                    trailWidth: 3,
                    trailLength: 0.5,
                    trailOpacity: 1,
                    trailColor: '#0087f4'
                },
                blendMode: 'lighter',
                lineStyle: {
                    // width: 2
                    width: 1,
                    color: '#0087f4',
                    opacity: 0
                },
                // effect: {
                //     show: true,
                //     trailWidth: 5,
                //     trailOpacity: 1,
                //     trailLength: 1,
                //     constantSpeed: 8
                // },
                // lineStyle: {
                //     width: 5,
                //     opacity: 1,
                //     color: '#f9be00', // [123, 23, 63, 1]
                // },

                data: seriesData.alirl
            }
        ]
    }
    return options
}



export default geoOptions