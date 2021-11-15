import React, { Component,createRef } from 'react';
import Funref from './Funref';

class Test extends Component {
    constructor(props) {
        super(props);
        this.textInput = createRef();
    }
    submitHandler = (e) =>{
        e.preventDefault();
        console.log(this.textInput.current.value)
        this.textInput.current.value = ''
    }
    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <Funref ref={this.textInput}/>    
                    <button type='submit'>Submit</button>
                </form>
            </div>
        );
    }
}

export default Test;
