import * as React from 'react'
import * as echarts from 'echarts/lib/echarts'

import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/geo';

// import option from './geoOpt/option2d'
import option from './geoOpt/hzOption'
const geodata = require('./geoMapData/geometryCouties/330100.json') // 杭州
// import geodata from './geoMapData/hangzhouMapJson'
// import geodata from './geoMapData/zhejiang'
// import geodata from './geoMapData/zhejiang2'
// const geodata = require('./geoMapData/HK.json')

class GeoTest extends React.Component{
    public mapChart2d:any = {}

    public componentDidMount() {
        const geoContainerEle:any = document.getElementById('geo-test')
        this.mapChart2d = echarts.init(geoContainerEle);
        echarts.registerMap('hangzhou', geodata)
        this.mapChart2d.setOption(option);
    }
    public render () {
        return (
            <div id="geo-test" style={{width: '100%', height: '70%'}} />
        )
    }
}
export default GeoTest
