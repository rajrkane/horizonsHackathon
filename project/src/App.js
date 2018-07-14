import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CreateContact from './comp/CreateContact'

class App extends Component {
  // state ={
  //   activeComponent: 'create'
  // }

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
      <CreateContact />
    </div>
    );
  }
}

export default App;
