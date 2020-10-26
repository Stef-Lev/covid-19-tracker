import React from 'react'
import './Circle.css'

function Circle({ className }) {
    return (
        <div className={`circle ${className}`} >
            <div className='glow'></div>
        </div>
    )
}

export default Circle;
