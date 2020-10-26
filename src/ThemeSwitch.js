import React from 'react';
import { FormControlLabel, Switch } from '@material-ui/core';


function ThemeSwitch({ isChecked, onChange }) {
    return (
        <div className="switch">
            < FormControlLabel
                control={< Switch
                    checked={isChecked}
                    onChange={onChange}
                />}
                label={isChecked ? 'Dark Mode' : 'Light Mode'}
            />
        </div>
    )
}

export default ThemeSwitch;
