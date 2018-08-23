import * as React from 'react';
import './index.scss'
interface IMapLayoutProps {
    name?:string
}
class MapLayout extends React.Component<{}, {}> {
    constructor(props:IMapLayoutProps) {
        super(props);
    }
    public render() {
        const childrenEl = React.Children.toArray(this.props.children)
        return (
            <div className="map-wrap">
                <div className="top">{childrenEl[0]}</div>
                <div className="bottom">{childrenEl[1]}</div>
            </div>
        )
    }
}

export default MapLayout 