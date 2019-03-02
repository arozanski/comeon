import React from 'react';
import './Input.css';

const input = (props) => {
    let inputElement = null;
    const inputClasses = ['ui', 'icon', 'input'];

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push('error');
    }

    switch (props.elementType) {
        case ('input'):
        default:
            inputElement = <input {...props.elementConfig} value={props.value} onChange={props.change} />;
    }

    let wrapperClasses = ['field'];

    if(props.required) {
        wrapperClasses.push('required');
    }

    return (
        <div className={wrapperClasses}>
            <div className={inputClasses.join(' ')}>
                {inputElement}
                {props.children}
            </div>
        </div>
    );
}

export default input;