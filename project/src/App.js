import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import CreateContact from './comp/CreateContact'
import Register from './comp/Register';

class App extends Component {
  state ={
    activeComponent: 'create'
  }

  //activeComponent specifies which page to display

  render() {
    // let show
    //
    // if(this.state.activeComponent === "create") show = <CreateContact />
    // else if(this.state.activeComponent === "create") show = <EditContact />
    // else if(this.state.activeComponent === "create") show = <ListContact />
    // // return (
    // <div>{show}</div>
    // )

    return (
    <div>
      <p>Hi rendering</p>
      <Register />
    </div>
    );
  }
}

export default App;
