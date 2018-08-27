import * as React from 'react';
import './index.scss'
interface ILRLayoutProps {
    name?:string
}
class LRLayout extends React.Component<ILRLayoutProps, {}> {
    constructor(props: ILRLayoutProps) {
        super(props)
    }
    public render() {
        const childrenEl = React.Children.toArray(this.props.children)
        return (
            <div className="cards-layout-wrap">
                <div className="card-left card-item stripe">
                    { childrenEl[0] }
                </div>
                <div className="card-right card-item stripe">
                    { childrenEl[1] }
                </div>
            </div>
        )
    }
}

export default LRLayout