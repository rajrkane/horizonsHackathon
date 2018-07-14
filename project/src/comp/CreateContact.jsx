import React, {Component} from 'react';
import {Button, Header, Input, List} from 'semantic-ui-react';

class CreateContact extends Component {
  state={
    name: '',
    phone: '',
    birthday: '',
    contacts: []
  }
  onNameChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }
  onPhoneChange = (e) => {
    this.setState({
      phone: e.target.value
    })
  }
  onBirthdayChange = (e) => {
    this.setState({
      birthday: e.target.value
    })
  }

  removeContacts = () => {
    this.setState({
      name: '',
      phone: '',
      birthday: ''
    })
  }

  onClick = (e) => {
    const {name, phone, birthday} = this.state

    this.removeContacts()

    fetch('/contact/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        phone,
        birthday
      })
    }).then((res)=> {
      if(res.status === 200) {
        console.log(res)
      }else {
      }
    }).catch((err) => {

    })
    fetch('/contact', {
      method: 'GET',
    }).then(res => res.json())
    .then(contacts => this.setState({contacts: contacts}))
    .catch((err) => {
      console.log(err)
    })
  }

  render() {
    const renderContacts = () => {
      return this.state.contacts.map(contact => {
        return (
          <div>
            <List>
              <List.Item>
                <List.Icon name='users' />
                <List.Content>{contact.name}</List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name='phone' />
                <List.Content>
                  <a href='{contact.phone}'>{contact.phone}</a>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name='birthday' />
                <List.Content>{contact.birthday}</List.Content>
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
        <p><Input value={this.state.phone} onChange={this.onPhoneChange} className="field" placeholder="phone"/></p>
        <p><Input value={this.state.birthday} onChange={this.onBirthdayChange} className="field" placeholder="birthday"/></p>
        <Button onClick={this.onClick} className="btn">Create</Button>
        <Button onClick={this.onClick} className="btn">Cancel</Button>
        <div>List of Contacts{renderContacts()}</div>
      </div>
    );
  }
}
export default CreateContact;
