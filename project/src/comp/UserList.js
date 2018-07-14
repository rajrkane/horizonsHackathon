import React from 'react';

// Redirect to this page from register/login. Display list of users
// who do not have a connection.

class UserList extends React.Component {
  state = {
    items: []
  }

  componentDidMount() {
    fetch('/users', {
      method: 'GET',
    })
    .then(res => res.json())
    .then(items => {this.setState({items})})
    .catch(err => console.log('error', err))
  }

  //function called when click on button to view individual user
  viewUser = (e) => {
    fetch('/user/:id', {
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

  // Render all users who do not have a connection.
  render() {
    return (
      <div>
        {this.state.items.filter(u => u.connectionStatus === false).map(item => {
          <h2>User: {item.name}</h2>
          <button onClick={() => null}>View User</button>
        })}
      </div>
    )
  }
}

//<User />
export default UserList;
