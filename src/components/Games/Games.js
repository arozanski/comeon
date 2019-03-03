import React from 'react';
import Aux from '../../hoc/Aux';
import Game from './Game/Game';
import Header from '../UI/Header/Header';

const games = (props) => {
    return (
        <Aux>
            <Header classes="ui dividing header" type="h3" text="Games" />
            <div className="ui relaxed divided game items links">
                {props.games.length > 0 ? 
                    props.games.map(game => (<Game key={game.code} gameInfo={game} onPlayClickHandler={props.onPlayClickHandler} />)): 
                        <p>We did not found any games, sorry ;-(</p>}
            </div>
        </Aux>
    );
}

export default games;