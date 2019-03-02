import React from 'react';

const category = (props) => {
    return (
        <div className="category item">
            <div className="content">
                <div className="header" onClick={() => props.onClickHandler(props.item.id)}>{props.item.name}</div>
            </div>
        </div>
    );
}

export default category;