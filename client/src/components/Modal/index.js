import React, { useState } from 'react';
import axios from 'axios';
import 'react-responsive-modal/styles.css';
import Modal from 'react-responsive-modal';
import { useAlert } from 'react-alert';
import './Modal.css';
import SuccessModel from './successmodel.js'

const Popup = ({ isOpen, onClose }) => {
  const [data, setData] = useState({});
  const [isSuccessModel, setIsSuccessModel] = useState(false);

  const alert = useAlert();

  const formData = (field, e) => {
    setData({ field: e });
  };

  const hireus = (e) => {
    e.preventDefault();
    onClose();
    setIsSuccessModel((isSuccessModel) => !isSuccessModel);
    axios
      .post('/hireus', data)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const onCloseSuccess = () => {
    setIsSuccessModel((isSuccessModel) => !isSuccessModel);

  }


  return (
    <div className="my-modal">
    {<SuccessModel title='Success!' description='We have received your requirements.' description2='Our customer service representative will contact you soon.'  isOpen={isSuccessModel} onClose={onCloseSuccess} />}
      <Modal center open={isOpen} onClose={onClose}>
        <h5 className='heading'>Hire Us</h5>
        <div>
          <form>
            <div className='form-group'>
            <label for="exampleInputEmail1">Name<span>*</span></label>
              <input
                type='text'
                onChange={(e) => setData({ ...data, name: e.target.value })}
                className='form-control'
                placeholder='John Ellen'
              />
               <img src='assets/images/user.svg' />
            </div>
            <div className='form-group'>
            <label for="exampleInputEmail1">Email<span>*</span></label>
              <input
                type='text'
                onChange={(e) => setData({ ...data, email: e.target.value })}
                className='form-control'
                placeholder='john@gmail.com'
              />
              <img src='assets/images/envelope.svg' />
            </div>
            <div className='form-group'>
            <label for="exampleInputEmail1">Phone</label>
              <input
                type='text'
                onChange={(e) => setData({ ...data, phone: e.target.value })}
                className='form-control'
                placeholder='+16135550171'
              />
              <img src='assets/images/phone.svg' />
            </div>
            <div className='form-group'>
             <label for="exampleInputEmail1">Requirements</label>
              <textarea
                className='form-control'
                rows='5'
                onChange={(e) =>
                  setData({ ...data, description: e.target.value })
                }
                placeholder='Tell us about your requirements'
              ></textarea>
            </div>
            <div className="text-center">
            <button
              onClick={hireus}
              type='submit'
              className='btn py-2 btn-primary '
            >
              Send
            </button>
            </div>
          </form>
        </div>
      </Modal>


    </div>
  );
};

export default Popup;
