import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Game from './Game/Game';
import axios from '../../axios-instance';
import Loader from '../UI/Loader/Loader';

class Games extends Component {
    constructor() {
        super();
        
        this.state = {
            games : []
        }
    }

    componentDidMount () {
        axios.get('/games')
            .then(response => this.setState({games: response.data}))
            .catch(error => console.log(error));
    }

    render () {
        return (
            <Aux>
                <h3 className="ui dividing header">Games</h3>
                <div className="ui relaxed divided game items links">
                    {this.state.games.length > 0 ? 
                        this.state.games.map(game => (<Game key={game.code} gameInfo={game} />)): 
                            <Loader/>}
                </div>
            </Aux>
        );
    }
}

export default Games;