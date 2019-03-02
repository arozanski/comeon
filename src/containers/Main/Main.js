import React, {Component} from 'react';
import Games from '../../components/Games/Games';
import Player from '../../components/Player/Player';
import Logout from '../../components/Logout/Logout';
import {connect} from 'react-redux';
import axios from '../../axios-instance';
import * as actionTypes from '../../store/actions';
import './Main.css';

class Main extends Component {
    onLogoutHandler = () => {
        axios.post('/logout', {username: this.props.playerInfo.username})
            .then(response => {
                this.props.history.replace('/');
                this.props.onLogin(false);
            })
            .catch(error => console.log('something went wrong', error));
    }

    render () {
        return (
            <div className="casino">
                <div className="ui grid centered">
                    <div className="twelve wide column">
                        <div className="ui list min-height50">
                            <Player player={this.props.playerInfo} />
                        </div>
                        <Logout onClickHandler={this.onLogoutHandler}/>
                    </div>
                    <div className="four wide column">
                        search
                    </div>
                </div>
                <div className="ui grid">
                    <div className="twelve wide column">
                        <Games/>
                    </div>
                    <div className="four wide column">
                        categories
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        playerInfo: state.player
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogin: (status, player) => dispatch({type: actionTypes.AUTH, status, player})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);