import * as React from 'react';
import { LineArea } from 'src/components/echarts/lines'
import datasMock from './mock/datasMock'

 class LeftCard extends React.Component<{}, {}> {
     public state = {
         width: 400,
         height: 300,
         lineData: datasMock.learnTime,
         lineThree: datasMock.gy,
     }
    public childLineRef:any = React.createRef()
    
    public componentDidMount() {
        this.getContainerStyle('#line-area-contaoner')
        this.getContainerStyle('#line-area-contaoner2')
    }
    public getContainerStyle = (id: string) => {
        const lineContainer:any = document.querySelector(id)
        const width = lineContainer.clientWidth
        const height = 300
        this.setState({
            width,
            height
        })

        window.onresize = () => {
            this.setState({
                width: lineContainer.clientWidth - 20
            })
            this.childLineRef.resize()
        }
    }
    public onLineRef = (child: any) => {
        this.childLineRef = child
    }
    
    public render() {
        const lineOne = ():any => (
            <div style={{backgroundColor: '#eee', height: '50vh', width: '50vw'}}>
                <LineArea id={'line-area-contaoner'} lineData={this.state.lineData} onRef={this.onLineRef} width={this.state.width} height={this.state.height}/>
            </div>
        )
        const lineThree = ():any => (
            <div style={{backgroundColor: '#eee', height: '50vh', width: '50vw'}}>
                <LineArea id={'line-area-contaoner2'} lineData={this.state.lineThree} onRef={this.onLineRef} width={this.state.width} height={this.state.height}/>
            </div>
        )
        return (
            <div style={{display: 'flex'}}>
                {lineOne()}
                {lineThree()}
            </div>
        )
    }
}

export default LeftCard