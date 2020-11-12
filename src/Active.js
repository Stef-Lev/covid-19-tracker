import React from 'react'
import './Active.css'

function Active({ className }) {
    return (
        <div className={`active ${className}`} >
            <div className='glow'></div>
        </div>
    )
}

export default Active;
