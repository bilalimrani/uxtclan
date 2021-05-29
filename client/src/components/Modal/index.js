import React, { useState } from 'react';
import axios from 'axios';
import 'react-responsive-modal/styles.css';
import Modal from 'react-responsive-modal';
import { useAlert } from 'react-alert';
import './Modal.css';

const Popup = ({ isOpen, onClose }) => {
  const [data, setData] = useState({});
  const alert = useAlert();

  const formData = (field, e) => {
    setData({ field: e });
  };

  const hireus = (e) => {
    e.preventDefault();
    onClose();
    alert.show('Thank You! We will contact you shortly.');
    axios
      .post('/hireus', data)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div>
      <Modal center open={isOpen} onClose={onClose}>
        <h5 className='heading'>Hire Us</h5>
        <div>
          <form>
            <div className='form-group'>
              <input
                type='text'
                onChange={(e) => setData({ ...data, name: e.target.value })}
                className='form-control'
                placeholder='Name'
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                onChange={(e) => setData({ ...data, email: e.target.value })}
                className='form-control'
                placeholder='Email'
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                onChange={(e) => setData({ ...data, phone: e.target.value })}
                className='form-control'
                placeholder='Phone'
              />
            </div>
            <div className='form-group'>
              <textarea
                className='form-control'
                rows='5'
                onChange={(e) =>
                  setData({ ...data, description: e.target.value })
                }
                placeholder='Tell us about your requirements'
              ></textarea>
            </div>
            <button
              onClick={hireus}
              type='submit'
              className='btn btn-primary my-1'
            >
              Submit
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default Popup;
