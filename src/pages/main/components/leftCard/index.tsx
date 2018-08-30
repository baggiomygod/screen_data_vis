import * as React from 'react';
import TBLayout from 'src/components/TBLayout'
import { NormalPie } from 'src/components/echarts/pies'
import { LineArea } from 'src/components/echarts/lines'
 class LeftCard extends React.Component<{}, {}> {
     public state = {
         width: 400,
         height: 300
     }
    public childPieRef:any = React.createRef()
    public childLineRef:any = React.createRef()
    
    public componentDidMount() {
        this.getContainerStyle()
    }
    public getContainerStyle = () => {
        const pieContainer:any = document.querySelector('.tb-layout-wrap')
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
        }
    }
    public onPieRef = (child: any) => {
        this.childPieRef = child
    }
    public onLineRef = (child: any) => {
        this.childLineRef = child
    }
    
    public render() {
        const cardTopRender = ():any => (
            <NormalPie onRef={this.onPieRef} width={this.state.width} height={this.state.height}/>
        )
        const cardBottomRender = ():any => (
            <div>
                <LineArea onRef={this.onLineRef} width={this.state.width} height={this.state.height}/>
            </div>
        )
        return (
            <TBLayout>
                {cardTopRender()}
                {cardBottomRender()}
            </TBLayout>
        )
    }
}

export default LeftCard