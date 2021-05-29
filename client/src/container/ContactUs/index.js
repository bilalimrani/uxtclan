import React, { useState } from 'react';
import axios from 'axios';
import { useAlert } from 'react-alert';
import './Contactus.css';

const ContactUs = () => {
  const [data, setData] = useState({});
  const alert = useAlert();

  const contactUs = (e) => {
    e.preventDefault();
    alert.show('Thank You! We will contact you shortly.');
    axios
      .post('/contactus', data)
      .then(function (response) {})
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className='contactContainer'>
      <h5 className='contactHeading'>Contact Us</h5>
      <div className='form1'>
        <form>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              placeholder='Name'
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              placeholder='Email'
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </div>
          <div className='form-group'>
            <textarea
              className='form-control'
              rows='5'
              placeholder='Tell us about your requirements'
              onChange={(e) =>
                setData({ ...data, description: e.target.value })
              }
            ></textarea>
          </div>
          <button
            onClick={contactUs}
            type='submit'
            className='btn btn-primary my-1'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
