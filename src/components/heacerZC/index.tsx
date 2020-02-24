import * as React from 'react'
import Utils from 'src/utils/utils'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import './index.scss'


interface IRouterConfig{
    headerTitle: any
}
interface IProps {
    name?: string
    routerConfig: IRouterConfig
}
interface IPathParamsType {
    type?: string
    // type whatever you expect in the this.props.match.params.*
  }
type HomeProps = IProps & RouteComponentProps<IPathParamsType>
interface IState {
    title: string
    [propName: string]: any
}
class Header extends React.Component<HomeProps, IState> {
    public state:IState = {
        currentTime: {
            date: '',
            day: '',
            time: ''
        },
        updateTime: '',
        title: ''
    }
    public interval:any
    constructor(props: HomeProps) {
        super(props)
        this.setTimes = this.setTimes.bind(this)
    }
    public componentWillMount() {
        this.setTimes()
        this.interval = setInterval(() => {
            this.setTimes()
        }, 1000)

        this.setTitle()
    }
    public setTitle() {
        const { match } = this.props
        console.log(match)
    }
    // public componentDidMount() {
    // }
    public setTimes() {
        const currentTime = new Date()
        const date = Utils.formateDate(currentTime)
        const day = Utils.formateDay(currentTime, 'cn')
        const time = Utils.formateTime(currentTime)
        this.setState({
            currentTime: {
                date,
                day,
                time
            }
        })
    }
    public render() {
        return (
            <header className="header-wrap">
                <div className="left">
                    <div className="date-wrap">
                            <div className="date">{this.state.currentTime.date}</div>
                        </div>
                </div>
                <div className="center">
                        <h1>可视化</h1>
                        <div className="title-shadow" />
                </div>
                <div className="right" />
            </header>
        )
    }
}

export default withRouter(Header)