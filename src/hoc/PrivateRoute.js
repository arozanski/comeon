import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

const privateRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={props => rest.isAuthorised ? (<Component {...props} />): (<Redirect to={{pathname: '/'}} />)} />
    );
}

const mapStateToProps = state => {
    return {
        isAuthorised: state.authorised
    }
}

export default connect(mapStateToProps)(privateRoute);
  