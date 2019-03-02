import React, {Component} from 'react';
import Games from '../../components/Games/Games';
import Player from '../../components/Player/Player';
import Logout from '../../components/Logout/Logout';
import Search from '../../components/Search/Search';
import {connect} from 'react-redux';
import axios from '../../axios-instance';
import * as actionTypes from '../../store/actions';
import './Main.css';

class Main extends Component {
    constructor() {
        super();
        
        this.state = {
            games: [],
            gamesSearched: [],
            searched: false
        }
    }

    onLogoutHandler = () => {
        axios.post('/logout', {username: this.props.playerInfo.username})
            .then(response => {
                this.props.history.replace('/');
                this.props.onLogin(false);
            })
            .catch(error => console.log('something went wrong', error));
    }

    componentDidMount () {
        axios.get('/games')
            .then(response => this.setState({games: response.data}))
            .catch(error => console.log(error));
    }

    onSearchHandler = (e) => {
        const searchString = e.target.value;
        const updatedGames = [];

        this.state.games.filter(game => e.target.value === '' || game.name.includes(searchString))
            .map((game) => updatedGames.push(game));

        this.setState({gamesSearched: updatedGames, searched: true});
    }

    render () {
        const games = this.state.searched ? this.state.gamesSearched: this.state.games;

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
                        <Search onSearchHandler={this.onSearchHandler}/>
                    </div>
                </div>
                <div className="ui grid">
                    <div className="twelve wide column">
                        <Games games={games}/>
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