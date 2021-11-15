import React, { Component } from 'react';
import Form from './Form';
import PropTypes from 'prop-types'


const initialVal = {
    name : '',
    email : '',
    password : '',
    birthDate : '',
    gender : ''
}
class Index extends Component {
    state = {
        values : initialVal,
        agreement : false
    };

   changeHandler = event => {
       this.setState({
           values: {...this.state.values,[event.target.name]: event.target.value}
       })
   }

   handleAgreement = e => {
       this.setState({agreement : e.target.checked})
   }

    submitHandler = event =>{
        event.preventDefault()
        this.props.createUser(this.state.values)
        event.target.reset()
        this.setState({values : initialVal, agreement: false})
    }

    render() {
        return (
            <div className='row'>
               <Form 
                   values={this.state.values}
                   agreement={this.state.agreement}
                   changeHandler={this.changeHandler}
                   submitHandler={this.submitHandler}
                   handleAgreement={this.handleAgreement}
               /> 
            </div>
        );
    }
}

Index.propTypes = {
    createUser : PropTypes.func.isRequired 
}

export default Index;
