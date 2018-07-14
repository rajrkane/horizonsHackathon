import React from 'react';

// Page of specific user (specified by id in query).
// Extract data from MLAB.
// Need to add functionality:
    // When user in control has active request, he/she cannot send
    // another request. This needs to be done without altering any
    // property of other users.

class User extends React.Component {
  //The state belongs to the user whose profile is being viewed,
  // NOT the user in control. So, requestStatus is whether the would-be
  // recipient's request is currently active.

  //Need to connect state with MLAB. Every setState should update MLAB.
  state = {
    name: '',
    age: 0,
    gender: '',
    requestStatus: false,
    connectionStatus: false,
    requestsFrom: []
  }

  handleRequest = (e) => {
    // Execute the following code only if recipient does not have an
    // active connection.

    // First, update the recipient.
    let requestsFromCopy = this.state.requestsFrom.slice();
    requestsFromCopy.push(/*user in control (object) */);
    this.setState({
      requestsFrom: requestsFromCopy
    });

    // Second, update the user in control.
    // requestStatus: !requestStatus
  };

  render() {
    <div>
      User
      <button onClick={() => this.handleRequest()}>Request</button>
    </div>
  }
}

export default User;
