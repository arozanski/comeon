import React, { Component } from 'react';
import './styles/semantic.css';
import './App.css';
import Aux from './hoc/Aux';
import {Route, Switch} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Login from './containers/Login/Login';
import PrivateRoute from './hoc/PrivateRoute';
import NotFound from './components/NotFound/NotFound';
import asyncComponent from './hoc/asyncComponent';

const AsyncMainComponent = asyncComponent(() => import('./containers/Main/Main'));
const AsyncInGameComponent = asyncComponent(() => import('./components/InGame/Ingame'));

class App extends Component {
  render () {
    return (
        <Aux>
            <Layout>
                <Switch>
                    <Route path="/" exact component={Login} />
                    <PrivateRoute path="/main" exact component={AsyncMainComponent} />
                    <PrivateRoute path="/ingame/:game" exact component={AsyncInGameComponent} />
                    <Route render={() => <NotFound/>}/>
                </Switch>
            </Layout>
        </Aux>
    );
  }
}

export default App;
