export default {
    title: {
        text: '',
        subtext: '',
    },
    tooltip: {
        trigger: 'item',
        formatter: '{b}<br/>{c}'
    },
    toolbox: {
        show: false,
        orient: 'horizontal',
        left: 'bottom',
        top: 'center',
        feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
        }
    },
    visualMap: {
        min: 0,
        max: 50000,
        orient: 'horizontal',
        text: ['高', '低'],
        right: 0,
        textStyle: {
            color: 'rgb(44, 76, 125)',
        },
        realtime: false,
        calculable: true,
        itemWidth: '10px',
        inRange: {
            color: ['rgb(8,29,72)', 'rgb(21, 44, 96)', 'rgb(18, 60, 141)','rgb(71, 128, 210)', ]
        }
    },
    series: [
        {
            name: '',
            type: 'map',
            mapType: 'hangzhou', // 自定义扩展图表类型
            label: {
                show: true
            },
            textStyle: {
                color: '#fff',
            },
            data: [
                {name: '西湖区', value: 20057.34},
                {name: '滨江区', value: 15477.48},
                {name: '富阳市', value: 31686.1},
                {name: '上城区', value: 6992.6},
                {name: '下城区', value: 44045.49},
                {name: '江干区', value: 40689.64},
                {name: '余杭区', value: 37659.78},
                {name: '临安市', value: 45180.97},
                {name: '萧山区', value: 6992.26},
                {name: '桐庐县', value: 4045.26},
                {name: '建德市', value: 1686.26},
                {name: '淳安县', value: 3057.26},
                {name: '拱墅区', value: 3057.26},
            ],
        }
    ]
}