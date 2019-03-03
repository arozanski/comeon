import React from 'react';
import Aux from '../../hoc/Aux';
import Game from './Game/Game';

const games = (props) => {
    return (
        <Aux>
            <h3 className="ui dividing header">Games</h3>
            <div className="ui relaxed divided game items links">
                {props.games.length > 0 ? 
                    props.games.map(game => (<Game key={game.code} gameInfo={game} onPlayClickHandler={props.onPlayClickHandler} />)): 
                        <p>We did not found any games, sorry ;-(</p>}
            </div>
        </Aux>
    );
}

export default games;