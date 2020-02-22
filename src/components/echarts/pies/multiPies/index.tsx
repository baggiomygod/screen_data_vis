import * as React from 'react'
import * as echarts from 'echarts/lib/echarts'
import createOptions from './multiOptions'
import './index.scss'

interface IRingProps {
    width?: number | string
    height?: number | string
    ringData?: any[] | undefined
    onRef: any
}
class MultiPies extends React.Component<IRingProps>{
    public pieChart: any = {}
    constructor(props:IRingProps) {
        super(props)
        this.initRingOne = this.initRingOne.bind(this)
        this.initRingTwo = this.initRingTwo.bind(this)
        this.initRingThree = this.initRingThree.bind(this)
        this.resize = this.resize.bind(this)
    }
    public componentDidMount() {
        this.props.onRef(this) // 调用父组件onChildRef方法,传入this
        this.initRingOne()
        this.initRingTwo()
        this.initRingThree()
    }
    public initRingOne () {
        const dataOne = [
                {
                  value: 10,
                  name: '复工',
                  total: 100,
                  percentage: '10%'
                },
                {
                    value: 90,
                    name: '未复工',
                    total: 100,
                },
        ]
        const pieContaierEle:any = document.getElementById('ring-pie1')
        this.pieChart = echarts.init(pieContaierEle)
        this.pieChart.setOption(createOptions(dataOne, '制造业', dataOne[0].percentage))
    }
    public initRingTwo () {
        const dataTwo = [
            {
              value: 10,
              name: '复工',
              total: 100,
              percentage: '10%'
            },
            {
                value: 90,
                name: '未复工',
                total: 100,
            },
    ]
        const pieContaierEle:any = document.getElementById('ring-pie2')
        this.pieChart = echarts.init(pieContaierEle)
        this.pieChart.setOption(createOptions(dataTwo, '交通运输', dataTwo[0].percentage))
    }
    public initRingThree () {
        const dataThree: any[] = [
            {
              value: 10,
              name: '复工',
              total: 100,
              percentage: '10%'
            },
            {
                value: 90,
                name: '未复工',
                total: 100,
            },
        ]
        const pieContaierEle:any = document.getElementById('ring-pie3')
        this.pieChart = echarts.init(pieContaierEle)
        this.pieChart.setOption(createOptions(dataThree, '软件信息', dataThree[0].percentage))
    }

    // 重置图标尺寸
    public resize() {
        this.pieChart.resize()
    }
    public render () {
        const style = {
            width: this.props.width,
            height: '100%'
        }
        
        return (
            <div className="multi-pies-container">
            <div id="ring-pie1" style={style}>ring pie1</div>
            <div id="ring-pie2" style={style}>ring pie2</div>
            <div id="ring-pie3" style={style}>ring pie3</div>
            </div>
            )
    }
}

export default MultiPies