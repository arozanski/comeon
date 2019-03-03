import React, { Component } from 'react';
import './styles/semantic.css';
import './App.css';
import Aux from './hoc/Aux';
import {Route, Switch} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Main from './containers/Main/Main';
import Login from './containers/Login/Login';
import InGame from './components/InGame/Ingame';

class App extends Component {
  render () {
    return (
        <Aux>
            <Layout>
                <Switch>
                    <Route path="/" exact component={Login} />
                    <Route path="/main" exact component={Main} />
                    <Route path="/ingame/:game" exact component={InGame} />
                </Switch>
            </Layout>
        </Aux>
    );
  }
}

export default App;
