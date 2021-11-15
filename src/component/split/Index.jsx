import React from 'react';
import Input from './Input'
import PropTypes from 'prop-types';

const Index = (props) => {
    return (
        <div>
            <Input 
                label = 'Enter Your Name : '
                type  = 'text'
                value = {props.values.name}
                name = 'name'
                placeholder = 'Enter your name'
                onChange = {props.onChange}
            />
             <Input 
                label = 'Enter Your Email : '
                type  = 'email'
                value = {props.values.email}
                name = 'email'
                placeholder = 'Enter your email'
                onChange = {props.onChange}
            />
             <Input 
                label = 'Enter Your Password : '
                type  = 'password'
                value = {props.values.password}
                name = 'password'
                placeholder = 'Enter your password'
                onChange = {props.onChange}
            />
            
        </div>
    );
}

Index.propTypes = {
    //value : PropTypes.object.isRequired,
    onChange : PropTypes.func.isRequired
}

export default Index;
