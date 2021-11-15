import React from 'react';
import { Context } from './Index';

const Flow2 = () => {
    return (
        <Context.Consumer>
            {({age,clickHandler}) =>(
                <div>
                    <h3 onClick={clickHandler}>age is : {age}</h3>
                </div>
            )}
        </Context.Consumer>
    );
}

export default Flow2;
