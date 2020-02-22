    const option = {
        //  backgroundColor: 'transparent',
        title: {
            text: '',
            subtext: '',
            x: 'center'
        },
        tooltip: { //  提示框组件。
            trigger: 'item', // 数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。
            formatter: '{a} <br/> {b}: {c}',
            textStyle: {
                fontSize: '24px'
            }
        },
        legend: {
            show: false,
            orient: 'horizontal', // 图例的排列方向
            x: 'left', // 图例的位置
            data: ['']
        },
        geo: {
            map: 'china',
            left: '150',
            itemStyle: { // 地图区域的多边形 图形样式
                //  color: 'rgba(209,250,12,0.5)',
                normal: { // 是图形在默认状态下的样式
                    color: 'rgba(37,124,169)',
                    label: {
                        show: true, // 是否显示标签
                        textStyle: {
                            color: 'rgb(249, 249, 249)'
                        },
                    },

                    borderWidth: 3,
                    borderColor: 'rgba(37,124,169)',
                    //  areaColor: 'rgba(37,124,169)',
                    shadowColor: 'rgba(37,124,169)',
                    shadowOffsetY: 15,
                    shadowOffsetX: 8,
                    //  shadowBlur: 3,

                },

            },

            //  layoutCenter: ['50%', '30%'],
            // 如果宽高比大于 1 则宽度为 100，如果小于 1 则高度为 100，保证了不超过 100x100 的区域
            //  layoutSize: 100,
        },
        visualMap: { // 颜色的设置  dataRange
            show: false,
            x: 'left',
            y: 'center',
            seriesIndex: [0],

            min: 1000,
            max: 3000,
            //  splitList: [


            //  ],
            //             min: 0,
            //             max: 2500,
            //             calculable : true,// 颜色呈条状
            text: ['高', '低'], //  文本，默认为数值文本
            color: ['rgb(11,85,142)', 'rgb(13,106,177)'],
            textStyle: {
                color: '#fff'
            },

        },
        toolbox: { // 工具栏
            show: true,
            orient: 'vertical', // 工具栏 icon 的布局朝向
            x: 'right',
            y: 'center',
            feature: { // 各工具配置项。
                mark: {
                    show: true
                },
                dataView: {
                    show: true,
                    readOnly: false
                }, // 数据视图工具，可以展现当前图表所用的数据，编辑后可以动态更新。
                restore: {
                    show: true
                }, // 配置项还原。
                saveAsImage: {
                    show: true
                } // 保存为图片。
            }
        }
    };

    export default option