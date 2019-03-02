import React from 'react';
import Loader from '../UI/Loader/Loader';

const player = (props) => {
    const urlPartial = 'avatar/';
    const player = props.player;

    let jsx;

    if (player && player.name && player.event) {
        const imageName = player.avatar.split('/');
        const imageUrl = urlPartial + imageName.pop();

        jsx = 
            <div className="player item">
                <img className="ui avatar image" src={process.env.PUBLIC_URL + imageUrl} alt="avatar"/>
                <div className="content">
                    <div className="header"><b className="name">{player.name}</b></div>
                    <div className="description event">{player.event}</div>
                </div>
            </div>
    }
    else {
        jsx = <Loader />
    }

    return jsx;
};

export default player;