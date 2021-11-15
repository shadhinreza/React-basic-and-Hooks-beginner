import React from 'react';

const Funref = React.forwardRef((props, ref) => {
    return (
        <>
            <input type="text" name="name" id="name" placeholder="Enter your name" ref={ref}/>
        </>
    );
})

export default Funref;
