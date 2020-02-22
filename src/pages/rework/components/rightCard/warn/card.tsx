import React from 'react'
import {Icon} from 'antd'
import './card.scss'
export default function Card(props: any) {
    const upOrDown = (status: string) => (
        status === 'up' ? <Icon type="caret-up" style={{color: 'rgb(84, 47, 61)'}} /> : <Icon type="caret-down" />
    )
    return (
        <div className="card-container stripe-normal">
            <div className="top">
            <div className="ind-name">{props.indName}行业</div>
                <div className="trand-data">
                    <div className="num">{props.nums}</div>
                    <div className="year">
                        年同比{upOrDown(props.yearData[1])}{props.yearData[0]}
                    </div>
                    <div className="day">
                        日环比{upOrDown(props.yearData[1])}{props.dayData[0]}
                    </div>
                </div>
            </div>
            <div className="bottom">复工指数低于{props.trand}往年同期，建议关注</div>
        </div>
    )
}
