import React, { Component } from 'react';
import './styles/semantic.css';
import './App.css';
import Aux from './hoc/Aux';
import {Route, Switch} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Main from './containers/Main/Main';
import Login from './containers/Login/Login';
import InGame from './components/InGame/Ingame';
import PrivateRoute from './hoc/PrivateRoute';

class App extends Component {
  render () {
    return (
        <Aux>
            <Layout>
                <Switch>
                    <Route path="/" exact component={Login} />
                    <PrivateRoute path="/main" exact component={Main} />
                    <PrivateRoute path="/ingame/:game" exact component={InGame} />
                </Switch>
            </Layout>
        </Aux>
    );
  }
}

export default App;
