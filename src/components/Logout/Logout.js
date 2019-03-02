import React from 'react';

const logout = (props) => {
    return (
        <div className="logout ui left floated secondary button inverted"
            onClick={props.onClickHandler}>
			<i className="left chevron icon"></i>Log Out
		</div>
    );
};

export default logout;