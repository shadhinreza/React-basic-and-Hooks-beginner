import React,{useContext} from 'react';
import { countContext } from './Provider';

const Button = () => {
    const {increment,decrement,reset} = useContext(countContext)
    return (
        <div className='offset-2'>
            <br />
            <button type='button' className='btn btn-info mx-1' onClick={increment}>Increment</button>
            <button type='button' className='btn btn-info mx-1' onClick={decrement}>Decrement</button>
            <button type='button' className='btn btn-danger' onClick={reset}>Reset</button>
        </div>
    );
}

export default Button;
