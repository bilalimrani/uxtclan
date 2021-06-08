import React, { useState } from 'react';

import axios from 'axios';
import { useAlert } from 'react-alert';
import './Contactus.css';
import SuccessModel from '../../components/Modal/successmodel.js';

const ContactUs = () => {
  const [data, setData] = useState({});
  const [isSuccessModel, setIsSuccessModel] = useState(false);
  const [isFormValidate, setIsFormValidate] = useState(false);

  const alert = useAlert();

  const contactUs = (e) => {
    e.preventDefault();
    setIsFormValidate(true);

    const { name, email } = data;
    if ((name, email)) {
      setIsSuccessModel((isSuccessModel) => !isSuccessModel);

      axios
        .post('/contactus', data)
        .then(function (response) {})
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  const onCloseSuccess = () => {
    setIsSuccessModel((isSuccessModel) => !isSuccessModel);
  };

  return (
    <div className='contactContainer'>
      {
        <SuccessModel
          title='Success!'
          description='We have received your requirements.'
          description2='Our customer service representative will contact you soon.'
          isOpen={isSuccessModel}
          onClose={onCloseSuccess}
        />
      }
      {}
      <h5 className='contactHeading'>Contact Us</h5>
      <div className='form1'>
        <form>
          <div className='form-group'>
            <label for='exampleInputEmail1'>
              Name<span>*</span>
            </label>
            <input
              type='text'
              className='form-control'
              placeholder='John Ellen'
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
            <img src='assets/images/user.svg' />
          </div>
          {isFormValidate && !data.name && (
            <span style={{ color: '#FD5800' }}>Please enter name</span>
          )}
          <div className='form-group'>
            <label for='exampleInputEmail1'>
              Email<span>*</span>
            </label>
            <input
              type='text'
              className='form-control'
              placeholder='john@gmail.com'
              required
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
            <img src='assets/images/envelope.svg' />
          </div>
          {isFormValidate && !data.email && (
            <span style={{ color: '#FD5800' }}>Please enter email</span>
          )}
          <div className='form-group'>
            <label for='exampleInputEmail1'>Description</label>
            <textarea
              className='form-control'
              rows='5'
              placeholder='Tell us '
              onChange={(e) =>
                setData({ ...data, description: e.target.value })
              }
            ></textarea>
          </div>
          <div className='text-center'>
            <button
              onClick={contactUs}
              type='submit'
              className='py-2 btn btn-primary mt-4 mt-md-5'
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
