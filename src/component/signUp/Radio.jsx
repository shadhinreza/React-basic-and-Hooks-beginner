import React from 'react';
import PropTypes from 'prop-types';

const Radio = (props) => {
  return (
    <div className='form-group my-2'>
      <label className=''>
        <input
          type={props.type}
          name={props.name}
          value={props.value}
          onChange={props.onChange}
		  className='me-2'
        />
        <span className='me-4'>{props.value}</span>
      </label>
    </div>
  );
};

Radio.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Radio;
