import * as echarts from 'echarts/lib/echarts'

const data: any = {
    learnTime: [
        {
            name:'学习时长',
            type:'line',
            stack: '总量',
            symbol:'circle',
            symbolSize: 8,
            itemStyle: {
                normal: {
                    color:'#FFC19D',
                    lineStyle: {
                        color: "#FFC19D",
                        width:1
                    },
                    areaStyle: { 
                        color: new echarts.graphic['LinearGradient'](0, 1, 0, 0, [{ // tslint:disable-line
                            offset: 0,
                            color: 'rgba(237,125,63,0.2)'
                        }, {
                            offset: 1,
                            color: 'rgba(237,125,63,0.5)'
                        }]),
                    }
                }
            },
            markPoint:{
                itemStyle:{
                    normal:{
                        color:'red'
                    }
                }
            },
            data:[110, 122, 121, 114, 100, 210, 200]
        },
    ],
    gy: [
        {
            name:'2019',
            type:'line',
            stack: '总量',
            symbol:'circle',
            symbolSize: 8,
            itemStyle: {
                normal: {
                    color:'#0092f6',
                    lineStyle: {
                        color: "#FFC19D",
                        width:1
                    },
                    areaStyle: { 
                        color: new echarts.graphic['LinearGradient'](0, 1, 0, 0, [{ // tslint:disable-line
                            offset: 0,
                            color: 'rgba(7,44,90,0.3)'
                        }, {
                            offset: 1,
                            color: 'rgba(0,146,246,0.9)'
                        }]),
                    }
                }
            },
            markPoint:{
                itemStyle:{
                    normal:{
                        color:'red'
                    }
                }
            },
            data:[110, 122, 121, 114, 100, 210, 200]
        },
        {
            name:'2020',
            type:'line',
            stack: '总量',
            symbol:'circle',
            symbolSize: 8,
            
            itemStyle: {
                normal: {
                    color:'#00d4c7',
                    lineStyle: {
                        color: "#00d4c7",
                        width:1
                    },
                    areaStyle: { 
                        color: new echarts.graphic['LinearGradient'](0, 1, 0, 0, [{ // tslint:disable-line
                            offset: 0,
                            color: 'rgba(7,44,90,0.3)'
                        }, {
                            offset: 1,
                            color: 'rgba(0,212,199,0.9)'
                        }]),
                    }
                }
            },
            data:[110, 122, 121, 114, 100, 210, 200]
        },
        {
            name:'同比变化',
            type:'line',
            stack: '总量',
            symbol:'circle',
            symbolSize: 8,
            itemStyle: {
                normal: {
                    color: '#aecb56',
                    lineStyle: {
                        color: "#aecb56",
                        width:1
                    },
                    areaStyle: { 
                        
                        color: new echarts.graphic['LinearGradient'](0, 1, 0, 0, [{ // tslint:disable-line
                            offset: 0,
                            color: 'rgba(7,44,90,0.3)'
                        }, {
                            offset: 1,
                            color: 'rgba(114,144,89,0.9)'
                        }]),
                    }
                }
            },
            data:[110, 122, 121, 114, 100, 210, 200]
        }
    ],
    zzy: [
        {
            name:'2019',
            type:'line',
            stack: '总量',
            symbol:'circle',
            symbolSize: 8,
            itemStyle: {
                normal: {
                    color:'#0092f6',
                    lineStyle: {
                        color: "#0092f6",
                        width:1
                    },
                    areaStyle: { 
                        
                        color: new echarts.graphic['LinearGradient'](0, 1, 0, 0, [{ // tslint:disable-line
                            offset: 0,
                            color: 'rgba(7,44,90,0.3)'
                        }, {
                            offset: 1,
                            color: 'rgba(0,146,246,0.9)'
                        }]),
                    }
                }
            },
            markPoint:{
                itemStyle:{
                    normal:{
                        color:'red'
                    }
                }
            },
            data:[90, 82, 121, 74, 100, 210, 200]
        },
        {
            name:'2020',
            type:'line',
            stack: '总量',
            symbol:'circle',
            symbolSize: 8,
            
            itemStyle: {
                normal: {
                    color:'#00d4c7',
                    lineStyle: {
                        color: "#00d4c7",
                        width:1
                    },
                    areaStyle: { 
                        
                        color: new echarts.graphic['LinearGradient'](0, 1, 0, 0, [{ // tslint:disable-line
                            offset: 0,
                            color: 'rgba(7,44,90,0.3)'
                        }, {
                            offset: 1,
                            color: 'rgba(0,212,199,0.9)'
                        }]),
                    }
                }
            },
            data:[130, 102, 121, 114, 100, 210, 200]
        },
        {
            name:'同比变化',
            type:'line',
            stack: '总量',
            symbol:'circle',
            symbolSize: 8,
            itemStyle: {
                normal: {
                    color: '#aecb56',
                    lineStyle: {
                        color: "#aecb56",
                        width:1
                    },
                    areaStyle: { 
                        
                        color: new echarts.graphic['LinearGradient'](0, 1, 0, 0, [{ // tslint:disable-line
                            offset: 0,
                            color: 'rgba(7,44,90,0.3)'
                        }, {
                            offset: 1,
                            color: 'rgba(114,144,89,0.9)'
                        }]),
                    }
                }
            },
            data:[110, 122, 121, 114, 100, 210, 200]
        }
    ],
    yyy: [
        {
            name:'2019',
            type:'line',
            stack: '总量',
            symbol:'circle',
            symbolSize: 8,
            itemStyle: {
                normal: {
                    color:'#0092f6',
                    lineStyle: {
                        color: "#0092f6",
                        width:1
                    },
                    areaStyle: { 
                        
                        color: new echarts.graphic['LinearGradient'](0, 1, 0, 0, [{ // tslint:disable-line
                            offset: 0,
                            color: 'rgba(7,44,90,0.3)'
                        }, {
                            offset: 1,
                            color: 'rgba(0,146,246,0.9)'
                        }]),
                    }
                }
            },
            markPoint:{
                itemStyle:{
                    normal:{
                        color:'red'
                    }
                }
            },
            data:[102, 92, 121, 124, 110, 210, 200]
        },
        {
            name:'2020',
            type:'line',
            stack: '总量',
            symbol:'circle',
            symbolSize: 8,
            
            itemStyle: {
                normal: {
                    color:'#00d4c7',
                    lineStyle: {
                        color: "#00d4c7",
                        width:1
                    },
                    areaStyle: { 
                        
                        color: new echarts.graphic['LinearGradient'](0, 1, 0, 0, [{ // tslint:disable-line
                            offset: 0,
                            color: 'rgba(7,44,90,0.3)'
                        }, {
                            offset: 1,
                            color: 'rgba(0,212,199,0.9)'
                        }]),
                    }
                }
            },
            data:[105, 112, 101, 110, 110, 210, 200]
        },
        {
            name:'同比变化',
            type:'line',
            stack: '总量',
            symbol:'circle',
            symbolSize: 8,
            itemStyle: {
                normal: {
                    color: '#aecb56',
                    lineStyle: {
                        color: "#aecb56",
                        width:1
                    },
                    areaStyle: { 
                        
                        color: new echarts.graphic['LinearGradient'](0, 1, 0, 0, [{ // tslint:disable-line
                            offset: 0,
                            color: 'rgba(7,44,90,0.3)'
                        }, {
                            offset: 1,
                            color: 'rgba(114,144,89,0.9)'
                        }]),
                    }
                }
            },
            data:[10, 12, 21, 14, 10, 10, 10]
        }
    ],
    kzy: [
        {
            name:'2019',
            type:'line',
            stack: '总量',
            symbol:'circle',
            symbolSize: 8,
            itemStyle: {
                normal: {
                    color:'#0092f6',
                    lineStyle: {
                        color: "#0092f6",
                        width:1
                    },
                    areaStyle: { 
                        
                        color: new echarts.graphic['LinearGradient'](0, 1, 0, 0, [{ // tslint:disable-line
                            offset: 0,
                            color: 'rgba(7,44,90,0.3)'
                        }, {
                            offset: 1,
                            color: 'rgba(0,146,246,0.9)'
                        }]),
                    }
                }
            },
            markPoint:{
                itemStyle:{
                    normal:{
                        color:'red'
                    }
                }
            },
            data:[120, 112, 101, 114, 100, 130, 100]
        },
        {
            name:'2020',
            type:'line',
            stack: '总量',
            symbol:'circle',
            symbolSize: 8,
            
            itemStyle: {
                normal: {
                    color:'#00d4c7',
                    lineStyle: {
                        color: "#00d4c7",
                        width:1
                    },
                    areaStyle: { 
                        
                        color: new echarts.graphic['LinearGradient'](0, 1, 0, 0, [{ // tslint:disable-line
                            offset: 0,
                            color: 'rgba(7,44,90,0.3)'
                        }, {
                            offset: 1,
                            color: 'rgba(0,212,199,0.9)'
                        }]),
                    }
                }
            },
            data:[110, 122, 121, 114, 100, 210, 200]
        },
        {
            name:'同比变化',
            type:'line',
            stack: '总量',
            symbol:'circle',
            symbolSize: 8,
            itemStyle: {
                normal: {
                    color: '#aecb56',
                    lineStyle: {
                        color: "#aecb56",
                        width:1
                    },
                    areaStyle: { 
                        
                        color: new echarts.graphic['LinearGradient'](0, 1, 0, 0, [{ // tslint:disable-line
                            offset: 0,
                            color: 'rgba(7,44,90,0.3)'
                        }, {
                            offset: 1,
                            color: 'rgba(114,144,89,0.9)'
                        }]),
                    }
                }
            },
            data:[10, 22, 21, 14, 10, 10, 20]
        }
    ]
}

export default data