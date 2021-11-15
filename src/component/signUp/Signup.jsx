import React from 'react';
import PropTypes from 'prop-types';

const Signup = (props) => {
  return (
    <div className='form-group'>
      <label htmlFor={props.name}>{props.label}</label>
      <input
        type={props.type}
        className='form-control my-1'
        name={props.name}
        id={props.name}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </div>
  );
};

Signup.propTypes = {
    name : PropTypes.string.isRequired,
    type : PropTypes.string.isRequired,
    value : PropTypes.string.isRequired,
    placeholder : PropTypes.string.isRequired,
    onChange : PropTypes.func.isRequired
}

Signup.defaultProps = {
  placeholder : '',
  type : 'text',
  label : ''
}
export default Signup;
