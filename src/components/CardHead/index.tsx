import React from 'react'
import './index.scss'
interface IProps {
    title: string
}

export default function index(props: IProps) {
    return (
        <div className="card-head">
           <i className="arrow" /> 
           <span>{props.title}</span>
        </div>
    )
}
