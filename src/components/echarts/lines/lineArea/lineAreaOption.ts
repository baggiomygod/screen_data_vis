function createLineAreaOption(lineData: any[], orient: string = '') {
    const options = {
            tooltip : {
                show: true,
                trigger: 'item',
                position: 'top'
            },
            legend: {
                show:true,
                orient: orient || 'vertical',
                x:'right',
                y:'top',
                icon: 'line',
                itemWidth:20,
                itemHeight:10,
                textStyle:{
                    color:'#1bb4f6'
                },
                data:['2019','2020','同比变化']
            },
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
                    color: '#333',
                },
                data: ['2-3', '2-4', '2-5' ,'2-6', '2-7', '2-8', '2-9']
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
                    color: '#333',
                },
            },
            series: lineData
        };
    return options
}

export default createLineAreaOption