import React, { Component } from 'react';
import Index from './timer/Index';
import Reset from './timer/Reset';

class App extends Component {
  state = {
    value : 5
  }
  intervalId = null;
  
  decrement = () =>{
    if(this.state.value > 0){
    this.setState({value : this.state.value - 1})
    }
  }
  increment = () =>{
    this.setState({value : this.state.value + 1})
  }
  startTimer = () =>{
   if(this.state.value > 0 && !this.intervalId){
     this.intervalId = setInterval(() => {
       this.setState({value : this.state.value - 1}, () =>{
         if(this.state.value === 0){
           alert('Countdown is stop!')
           clearInterval(this.intervalId)
           this.intervalId = null
         }
       })
     }, 1000);
   }
  }
  stopTimer = () =>{
    if(this.intervalId){
      clearInterval(this.intervalId);
      this.intervalId = null
    }
  }
  resetTimer = () =>{
    this.setState({value: 0})
    clearInterval(this.intervalId)
    this.intervalId = null
  }
  render() {
    return (
      <div className='container'>
        <Index increment={this.increment} decrement={this.decrement} number={this.state.value}/>
        <Reset start={this.startTimer} stop={this.stopTimer} reset ={this.resetTimer}/>
      </div>
    );
  }
}

export default App;
