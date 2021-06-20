import React, { useState } from 'react';
import axios from 'axios';

import SuccessModel from '../../components/Modal/successmodel';

const NewLetter = () => {
  const [email, setEmail] = useState('');
  const [isSuccessModel, setIsSuccessModel] = useState(false);

  const subscribe = (e) => {
    console.log(email);
    e.preventDefault();
    setIsSuccessModel((isSuccessModel) => !isSuccessModel);

    axios
      .post('/subscribe', { email })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const onCloseSuccess = () => {
    setIsSuccessModel((isSuccessModel) => !isSuccessModel);
  };
  return (
    <section className='newsletter'>
      {
        <SuccessModel
          title='Success!'
          description='Subscription'
          description2='Thanks for subscription'
          isOpen={isSuccessModel}
          onClose={onCloseSuccess}
        />
      }
      <div className='container' data-aos='zoom-in' data-aos-duration='2000'>
        <div className='sec-title'>
          <h4 className='mb-4'>Subscribe to our Newsletter!</h4>
        </div>
        <div className='row align-items-center'>
          <div className='co-12 col-md-5 mx-auto text-center'>
            <form>
              <div className='form-group'>
                <input
                  type='email'
                  className='form-control'
                  id=''
                  aria-describedby=''
                  placeholder='john@gmail.com'
                  onChange={(e) => setEmail(e.target.value)}
                />
                <i className='far fa-envelope'></i>
              </div>
            </form>
            <button
              id='show-msg'
              onClick={subscribe}
              className='btn-primary btn py-2 mt-3'
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewLetter;
