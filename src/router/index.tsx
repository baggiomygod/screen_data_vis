import * as React from 'react'

import {HashRouter as Router, Redirect, Route, Switch, } from 'react-router-dom'

import App from 'src/App'
import Layout from 'src/components/layout'

import Login from 'src/pages/login'
import MainScreen from 'src/pages/main'

class ScreenRouter extends React.Component{
   
    public render() {
        const screenRouteRender = ():any => (
            <Layout>
                <Switch>
                    <Route path="/screen/main" component={MainScreen} />
                    <Redirect to="/screen/main" />
                </Switch>
            </Layout>
        )
        return (
            <Router>
                <App>
                    <Switch>
                        <Route path="/login" component={Login} />
                        <Route path="/" render={screenRouteRender} />
                    </Switch>
                </App>
            </Router>
        )
    }
}

export default ScreenRouter