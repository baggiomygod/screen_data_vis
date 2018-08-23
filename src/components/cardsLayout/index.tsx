import * as React from 'react';
import './index.scss'
interface ICardsLayoutProps {
    name?:string
}
class CardsLayout extends React.Component<ICardsLayoutProps, {}> {
    constructor(props: ICardsLayoutProps) {
        super(props)
    }
    public render() {
        const childrenEl = React.Children.toArray(this.props.children)
        return (
            <div className="cards-layout-wrap">
                <div className="card-left card-item">
                    { childrenEl[0] }
                </div>
                <div className="card-right card-item">
                    { childrenEl[1] }
                </div>
            </div>
        )
    }
}

export default CardsLayout