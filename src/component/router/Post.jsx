import React from 'react';
import {Outlet, Link } from 'react-router-dom';


const Post = () => {
    return (
        <div>
            This is Post Page 
            <nav className='mt-2'>
                <Link to='about' className='btn btn-primary'>about Inform</Link> | {""}
                <Link to='contact' className='btn btn-info'>contact Inform</Link>
            </nav>
            <Outlet />
        </div>
    );
}

export default Post;
