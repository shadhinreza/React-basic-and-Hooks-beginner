import React, { Component } from 'react';

class index extends Component {
  state = {
    name: '',
    country: '',
    bio: '',
    birthDay: '',
  };
  changeHandler = (e) =>{
      this.setState({[e.target.name] : e.target.value})
  }
  dataHandler = () =>{
      let {name,country,bio,birthDay} = this.state;
      document.getElementById('showData').innerHTML = `Name is : ${name}, Country is : ${country}, About me : ${bio}, Date of birth : ${birthDay}`;  
  }
  render() {
    return (
      <div className='offset-3 col-md-6'>
        <input
          type='text'
          name='name'
          placeholder='Enter name'
          className='form-control'
          onChange={this.changeHandler}
        />
        <br />
        <select name='country' id='country' className='form-control' onChange={this.changeHandler}>
          <option value='Select Country'>Select Country</option>
          <option value='Bangladesh'>Bangladesh</option>
          <option value='India'>India</option>
          <option value='Pakisthan'>Pakisthan</option>
          <option value='Nepal'>Nepal</option>
          <option value='U.S.A'>U.S.A</option>
          <option value='Mayanmar'>Mayanmar</option>
        </select>
        <br />
        <textarea
          name='bio'
          id='bio'
          cols='10'
          rows='5'
          className='form-control'
          placeholder='Write about yourself'
          onChange={this.changeHandler}
        />
        <br />
        <input type='date' name='birthDay' className='form-control' onChange={this.changeHandler}/>
        <br />
        <input
          type='submit'
          value='Submit'
          className='form-control btn btn-success'
          onClick={this.dataHandler}
        />
        <br />
        <br />
        <div id="showData"></div>
      </div>
    );
  }
}

export default index;
