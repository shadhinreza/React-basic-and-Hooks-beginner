import React from 'react';
import {NavLink, Outlet } from 'react-router-dom';

const Contact = () => {
    const listpie = ['Angular','React', 'Vue','Svelte','Meteor','Express']
    const randomList = listpie[Math.floor(Math.random() * listpie.length)]
    return (
        <div className='mt-2'>
            <h3>This is Contact Page</h3>
            <p>More Test</p>
            <NavLink to={`/post/contact/${randomList}`}>task </NavLink>
            <div>
                <Outlet />
            </div>
        </div>
    );
}

export default Contact;
