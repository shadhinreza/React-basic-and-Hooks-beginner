import React, { createContext, useReducer } from 'react';
import { reducer, createActions } from './Reducer';

const countContext = createContext()


const Provider = (props) => {
    const [count, dispatch] = useReducer(reducer, 0);
    const action = createActions(dispatch)
    return (
        <div>
            <countContext.Provider value={{count, ...action}}>
                {props.children}
            </countContext.Provider>
        </div>
    );
}

export {Provider, countContext};