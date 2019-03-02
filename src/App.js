import React, { Component } from 'react';
import './styles/semantic.css';
import './App.css';
import Aux from './hoc/Aux';
import {Route} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Main from './containers/Main/Main';
import Login from './containers/Login/Login';

class App extends Component {
  render () {
    return (
        <Aux>
            <Layout>
                <Route path="/main" component={Main} />
                <Route path="/" exact component={Login} />
            </Layout>
        </Aux>
    );
  }

  // constructor(){
  //   super();
  //   this.state ={
  //     users: ['abc',"pdsa","eccs","koi"],
  //     input: '',
  //   }
  // }

  // onChangeHandler(e){
  //   this.setState({
  //     input: e.target.value,
  //   })
  // }

  // render (){
  //     const list = this.state.users
  //       .filter(d => this.state.input === '' || d.includes(this.state.input))
  //       .map((d, index) => <li key={index}>{d}</li>);

  //   return (<div>
  //     <input value={this.state.input} type="text" onChange={this.onChangeHandler.bind(this)}/>
  //       <ul>{list}</ul>
  //     </div>)
  // }

  // componentDidMount () {
  //   axios.get('http://localhost:3001/games')
  //     .then(response => console.log(response.data))
  //     .catch(error => console.log(error))
  // }

  // onClickHandler () {
  //   window.comeon.game.launch('jackhammer');
  // }
  // render() {
  //   return (
  //     <div className="App">
  //       <button onClick={this.onClickHandler}>start</button>

  //       <div id="game-launch"></div>
  //     </div>
  //   );
  // }
}

export default App;
