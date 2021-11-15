import React from 'react';

const Reset = (props) => {
  return (
    <div>
      <button type='button' onClick={props.start} className='btn btn-success mt-4 me-3'>
        Start
      </button>
      <button type='button' onClick={props.stop} className='btn btn-primary mt-4 me-3'>
        Pause
      </button>
      <button type='button' onClick={props.reset} className='btn btn-danger mt-4'>
        Reset
      </button>
    </div>
  );
};

export default Reset;
