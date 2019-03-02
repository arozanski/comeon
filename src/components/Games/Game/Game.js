import React from 'react';
import Image from '../../UI/Image/Image';

const game = (props) => {
    return (
        <div className="game item">
            <div className="ui small image">
                <Image relativePath="game-icon" altText="Game Icon" url={props.gameInfo.icon}/>
            </div>
            <div className="content">
                <div className="header"><b className="name">{props.gameInfo.name}</b></div>
                <div className="description">
                    {props.gameInfo.description}
                </div>
                <div className="extra">
                    <div className="play ui right floated secondary button inverted">
                        Play
                        <i className="right chevron icon"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default game;