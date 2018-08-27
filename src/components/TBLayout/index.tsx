import * as React from 'react';
import './index.scss'
interface ITBLayoutProps {
    name?:string
}
class TBLayout extends React.Component<ITBLayoutProps, {}> {
    constructor(props: ITBLayoutProps) {
        super(props)
    }
    public render() {
        const childrenEl = React.Children.toArray(this.props.children)
        return (
            <div className="tb-layout-wrap">
                <div className="card-top card-item stripe">
                    { childrenEl[0] }
                </div>
                <div className="card-bottom card-item stripe">
                    { childrenEl[1] }
                </div>
            </div>
        )
    }
}

export default TBLayout