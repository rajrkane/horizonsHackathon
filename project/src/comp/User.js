import React from 'react';

// Page of specific user (specified by id in query).
// Extract data from MLAB.

export default class User extends React.Component {
  state = {
    name: '',
    age: 0,
    gender: '',
    requestStatus: false
  }
  // connectionStatus: false

//requestStatus is whether the user has an active request (not anything about recipient).
  onSubmit = (e) => {

  }

  toggleRequest = () => {
    // Execute the following code only if recipient does not have a connection.
    this.setState(
      {requestStatus: !requestStatus}
    )
    if (this.state.requestStatus) {
      this.onSubmit()
    }
  }

  render() {
    <div>
      User
      <button onClick={() => this.toggleRequest()}>Request</button>
    </div>
  }
}

//request status true means there is a request
