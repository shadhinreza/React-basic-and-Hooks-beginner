import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import TextError from '../components/TextError';

const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required!';
  } else if (values.firstName.length > 15) {
    errors.firstName = 'Must be at lest 15 charecter or less';
  }
  if (!values.lastName) {
    errors.lastName = 'Required!';
  } else if (values.lastName.length > 15) {
    errors.lastName = 'Must be at lest 15 charecter or less';
  }
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  comments : ''
};
const onSubmit = (values) => {
    console.log(values);
    
  }

const NewformValidate = () =>{
    return(
        <Formik initialValues={initialValues} validate={validate} onSubmit={onSubmit}>  
        <div className='col-md-3 mt-4'>
            <Form>
                <div>
                <label htmlFor='firstName' className='form-label'>
                    Firstname :{' '}
                </label>
                <Field
                    type='text'
                    name='firstName'
                    className='form-control'
                    placeholder='firstname'
                />
                <ErrorMessage name='firstName'>
                  {(errorMsg1) => <div className='text-danger'>{errorMsg1}</div>}
                </ErrorMessage>
                </div>
                <div>
                <label htmlFor='lastName' className='form-label'>
                    Lastname :{' '}
                </label>
                <Field
                    type='text'
                    name='lastName'
                    className='form-control'
                    placeholder='lastname'
                />
                <ErrorMessage name='lastName' component={TextError}/>
                </div>
                <div>
                <label htmlFor='email' className='form-label'>
                    Email :{' '}
                </label>
                <Field
                    type='email'
                    name='email'
                    className='form-control'
                    placeholder='email'
                />
                <ErrorMessage name='email' component={TextError}/>
                </div>
                <div>
                  <label htmlFor='comments' className='form-label'>Comments : </label>
                  <Field as='textarea' name='comments' placeholder='Comments....' className='form-control' />
                  <ErrorMessage name='comments' />
                </div>
                 
                <button type='submit' className='btn btn-primary mt-3'>
                Submit
                </button>
            </Form>
            </div>
        </Formik>
    )
}

export default NewformValidate;

