import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div className='Navbar'>
            <nav>
                <Link to='/'>Home</Link> | {" "}
                <Link to='/post'>Post</Link> | {" "}
                <Link to='/about'>About</Link> | {" "}
                <Link to='/invoices'>Invoices</Link> 
            </nav>
        </div>
    );
}

export default Navbar;
