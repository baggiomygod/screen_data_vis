import * as React from 'react'
import * as echarts from 'echarts/lib/echarts'
import createLineOprion from './lineAreaOption'

import datasMock from './datasMock'
interface ILineProps {
    width?: number | string
    height?: number | string
    lineData?: any
    id: string
    onRef: any
    orient?: string
}
class LineArea extends React.Component<ILineProps>{
    public lineChart:any = {}
    public state: any = {
        gy: datasMock.gy,
        zzy: datasMock.zzy,
        yyy: datasMock.yyy,
        zky: datasMock.kzy
    }
    
    constructor(props:ILineProps) {
        super(props)
        this.initLine = this.initLine.bind(this)
        this.resize = this.resize.bind(this)
    }
    public componentWillReceiveProps(nextProp: any) {
        console.log(this.props.lineData)
        console.log(nextProp.lineData)
        this.lineChart.setOption(createLineOprion(nextProp.lineData))
    }
    public componentDidMount() {
        this.props.onRef(this) // 调用父组件onChildRef方法,传入this
        this.initLine()
    }
    public initLine () {
        const lineContainerEle:any = document.getElementById(this.props.id)
        this.lineChart = echarts.init(lineContainerEle)
        this.lineChart.setOption(createLineOprion(this.props.lineData, this.props.orient))
    }
    // 重置图标尺寸
    public resize() {
        this.lineChart.resize()
    }
    public render () {
        const style = {
            width: this.props.width,
            height: this.props.height,
            minHeight: '200px'
        }
        return (
            <div id={this.props.id} style={style}/>
        )
    }
}

export default LineArea