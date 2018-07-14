import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import CreateContact from './comp/CreateContact'
import Register from './comp/Register';
import UserList from './comp/UserList';

class App extends Component {
  state ={
    activeComponent: 'create'
  }

  //activeComponent specifies which page to display

  render() {
    let show
    if(this.state.activeComponent === "create") show = <Register app={this}/>
    else if(this.state.activeComponent === "list") show = <UserList app={this}/>
    // else if(this.state.activeComponent === "user") show = <User />
    // // return (
    // <div>{show}</div>
    // )

    return (
    <div>
      {/* <p>Hi rendering</p> */}
      {show}
      {/* <Register /> */}
    </div>
    );
  }
}

export default App;
