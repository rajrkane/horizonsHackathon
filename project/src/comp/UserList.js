import React from 'react';

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
        connectionStatus
      })
    }).then((res)=>{
      if (res.status ===200) console.log(res)
    }).catch((err) => {
      console.log(err)
    })
  }

  render() {
    return (
      <div>
        {this.state.items.map(item => {
          <h2>User</h2>
          <button onClick={() => null}>View User</button>
        })}
      </div>
    )
  }
}

//<User />
export default UserList;
