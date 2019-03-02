import React, {Component} from 'react';
import Games from '../../components/Games/Games';
import Player from '../../components/Player/Player';
import {connect} from 'react-redux';
import './Main.css';

class Main extends Component {
    componentDidMount () {

    }

    render () {
        return (
            <div className="casino">
                <div className="ui grid centered">
                    <div className="twelve wide column">
                        <div className="ui list min-height50">
                            <Player player={this.props.playerInfo} />
                        </div>
                        {/* <div className="logout ui left floated secondary button inverted">
                            <i className="left chevron icon"></i>Log Out
                        </div> */}
                        logout button
                    </div>
                    <div className="four wide column">
                        search
                    </div>
                </div>
                <div className="ui grid">
                    <div className="twelve wide column">
                        <Games/>
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

export default connect(mapStateToProps)(Main);