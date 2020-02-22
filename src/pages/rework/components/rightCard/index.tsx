import * as React from 'react';
import Order from './order'
import Warn from './warn'
class RightCard extends React.Component<{}, {}> {
    public render() {
        return (
            <div className="right-container">
                <div className="top">
                    <Order />
                </div>
                <div className="bottom">
                    <Warn />
                </div>
            </div>
        )
    }
}

export default RightCard