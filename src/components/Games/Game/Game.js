import React from 'react';

const game = (props) => {
    const urlPartial = 'game-icon/';
    const imageName = props.gameInfo.icon.split('/');
    const imageUrl = urlPartial + imageName.pop();
    console.log(props.gameInfo)
    return (
        <div className="game item">
            <div className="ui small image">
                <img src={process.env.PUBLIC_URL + imageUrl} alt="game-icon"/>
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