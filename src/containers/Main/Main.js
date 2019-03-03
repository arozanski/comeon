import React, {Component} from 'react';
import Games from '../../components/Games/Games';
import Player from '../../components/Player/Player';
import Logout from '../../components/Logout/Logout';
import Search from '../../components/Search/Search';
import Categories from '../../components/Categories/Categories';
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
            categories: [],
            searched: false
        }
    }

    onLogoutHandler = () => {
        axios.post('/logout', {username: this.props.playerInfo.username})
            .then(() => {
                this.props.history.replace('/');
                this.props.onLogin(false);
            })
            .catch(error => console.log('something went wrong', error));
    }

    componentDidMount () {
        axios.get('/games')
            .then(response => this.setState({games: response.data}))
            .catch(error => console.log(error));

        axios.get('/categories')
            .then(response => this.setState({categories: response.data}))
            .catch(error => console.log(error));
    }

    onSearchHandler = (e) => {
        const searchString = e.target.value.trim();
        const updatedGames = [];

        this.state.games.filter(game => e.target.value === '' || game.name.includes(searchString))
            .map((game) => updatedGames.push(game));

        this.setState({gamesSearched: updatedGames, searched: true});
    }

    onCategoryFilterHandler = (categoryId) => {
        let searchedGames = [...this.state.games];
        let filteredGames = [];

        this.setState({searched: true});

        if (categoryId !== 0) {
            this.state.games.filter(game => {
                return game.categoryIds.indexOf(categoryId) > -1
                
            }).map((game) => filteredGames.push(game));
        }

        this.setState({gamesSearched: filteredGames.length > 0 ? filteredGames: searchedGames});
    }

    onPlayClickHandler = (gameCode) => {
        this.props.history.push('/ingame/'+ gameCode);
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
                        <Games games={games} onPlayClickHandler={this.onPlayClickHandler}/>
                    </div>
                    <div className="four wide column">
                        <Categories categories={this.state.categories} onCategoryFilterHandler={this.onCategoryFilterHandler}/>
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