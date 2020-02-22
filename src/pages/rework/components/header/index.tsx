import * as React from 'react'
import Utils from 'src/utils/utils'
import './index.scss'
interface IProps {
    name?: string
}
class Header extends React.Component<{}, {}> {
    public state = {
        currentTime: {
            date: '',
            day: '',
            time: ''
        },
        updateTime: ''
    }
    public interval:any
    constructor(props: IProps) {
        super(props)
        this.setTimes = this.setTimes.bind(this)
    }
    public componentWillMount() {
        this.setTimes()
        this.interval = setInterval(() => {
            this.setTimes()
        }, 1000)
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
                    <label>数据更新时间:</label>
                    <span>{this.state.updateTime}</span>
                </div>
                <div className="center">
                        <h1>数据可视化</h1>
                        <div className="title-shadow" />
                </div>
                <div className="right">
                    <div className="current-time">
                        <div className="time">{this.state.currentTime.time}</div>
                        <div className="date-wrap">
                            <div className="date">{this.state.currentTime.date}</div>
                            <div className="day">{this.state.currentTime.day}</div>
                        </div>

                    </div>
                </div>
            </header>
        )
    }
}

export default Header