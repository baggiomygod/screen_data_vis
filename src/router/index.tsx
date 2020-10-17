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
import GeoMap from 'src/pages/geoMap'
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
                        <Route path="/geo" component={GeoMap} />
                        <Route path="/line" component={LinePage} />
                        <Route path="/login" component={Login} />
                        <Route path="/bar_race" component={BarRaceChart} />
                        <Route path="/" render={screenRouteRender} />
                    </Switch>
                </App>
            </Router>
        )
    }
}

export default ScreenRouter