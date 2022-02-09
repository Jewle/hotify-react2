import React from "react";
import './header-info.scss'
export default function HeaderInfo({info}) {
    if (!info){
        return null
    }
    const {isVerified,name,monthListeners}  = info
    return (
        <div className='header-info'>
            <p>{isVerified && 'Подтверждённый исполнитель'}</p>
            <h1 className='large-title'>{name}</h1>
            <p>{monthListeners}</p>
        </div>
    )
}
