import React from 'react';
import Loader from '../UI/Loader/Loader';
import Image from '../UI/Image/Image';

const player = (props) => {
    const player = props.player;
    let jsx;

    if (player && player.name && player.event) {
        jsx = 
            <div className="player item">
                <Image classes="ui avatar image" altText="avatar" relativePath="avatar" url={player.avatar}/>
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