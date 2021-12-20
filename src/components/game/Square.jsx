import React from 'react';

const Square = (props) => {
    return (
        <div>
            <button className='btn btn-primary mx-1 my-1' type='button' onClick={props.onClick}>{props.value}</button>
        </div>
    );
}

export default Square;
