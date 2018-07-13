import React from 'react';
import mongoose from 'mongoose';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: 0,
            gender: ''
        };
    }

    // onNameChange(e) {
    //     this.setState({
    //         name: e.target.value
    //     });
    // }
    //
    // onAgeChange = (e) => {
    //     this.setState({
    //         age: e.target.value
    //     });
    // }
    //
    // onGenderChange = (e) => {
    //     this.setState({
    //         gender: e.target.value
    //     });
    // }

  // called when click button to register user
    // onClick = (e) => {
    //     const {name, age, gender} = this.state;
    //     fetch('/user/create', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             name,
    //             age,
    //             gender
    //         })
    //     }).then((res)=> {
    //         if(res.status === 200) {
    //             alert(name + ' added to contacts')
    //         }else{
    //     // error
    //         }
    //     }).catch((err) => {
    //   // network error
    //     });
    // }
    //
    //
    render() {
        return (
          <div>
            {/* <input onChange={this.onNameChange} placeholder="Name"></input>
            <input onChange={this.onAgeChange} placeholder="Age"></input>
            <input onChange={this.onGenderChange} placeholder="Gender"></input> */}
            {/* <button onClick={this.onClick}>Register</button> */}
            Hi
          </div>
        );
    }
}

export default Register;
