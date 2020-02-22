import * as React from 'react'
import LeftCard from './components/leftCard'
import RightCard from './components/rightCard'
import CenterMap from './components/centerMap'
import './index.scss'
class MainScreen extends React.Component{
    public render () {
        return (
            <div className="screen-main-wrap">
                <div className="left">
                    <LeftCard />
                </div>
                <div className="center">
                    <CenterMap />
                </div>
                <div className="right">
                    {/* <LeftCard /> */}
                    <RightCard />
                </div>
            </div>
        )
    }
}

export default MainScreen