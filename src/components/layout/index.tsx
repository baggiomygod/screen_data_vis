import * as React from 'react'
import Header from 'src/components/header'
import './index.scss'
class Layout extends React.Component{
    public render () {
        return (
            <div className="screen-layout-wrap">
                <Header />
                <div className="layout-content">
                    {this.props.children}
                </div>
                
            </div>
        )
    }
}

export default Layout