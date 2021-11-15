import React, { Component } from 'react';
import Index from './split/Index'

class App extends Component {
  state = {
    name : '',
    email : '',
    password : ''
  }
changeHandler = e =>{
	e.preventDefault()
	this.setState({
		[e.target.name] : e.target.value
	})
}
  onSubmitHandler = (event) => {
    event.preventDefault()
    console.log(this.state);
    event.target.reset();
	this.setState({name:'',email:'',password:''})
  };

  render() {
	// const {name,email,password} = this.state;
    return (
      <div className='container'>
        <form onSubmit={this.onSubmitHandler}>
          <h2 className=''>Form </h2>
		  <Index 
			values = {this.state}
			onChange = {this.changeHandler}
		  />
          <input type='submit' value='Submit' className='btn btn-primary' />
        </form>
      </div>
    );
  }
}

export default App;
