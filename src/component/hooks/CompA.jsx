import React from 'react';
import CompB from './CompB';
import { Provider } from './Provider';


const CompA = () => {
    return (
        <div>
            <h4>Use Reducer With Contex, goodbye Redux</h4>
            <Provider>
                <CompB />
            </Provider>
        </div>
    );
}

export default CompA;
