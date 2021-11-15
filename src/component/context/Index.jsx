import React, { Component, createContext } from 'react';
import Flow1 from './Flow1';
import Flow3 from './Flow3';

export const Context = createContext()
export const Context2 = createContext()
class Index extends Component {
    state = {
		name : 'Shadhin reza',
		skills : ['HTML', 'CSS', 'BOOTSTRAP','JAVASCRIPT','REACTJS','NODEJS'],
		age : 29,
		speed : 'slowLearner'
	}
    obj = {
        key1 : 'key24d',
        book : 'Email'
    }
    ClickHandler = () =>{
        this.setState({age : 'Independent Day'})
    }
    render() {
        const {name} = this.state;
        return (
            <div>
                <p>Name : {name}</p>
                <Context.Provider value={{...this.state, clickHandler: this.ClickHandler}}>
                <Context2.Provider value={this.obj}>
                    <Flow1 />
                    <Flow3 Hello='Hello World'/>
                </Context2.Provider>
                </Context.Provider>
            </div>
        );
    }
}

export default Index;
