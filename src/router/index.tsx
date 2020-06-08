import * as React from 'react'

import {
    HashRouter as Router, 
    Route, 
    Switch,
    Redirect
} from 'react-router-dom'

import App from 'src/App'
import Layout from 'src/components/layout'

import Login from 'src/pages/login'
import MainScreen from 'src/pages/main'
import ZbdScreen from 'src/pages/zbd'
import Rework from 'src/pages/rework'
import geoMap from 'src/pages/geoMap'
import HZ2d from 'src/pages/geoMap/Hz2d'
import HZ3d from 'src/pages/geoMap/Hz2d'
import LinePage from 'src/pages/linePage'
import BarRaceChart from 'src/pages/bar-race-chart'

import routerConfig from './routerConfig'
class ScreenRouter extends React.Component{
   
    public render() {
        const screenRouteRender = ():any => (
            <Layout routerConfig={routerConfig}>
                <Switch>
                    <Route path="/screen/zbd" component={ZbdScreen} />
                    <Route path="/screen/main" component={MainScreen} />
                    <Route path="/screen/rework" component={Rework} />
                    <Redirect to="/screen/rework" />
                </Switch>
            </Layout>
        )
        
        return (
            <Router>
                <App>
                    <Switch>
                        <Route path="/geomap" component={geoMap} />
                        <Route path="/hz2d" component={HZ2d} />
                        <Route path="/hz3d" component={HZ3d} />
                        <Route path="/line" component={LinePage} />
                        <Route path="/login" component={Login} />
                        <Route path="/barRace" component={BarRaceChart} />
                        <Route path="/" render={screenRouteRender} />
                    </Switch>
                </App>
            </Router>
        )
    }
}

export default ScreenRouter