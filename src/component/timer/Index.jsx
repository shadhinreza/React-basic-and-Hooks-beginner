import React from 'react';

const Index = (props) => {
  return (
    <div>
      <button className='btn btn-info text-white me-4 mt-2' onClick={props.decrement}> - </button>
      <span className='mt-5 h2' id='number'>
        {props.number}
      </span>
      <button className='btn btn-info text-white ms-4 mt-2' onClick={props.increment}> + </button>
    </div>
  );
};

export default Index;
