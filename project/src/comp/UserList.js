import React from 'react';

// Home page.

// Redirect to this page from register/login. Display list of users
// who do not have a connection.

class UserList extends React.Component {
  state = {
    items: []
  }

  // GET request for users after page renders.
  componentDidMount() {
    fetch('/users', {
      method: 'GET',
    })
    .then(res => res.json())
    .then(items => {this.setState({items})})
    .catch(err => console.log('error', err))
  }

  //function called when click on button to view individual user
  viewUser = (user) => {
    fetch('/users/:id', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        age,
        gender,
        requestStatus,
        connectionStatus,
        requestsFrom
      })
    }).then((res)=>{
      if (res.status ===200) console.log(res)
    }).catch((err) => {
      console.log(err)
    })
  }

  sendRequest = (user) => {
    // Execute following code only if user.requestStatus is false.
    if (!user.requestStatus) {
      user.requestStatus = true;
      // Update requestStatus of user in control to true
      user.requestsFrom.push(/*the user in control*/)

    }

    // Execute only if user.requestStatus is true.
  }

  // Render all users who do not have a connection.
  render() {
    return (
      <div>
        {this.state.items.filter(u => u.connectionStatus === false).map(user => {
          <h2>User: {user.name}</h2>
          <button onClick={() => this.viewUser(user)}>View user</button>
          <button onClick={() => this.sendRequest(user)}>Send request</button>
        })}
        <button onClick={() => null}>Manage requests</button>
      </div>
    )
  }
}

//<User />
export default UserList;
