import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import './InfoBox.css'

function InfoBox({ title, cases, total, isRed, active, ...props }) {
    return (
        <Card className={`infoBox ${active && 'infoBox--selected'} ${isRed && 'infoBox--red'}`} onClick={props.onClick}>
            <CardContent>
                <Typography className="infoBox-title" color="textSecondary">{title}</Typography>
                <h2 className={`infoBox-cases ${!isRed && 'infoBox__cases--green'}`}>{cases}</h2>
                <Typography className="infoBox-total" color="textSecondary">Total: {total}</Typography>
            </CardContent>
        </Card>
    )
}

export default InfoBox
