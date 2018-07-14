import React, {Component} from 'react';
import {Button, Header, Input, List} from 'semantic-ui-react';

class Register extends Component {
  state={
    name: '',
    age: '',
    gender: '',
    users: []
  }
  onNameChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }
  onAgeChange = (e) => {
    this.setState({
      phone: e.target.value
    })
  }
  onGenderChange = (e) => {
    this.setState({
      birthday: e.target.value
    })
  }

  removeUsers = () => {
    this.setState({
      name: '',
      age: '',
      gender: ''
    })
  }

  onClick = (e) => {
    const {name, age, gender} = this.state;
    let requestStatus = false;
    this.removeContacts()
    fetch('/user/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        age,
        birthday,
        requestStatus
      })
    }).then((res)=> {
      if(res.status === 200) {
        console.log(res)
        console.log(name + ' added to users.')
      }else {
        console.log(res.status);
      }
    }).catch((err) => {
        console.log('Error in registering: ', err);
    });
    fetch('/user', {
      method: 'GET',
    }).then(res => res.json())
    .then(users => this.setState({users: users}))
    .catch((err) => {
      console.log(err)
    });
  };

  render() {
    const renderContacts = () => {
      return this.state.users.map(u => {
        return (
          <div>
            <List>
              <List.Item>
                <List.Icon name='users' />
                <List.Content>{u.name}</List.Content>
              </List.Item>
              <List.Item>
                <List.Content>{u.age}</List.Content>
              </List.Item>
              <List.Item>
                <List.Content>{u.gender}</List.Content>
              </List.Item>
            </List>
          </div>
        )
      })
    }

    return (
      <div align="center">
        <Header>Create Contact</Header>
        <p><Input value={this.state.name} onChange={this.onNameChange} className="field" placeholder="name"/></p>
        <p><Input value={this.state.age} onChange={this.onAgeChange} className="field" placeholder="age"/></p>
        <p><Input value={this.state.gender} onChange={this.onGenderChange} className="field" placeholder="gender"/></p>
        <Button onClick={this.onClick} className="btn">Register</Button>
        <div>List of Contacts{renderContacts()}</div>
      </div>
    );
  }
}
export default Register;
