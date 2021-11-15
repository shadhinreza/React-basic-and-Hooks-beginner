import React,{useContext} from 'react';
import Button from './Button';
import { countContext } from './Provider';

const CompB = () => {
    const {count} = useContext(countContext)
    return (
        <div>
            <div className='offset-3'>Count : {count}</div>
            <Button />
        </div>
    );
}

export default CompB;
