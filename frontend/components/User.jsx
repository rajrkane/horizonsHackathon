import React from 'react';

export default class User extends React.Component {
  state = {
    name: '',
    age: 0,
    gender: '',
    requestStatus: false
  }

  onNameChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  onAgeChange = (e) => {
    this.setState({
      age: e.target.value
    })
  }

  onGenderChange = (e) => {
    this.setState({
      gender: e.target.value
    })
  }

  onSubmit = (e) => {

  }

  toggleRequest = () => {
    this.setState(
      {requestStatus: !requestStatus}
    )
    if (this.state.requestStatus) {
      this.onSubmit()
    }
  }

  render = () => {
    <div>
      User
      <button onClick={() => this.toggleRequest()}>Request</button>
    </div>
  }
}

//request status true means there is a request
