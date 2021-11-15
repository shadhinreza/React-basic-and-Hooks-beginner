import React, { Component } from 'react';
import Gretting from './Gretting';
import LogIn from './LogIn';
import LogOut from './LogOut';


class Index extends Component {
  state = {
    isLoggedIn : false
  }

  handleLogOut = () =>{
    this.setState({
      isLoggedIn: false
    })
  }
  handleLogIn= ()=>{
    this.setState({
      isLoggedIn: true
    })
  }
  render() {
    const {isLoggedIn} = this.state
    let button;
    if(isLoggedIn){
      button = <LogOut onClick={this.handleLogOut} />
    }else{
      button = <LogIn onClick={this.handleLogIn} />
    }
    return (
      <div className='container'>
        <Gretting isLoggedIn={isLoggedIn}/>
        {button}
      </div>
    );
  }
}

export default Index;
