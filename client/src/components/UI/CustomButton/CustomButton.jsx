import React from 'react';
import classes from './CustomButton.module.css'

const CustomButton = (props) => {
    return (
        <button className={classes.myButton} {...props}>
            {props.children}
        </button>
    );
};

export default CustomButton;