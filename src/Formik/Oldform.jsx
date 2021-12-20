import React from 'react';
import { useFormik } from 'formik'


const validate = values =>{
    const errors = {};
    if(!values.firstName){
      errors.firstName = 'Required!';
    }
    else if(values.firstName.length > 15){
      errors.firstName = "Must be at lest 15 charecter or less";
    }
    if(!values.lastName){
      errors.lastName = 'Required!';
    }
    else if(values.lastName.length > 15){
      errors.lastName = "Must be at lest 15 charecter or less";
    }
    if (!values.email) {
      errors.email = 'Required';
    } 
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    return errors;
};

const initialValues = {
  firstName : '',
  lastName : '',
  email : '',
};

const Oldform = () => {
  const formik = useFormik({
    initialValues,
    validate,
    onSubmit : values =>{
      console.log(values)
      formik.resetForm()
    }
  })
  return (
    <div className='col-md-3 mt-4'>
      <form onSubmit={formik.handleSubmit}>
        <div>
            <label htmlFor="firstName" className='form-label'>Firstname : </label>
            <input type="text" name='firstName' className='form-control' value={formik.values.firstName} onChange={formik.handleChange} placeholder='firstName' onBlur={formik.handleBlur}/>
            {formik.touched.firstName && formik.errors.firstName ? <div className='text-danger'>{formik.errors.firstName}</div> : null}
          </div>
          <div>
            <label htmlFor="lastName" className='form-label'>Lastname : </label>
            <input type="text" name='lastName' className='form-control' value={formik.values.lastName} onChange={formik.handleChange} placeholder='lastName' onBlur={formik.handleBlur}/>
            {formik.touched.lastName && formik.errors.lastName ? <div className='text-danger'>{formik.errors.lastName}</div> : null}
          </div>
          <div>
            <label htmlFor="email" className='form-label'>Email : </label>
            <input type="email" name='email' value={formik.values.email} placeholder='Enter your email' className='form-control' onChange={formik.handleChange} onBlur={formik.handleBlur}/>
            {formik.touched.email && formik.errors.email ? <div className='text-danger'>{formik.errors.email}</div> : null}
          </div>
          <button type='submit' className='btn btn-primary mt-3'>Submit</button>
      </form>
    </div>
  );
}

export default Oldform;
