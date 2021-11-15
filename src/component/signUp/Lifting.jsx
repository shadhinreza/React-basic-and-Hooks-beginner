import React, { Component } from 'react';
import Index from './Index';

class Lifting extends Component {
  state = {
    users: [],
  };
  createUser = user => {
	  user.id = new Date().getTime().toString()
	  this.setState({
		  users : [...this.state.users, user]
	  })
  }
  render() {
    return (
      <div className='container'>
        <Index createUser={this.createUser}/>

        <div>
          <h3 className='my-3'>All registered Users list</h3>
          <ul className='list-group'>
            {this.state.users.map(user => (
              <li className='list-group-item' key={user.id}>
                {user.name} - {user.email}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Lifting;
