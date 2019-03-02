import React from 'react';

const icon = (props) => {
    const classes = ['icon', props.name].join(' ');

    return (
        <i className={classes}></i>
    );
};

export default icon;