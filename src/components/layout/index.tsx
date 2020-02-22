import * as React from 'react'
// import Header from 'src/components/header'
import HeaderZC from 'src/components/heacerZC'
  
import './index.scss'

const Layout = (props: any) => {
    return (
        <div className="screen-layout-wrap">
                <HeaderZC routerConfig={props.routerConfig} />
                <div className="layout-content">
                    {props.children}
                </div>
                
            </div>
    )
}

export default Layout