import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Home from './Home'
import Post from './Post'
import Contact from './Contact';
import About from './About'
import CourseID from './CourseID';
import Navbar from './Navbar';
import Error from './Error'
import Invoices from './Invoices';


const Indexrouter = () => {
    return (
        <div className='container'>
        <Navbar />
           <Routes>
               <Route path='/' element={<Home />}/>
               <Route path='/about' element={<About />}/>
               <Route path='post' element={<Post />}>
                    <Route path='about' element={<About />}/>
                    <Route path='contact' element={<Contact />}>
                        <Route path=':courseid' element={<CourseID />}/>
                    </Route>
                </Route>
                <Route path='/invoices' element={<Invoices />}>
                    <Route path=':id' element={''}/>
                </Route>
                <Route path='*' element={<Error />}/>
           </Routes>
        </div>
    );
}

export default Indexrouter;