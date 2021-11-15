import React from 'react';
import Signup from './Signup';
import Radio from './Radio';
import PropTypes from 'prop-types'


const Form = ({values, changeHandler, submitHandler, agreement,handleAgreement}) => {
    return (
        <form onSubmit={submitHandler} className='col-md-6'>
           <Signup
            label='Name : '
            name='name'
            type='text'
            value={values.name}
            placeholder='Enter your name'
            onChange={changeHandler}
           /> 
           <Signup
            label='Email : '
            name='email'
            type='email'
            value={values.email}
            placeholder='Enter your email'
            onChange={changeHandler}
           /> 
           <Signup
            label='Password : '
            name='password'
            type='password'
            value={values.password}
            placeholder='Enter your password'
            onChange={changeHandler}
           /> 
           <Signup
            label='BirthDay : '
            name='birthDate'
            type='date'
            value={values.birthDate}
            onChange={changeHandler}
           /> 
           <div className="d-flex">
           <Radio
               name='gender'
               value='Male'
               type='radio'
               onChange={changeHandler}
           />
           <Radio
               name='gender'
               value='Female'
               type='radio'
               onChange={changeHandler}
           />
           <Radio
               name='gender'
               value='Other'
               type='radio'
               onChange={changeHandler}
           />
           </div>
           <div className='form-group'>
               <label>
                   <input type="checkbox" name='agreement' checked={agreement} onChange={handleAgreement} className='me-2 mb-3' />
                   Agree to the tarm & conditions
               </label>
           </div>
           <button type='submit' disabled={!agreement} className='btn btn-primary'>Create User</button>
        </form>
    );
}

Form.propTypes = {
    values : PropTypes.object.isRequired,
    changeHandler : PropTypes.func.isRequired,
    submitHandler : PropTypes.func.isRequired,
    agreement : PropTypes.bool.isRequired,
    handleAgreement : PropTypes.func.isRequired
}

export default Form;
