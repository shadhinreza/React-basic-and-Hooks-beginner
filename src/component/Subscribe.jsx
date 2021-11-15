import React, { Component } from 'react';

class Subscribe extends Component {
	state = {
		message : 'Welcome Our Channel',
		isSubscribe : false
	}
	ChangeHandler= (e) =>{
		e.preventDefault();
		this.setState({
			message : 'Thanks for Subscribing us',
			isSubscribe : true
		})
		e.target.classList.add('btn-light')
		//e.target.classList.remove('btn-primary')	
	}
	ChangeHandler2 = (e) =>{
		this.setState({
			message:'Welcome Our Channel', 
			isSubscribe : false
		})
		e.target.classList.add('btn-primary')
	}
  	render() {
		const {isSubscribe} = this.state;
		let compon;
		compon = isSubscribe ? <><h2>{this.state.message}</h2>
		<button type='button' onClick={this.ChangeHandler2}>Subscribed</button></> 
		:
		<><h2>{this.state.message}</h2>
		<button type='button' onClick={this.ChangeHandler}>Subscribe</button></>
		
    	return (
      	<div className='container mt-3'>
			{compon}
      	</div>
    	);
  	}
}
export default Subscribe;
