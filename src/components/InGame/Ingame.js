import React, {Component} from 'react';
import Icon from '../UI/Icon/Icon';

class InGame extends Component {
    componentDidMount () {
        window.comeon.game.launch(this.props.match.params.game);
    }

    onBackClickHandler = () => {
        this.props.history.goBack();
    }

    render () {
        return (
            <div className="ingame">
                <div className="ui grid centered">
                    <div className="three wide column">
                        <div className="ui right floated secondary button inverted" onClick={this.onBackClickHandler}>
                            <Icon name="left chevron"/> Back
                        </div>
                    </div>
                    <div className="ten wide column">
                        <div id="game-launch">
                        </div>
                    </div>
                    <div className="three wide column"></div>
                </div>
            </div>
        );
    }
}

export default InGame;