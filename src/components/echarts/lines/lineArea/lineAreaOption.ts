function createLineAreaOption() {
    const options = {
            xAxis: {
                type: 'category',
                boundaryGap: false,
                splitLine: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#fff'
                    }
                },
                axisLabel: {
                    color: '#fff',
                },
                data: ['00:00', '04:00', '08:00' ,'12:00', '16:00', '20:00', '24:00']
            },
            yAxis: {
                type: 'value',

                splitLine: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#fff'
                    }
                },
                axisLabel: {
                    color: '#fff',
                },
            },
            series: [{
                data: [12, 11, 10, 21, 22, 12, 32],
                type: 'line',
                smooth: true,
                areaStyle: {}
            }]
        };
    return options
}

export default createLineAreaOption