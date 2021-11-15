import React from 'react'
import PropTypes from 'prop-types';

const Input = (props) => {
    return (
        <div className='form-control'>
        <label htmlFor={props.name}>{props.label}</label>
            <input
		  	onChange={props.onChange}
            type= {props.type}
			value = {props.value}
            name= {props.name}
            placeholder= {props.placeholder}
            className='form-control my-3'
          />
        </div>
    );
}

Input.propTypes = {
    label : PropTypes.string.isRequired,
    type : PropTypes.string.isRequired,
    value : PropTypes.string.isRequired,
    name : PropTypes.string.isRequired,
    placeholder : PropTypes.string.isRequired,
    onChange : PropTypes.func.isRequired
}

export default Input;
