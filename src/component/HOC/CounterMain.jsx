import React from 'react';
import WithHoc from './WithHoc';
import Button1 from './Button1';
import H11 from './H11';

const Countermain = (props) => {
    const {count, count2, CounterClick, MouseOver} = props;
    return (
        <div>
            <Button1 count={count} CounterClick={CounterClick}/>
            <H11 count2={count2} MouseOver={MouseOver}/>
        </div>
    );
}

export default WithHoc(Countermain);
