import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
    const isLoggedIn = false
    const navigate = useNavigate();
    return (
        <div className='mt-3'>
            <h3>This is About Page</h3>
            <p className='text-muted'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui accusantium expedita quae blanditiis repudiandae? Non rerum vel natus maiores doloribus.</p>
            <button type='button' onClick={()=> {isLoggedIn ? navigate('/') : navigate('/post')}}>Goto Navigate</button>
        </div>
    );
}

export default About;
