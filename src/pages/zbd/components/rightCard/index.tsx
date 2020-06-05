import * as React from 'react';
import TBLayout from 'src/components/TBLayout'
import { HorizontalBar, VerticalBar } from 'src/components/echarts/bars'
class RightCard extends React.Component<{}, {}> {
    public state = {
        width: 400,
        height: 300
    }
    public childHBarRef: any = React.createRef()
    public childVBarRef: any = React.createRef()

    public componentDidMount() {
        this.getContainerStyle()
    }
    public getContainerStyle = () => {
        const barContainer: any = document.querySelector('.tb-layout-wrap')
        const width = barContainer.clientWidth
        const height = 300
        this.setState({
            width,
            height
        })

        window.onresize = () => {
            this.setState({
                width: barContainer.clientWidth - 20
            })
            this.childHBarRef.resize()
            this.childVBarRef.resize()
        }
    }
    public onHBarRef = (child: any) => {
        this.childHBarRef = child
    }
    public onVBarRef = (child: any) => {
        this.childVBarRef = child
    }
    public render() {
        const cardLeftRender = (): any => (
            <div>
                <HorizontalBar onRef={this.onHBarRef} width={this.state.width} height={this.state.height} />
            </div>
        )
        const cardRightRender = (): any => (
            <div>
                <VerticalBar onRef={this.onVBarRef} width={this.state.width} height={this.state.height} />
            </div>
        )
        return (
            <TBLayout>
                {cardLeftRender()}
                {cardRightRender()}
            </TBLayout>
        )
    }
}

export default RightCard