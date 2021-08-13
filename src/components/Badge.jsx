import React from 'react'
import badgeHeader from '../assets/static/badge-header.svg'
import '../assets/styles/components/Badge.css'

const Badge = (props) => {
    const {        
        firstName="Andrés",
        lastName="García",
        avatarUrl="https://s.gravatar.com/avatar/f5e615490b0f1825ee0157aed73da46a?s=80",
        jobTitle="Fronter Engineer",
        twitter="andfgp"} = props;
    
    return (
        <div className="Badge">
            <div className="Badge__header">
                <img src={badgeHeader} alt="Logo" />
            </div>
            <div className="Badge__section-name">
                <img className="Badge__avatar" src={avatarUrl} alt="Avatar" />
                <h1>{firstName}<br/>{lastName}</h1>
            </div>
            <div className="Badge__section-info">
                <h3>{jobTitle}</h3>
                <div>@{twitter}</div>
            </div>
            <div className="Badge__footer">
                #Developer
            </div>
        </div>
    )
}

export default Badge
