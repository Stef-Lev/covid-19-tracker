import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import Active from './Active';
import './InfoBox.css'

function InfoBox({ title, cases, total, colorClass, active, ...props }) {

    return (
        <Card className={`infoBox ${colorClass}`} onClick={props.onClick}>
            <CardContent>
                <Typography className="infoBox-title">{title}</Typography>
                <h2 className={`infoBox-cases`}>{cases}</h2>
                <h5 className="total-label">Total</h5>
                <Typography className="infoBox-total">{total}</Typography>
                <Active className={active ? `${colorClass}-selected` : ''} />
            </CardContent>
        </Card>
    )
}

export default InfoBox
