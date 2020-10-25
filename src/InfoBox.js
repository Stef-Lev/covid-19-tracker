import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import './InfoBox.css'

function InfoBox({ title, cases, total, colorClass, active, ...props }) {
    return (
        <Card className={`infoBox ${colorClass}`} onClick={props.onClick}>
            <CardContent>
                <Typography className="infoBox-title" color="textSecondary">{title}</Typography>
                <h2 className={`infoBox-cases`}>{cases}</h2>
                <Typography className="infoBox-total" color="textSecondary">Total: {total}</Typography>
            </CardContent>
            <div className='circle'></div>
        </Card>
    )
}

export default InfoBox
