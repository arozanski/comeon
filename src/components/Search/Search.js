import React from 'react';
import Input from '../UI/Input/Input';
import Icon from '../UI/Icon/Icon';

const search = (props) => {
    const elementConfig = {
        type: 'text',
        placeholder: 'Search Game'
    }

    return (
        <div className="search ui small icon input">
            <Input elementConfig={elementConfig} change={props.onSearchHandler}>
                <Icon name="search"/>
            </Input>
        </div>
    );
}

export default search;