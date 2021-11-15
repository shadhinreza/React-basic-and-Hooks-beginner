import React, { Component } from 'react';

class Text extends Component {
    state = {
        count : 0,
        date : new Date()
    }
    componentDidMount() {
        console.log('Component Did Mount')
        setInterval(this.tick, 1000)
    }
    tick = () =>{
        this.setState({date : new Date()})
    }
    render() {
        const {count, date} = this.state;
        return (
            <div>
                <h2>Clock : {date.toLocaleTimeString()}</h2>
                <h4>Count : {count}</h4>
                <button type='button' onClick={() => this.setState({count: count + 1})}>Count update</button>
            </div>
        );
    }
}

export default Text;

