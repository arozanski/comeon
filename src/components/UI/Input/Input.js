import React from 'react';
import styles from './Input.module.css';

const input = (props) => {
    let inputElement = null;
    const inputClasses = [props.classes];

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(styles.Invalid)
    }

    switch (props.elementType) {
        case ('input'):
        default:
            inputElement = <input className={inputClasses.join(' ')} 
                                {...props.elementConfig} 
                                value={props.value}
                                onChange={props.change} />;
    }

    let wrapperClasses = ['field'];

    if(props.required) {
        wrapperClasses.push('required');
    }

    return (
        <div className={wrapperClasses}>
            <div className="ui icon input">
                {inputElement}
                {props.children}
            </div>
        </div>
    );
}

export default input;