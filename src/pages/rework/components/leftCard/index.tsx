import * as React from 'react';
import HbLayout from 'src/components/HbLayout'
import CardHead from '../../components/CardHead'
import { RingPie, MultiPies } from 'src/components/echarts/pies'
import { LineArea } from 'src/components/echarts/lines'
import classnames from 'classnames'
import datasMock from './mock/datasMock'

import './index.scss'
 class LeftCard extends React.Component<{}, {}> {
     public state = {
         width: 400,
         height: '100%',
         reWorkRingData: [
            {value: 20, name: '农牧渔业'},
            {value: 50, name: '公共服务'},
            {value: 60, name: '工业'},
            {value: 100, name: '交通运输'},
            {value: 80, name: '建筑业'},
            {value: 10, name: '房地产'},
            {value: 40, name: '金融业'},
            {value: 120, name: '批发零售'},
            {value: 160, name: '信息技术服务'},
            {value: 200, name: '商业服务'},
         ],
         lineData: datasMock.gy,
         activeBtn: 'gy'
     }
    public childPieRef:any = React.createRef()
    public childLineRef:any = React.createRef()
    public childMultiPieRef: any = React.createRef()
    public componentDidMount() {
        this.getContainerStyle()
    }
    public getContainerStyle = () => {
        const pieContainer:any = document.querySelector('.hb-layout-wrap')
        const width = pieContainer.clientWidth
        const height = 300
        this.setState({
            width,
            height
        })

        window.onresize = () => {
            this.setState({
                width: pieContainer.clientWidth - 20
            })
            this.childPieRef.resize()
            this.childLineRef.resize()
            this.childMultiPieRef.resize()
        }
    }
    public onPieRef = (child: any) => {
        this.childPieRef = child
    }
    public onLineRef = (child: any) => {
        this.childLineRef = child
    }

    public MultiPiesRef = (child: any) => {
        this.childMultiPieRef = child
    }
    public handleIndustry = (e: any) => {
        const targetclassList = e.target.classList
        if (targetclassList.contains('item-gy')) {
            this.setState({
                lineData: datasMock.gy,
                activeBtn: 'gy',
            })
        }
        if (targetclassList.contains('item-zzy')) {
            this.setState({
                lineData: datasMock.zzy,
                activeBtn: 'zzy',
            })
        }
        if (targetclassList.contains('item-yyy')) {
            this.setState({
                lineData: datasMock.yyy,
                activeBtn: 'yyy',
            })
        }
        if (targetclassList.contains('item-kzy')) {
            this.setState({
                lineData: datasMock.kzy,
                activeBtn: 'kzy',
            })
        }
    }
    public render() {
        const cardTopRender = ():any => (
            <div style={{height: '100%'}}>
            <CardHead title={'复工企业占比'}/>
            <RingPie 
                onRef={this.onPieRef} 
                width={this.state.width} 
                height={this.state.height}
                ringData={this.state.reWorkRingData}
                />
            </div>
        )
        const cardBottomRender = ():any => (
            <div className="card-middle" style={{height: '100%'}}>
                <CardHead title={'重点行业复工指数趋势'}/>
                <div className="industry-warp" onClick={this.handleIndustry}>
                    <div className={classnames('item', 'item-gy', `${this.state.activeBtn === 'gy' ? 'active' : ''}`)}>工业</div>
                    <div className={classnames('item', 'item-zzy', `${this.state.activeBtn === 'zzy' ? 'active' : ''}`)}>制造业</div>
                    <div className={classnames('item', 'item-yyy', `${this.state.activeBtn === 'yyy' ? 'active' : ''}`)}>医药业</div>
                    <div className={classnames('item', 'item-kzy', `${this.state.activeBtn === 'kzy' ? 'active' : ''}`)}>口罩业</div>
                </div>
                <LineArea 
                    id={'line-area-contaoner'}
                    onRef={this.onLineRef} 
                    width={this.state.width} 
                    height={this.state.height}
                    lineData={this.state.lineData}/>
            </div>
        )
        const cardThirdRender = (): any => {
            return (<div style={{height: '100%'}}>
                        <CardHead title={'行业复工电量占比'}/>
                        <MultiPies 
                            onRef={this.MultiPiesRef} 
                            width={this.state.width / 3} 
                            height={this.state.height}
                            ringData={this.state.reWorkRingData}
                            />
                    </div>)
        }
        return (
            <HbLayout>
                {cardTopRender()}
                {cardBottomRender()}
                {cardThirdRender()}
            </HbLayout>
        )
    }
}

export default LeftCard