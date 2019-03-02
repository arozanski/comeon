import React, { Component } from 'react';
import './styles/semantic.css';
import './App.css';
import Aux from './hoc/Aux';
import {Route} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Games from './components/Games/Games';
import Login from './components/Login/Login';

class App extends Component {
  render () {
    return (
        <Aux>
            <Layout>
                {/* <Route path="/checkout" component={Checkout} />
                <Route path="/orders" component={Orders} /> */}
                <Route path="/games" component={Games} />
                <Route path="/" exact component={Login} />
            </Layout>
        </Aux>
    );
    // return (<div>
    //   
    //   <main className="main container">
    //       <div className="login" style={{display: 'block'}}>
    //           <div className="ui grid centered">
    //               <form>
    //                   <div className="fields">
    //                       <div className="required field">
    //                           <div className="ui icon input">
    //                               <input type="text" name="username" placeholder="Username"/>
    //                               <i className="user icon"></i>
    //                           </div>
    //                       </div>
    //                       <div className="required field">
    //                           <div className="ui icon input">
    //                               <input type="password" name="password" placeholder="Password"/>
    //                               <i className="lock icon"></i>
    //                           </div>
    //                       </div>
    //                       <div className="field">
    //                           <div className="ui icon input">
    //                               <input type="submit" value="Login"/>
    //                               <i className="right chevron icon"></i>
    //                           </div>
    //                       </div>
    //                   </div>
    //               </form>
    //           </div>
    //       </div>
    //       <div className="casino" style={{display: 'none'}}>
    //           <div className="ui grid centered">
    //               <div className="twelve wide column">
    //                   <div className="ui list">

    //                       {/*<!-- player item template -->*/}
    //                       <div className="player item">
    //                           <img className="ui avatar image" src="" alt="avatar"/>

    //                           <div className="content">
    //                               <div className="header"><b className="name"></b></div>
    //                               <div className="description event"></div>
    //                           </div>
    //                       </div>
    //                       {/*<!-- end player item template -->*/}

    //                   </div>
    //                   <div className="logout ui left floated secondary button inverted">
    //             <i className="left chevron icon"></i>Log Out
    //           </div>
    //               </div>
    //               <div className="four wide column">
    //                   <div className="search ui small icon input ">
    //                       <input type="text" placeholder="Search Game"/>
    //                       <i className="search icon"></i>
    //                   </div>
    //               </div>
    //           </div>
    //           <div className="ui grid">
    //               <div className="twelve wide column">
    //                   <h3 className="ui dividing header">Games</h3>

    //                   <div className="ui relaxed divided game items links">

    //                       {/*<!-- game item template -->*/}
    //                       <div className="game item">
    //                           <div className="ui small image">
    //                               <img src="" alt="game-icon"/>
    //                           </div>
    //                           <div className="content">
    //                               <div className="header"><b className="name"></b></div>
    //                               <div className="description">
    //                               </div>
    //                               <div className="extra">
    //                                   <div className="play ui right floated secondary button inverted">
    //                                       Play
    //                                       <i className="right chevron icon"></i>
    //                                   </div>

    //                               </div>
    //                           </div>
    //                       </div>
    //                       {/*<!-- end game item template -->*/}

    //                   </div>
    //               </div>
    //               <div className="four wide column">
    //                   <h3 className="ui dividing header">Categories</h3>

    //                   <div className="ui selection animated list category items">

    //                       {/*<!-- category item template -->*/}
    //                       <div className="category item">
    //                           <div className="content">
    //                               <div className="header"></div>
    //                           </div>
    //                       </div>
    //                       {/*<!-- end category item template -->*/}

    //                   </div>
    //               </div>
    //           </div>

    //       </div>
    //       <div className="ingame" style={{display: 'none'}}>
    //           <div className="ui grid centered">
    //               <div className="three wide column">
    //                   <div className="ui right floated secondary button inverted"><i className="left chevron icon"></i>Back
    //                   </div>
    //               </div>
    //               <div className="ten wide column">
    //                   <div id="game-launch">
    //                   </div>
    //               </div>
    //               <div className="three wide column"></div>
    //           </div>
    //       </div>
    //   </main>
    //   </div>
    // );
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
