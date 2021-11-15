import React from 'react';
import Flow2 from './Flow2'
import {Context, Context2 } from './Index';

const Flow1 = () => {
    return (
        <div>
            <h4>This is Flow1</h4>
            <Flow2 />
            <Context.Consumer>
                {
                    ({speed}) => (
                         <Context2.Consumer>
                            {
                                (value1) =>{
                                   return <small>{speed} {value1.book}</small>
                                }
                            }
                        </Context2.Consumer>
                    )
                }
            </Context.Consumer>
        </div>
    );
}

export default Flow1;
