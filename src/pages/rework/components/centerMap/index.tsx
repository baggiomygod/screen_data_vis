import * as React from 'react'

import * as echarts from 'echarts/lib/echarts'
import {Cascader, Button, Icon} from 'antd'
import MapLayout from 'src/components/mapLayout'
import { LineArea } from 'src/components/echarts/lines'
import GeoMaphz from 'src/components/echarts/geoMap2d/geoMaphz'
// echarts
import 'echarts-gl/dist/echarts-gl'
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/geo';

import geoOptions from './options/map3d' // 3d

// style
import './index.scss'

const zhejiang = require('./geoMapData/geometryProvince/33.json') // 浙江
const hangzhou = require('./geoMapData/geometryCouties/330100.json') // 杭州
const ningbo = require('./geoMapData/geometryCouties/330200.json') // 宁波
const wenzhou = require('./geoMapData/geometryCouties/330300.json') // 温州
const jiaxing = require('./geoMapData/geometryCouties/330400.json') // 嘉兴
const huzhou = require('./geoMapData/geometryCouties/330500.json') // 湖州
const shaoxing = require('./geoMapData/geometryCouties/330600.json') // 绍兴
const jinhua = require('./geoMapData/geometryCouties/330700.json') // 金华
const quzhou = require('./geoMapData/geometryCouties/330800.json') // 衢州
const zhoushan = require('./geoMapData/geometryCouties/330900.json') // 舟山
const taizhou = require('./geoMapData/geometryCouties/331000.json') // 台州
const lishui = require('./geoMapData/geometryCouties/331100.json') // 丽水

import datasMock from './mock/datasMock'

const cascaderOptions = require('./mock/provincesCitiesOpt.json')
import requestSeriesData from './mock/requestSeriesData'

class CenterMap extends React.Component{
    public state = {
        width: '100%',
        height: '100%',
        lineData: datasMock.gy,
        is3d: false,
        geoJson: {
            zhejiang,         
            hangzhou,
            ningbo,
            wenzhou,
            jiaxing,
            huzhou,
            shaoxing,
            jinhua,
            quzhou,
            zhoushan,
            taizhou,
            lishui,
        }
    }
    public mapChart:any = {}
    public mapChart2d: any = {}
    public childCenterLineRef:any = React.createRef()

    constructor(props:any) {
        super(props)
        this.changeMap = this.changeMap.bind(this)
    }
    public componentDidMount() {
        this.create3DMap()
    }
    
    // 3D地图
    public create3DMap = () => {
        // 基于准备好的dom，初始化echarts实例
        const geoContainerEle:any = document.getElementById('geo-container')
        this.mapChart = echarts.init(geoContainerEle);
        echarts.registerMap('zhejiang', this.state.geoJson.zhejiang)
        this.mapChart.setOption(geoOptions('zhejiang', requestSeriesData()));
    }
    public changeMap (val:any) {
        echarts.registerMap(val[1], this.state.geoJson[val[1]])
        this.mapChart.clear();

        this.mapChart.setOption(geoOptions(val[1]));
    }

    public onCenterLineRef = (child: any) => {
        this.childCenterLineRef = child
    }
    public handleToggle3d = () => {
        this.setState({
            is3d: !this.state.is3d
        })
    }
    public render() {
        const cardLineRender = ():any => (
            <div className="tradn-wrap" style={{height: '100%'}}>
                <div>
                    <Icon type="caret-down" /> 
                    <span>整体复工指数</span>
                </div>
                <LineArea 
                    orient={'horizontal'}
                    id={'center-line'}
                    onRef={this.onCenterLineRef} 
                    width={this.state.width} 
                    height={this.state.height}
                    lineData={this.state.lineData}/>
            </div>
        )
        const render3D = (): any => {
            return (
                <>
                 <div className="maps-wrap"  style={{display: this.state.is3d ? 'block' : 'none'}}>
                    <div id="geo-container" style={{ 
                        width: '100%', 
                        height: '100%',
                        minHeight: '300px',
                        minWidth: '500px', 
                        // backgroundColor: 'rgba(23,13,63,1)' 
                    }} />
                    <div className="tabs-map" style={{position: 'absolute'}}>
                        <Cascader options={cascaderOptions} size="small" onChange={this.changeMap} placeholder="Please select" />
                        <Button type="primary" size="small">3D地图</Button>
                        <Button type="default" size="small">热力图</Button>
                    </div>
                </div>
            </>
            )
        }
        const render2d = ():any => {
            return (
                <div  className="maps-wrap" style={{display: this.state.is3d ? 'none' : 'block'}} >
                    <div>
                        <div className="rework-total">
                            <div className="left">复工企业数量: 
                                <span className="item">3</span>
                                <span className="item">1</span>
                                <span className="item">2</span>
                                <span className="item">3</span>
                                <span className="item">6</span>
                            个</div>
                            <div className="right">
                                <div>比昨天<Icon type="caret-up" />1200个</div>
                                <div>日环比<Icon type="caret-up" />1200个</div>
                            </div>
                        </div>
                        <div className="rework-data">
                            <span className="num">复工指数: 43.23<Icon type="arrow-up" /></span>
                            <span>复工电量：123141千瓦时<Icon type="arrow-down" /></span>
                        </div>
                    </div>
                  <GeoMaphz />
                </div>
            )
        }
        // const { is3d } = this.state
        return (
            <MapLayout>
                <div className="maps-wrap">
                    {/* <button onClick={this.handleToggle3d}>{is3d ? '2D' : '3D'}</button> */}
                    {render3D()}
                    {render2d()}
                </div>
                { cardLineRender() }
            </MapLayout>
        )
    }
}

export default CenterMap