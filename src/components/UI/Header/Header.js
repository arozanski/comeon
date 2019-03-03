import React from 'react';

const header = (props) => {
    let element = null;
    
    switch(props.type) {
        case 'h1':
            element = <h1 className={props.classes}>{props.text}</h1>;
            break;
        case 'h3':
            element = <h3 className={props.classes}>{props.text}</h3>;
            break;
        default:
            break;
    }

    return element;
}

export default header;