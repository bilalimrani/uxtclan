import React, { useState } from 'react';

import 'react-responsive-modal/styles.css';
import Modal from 'react-responsive-modal';

import './Modal.css';

const Popup = ({ isOpen, onClose, title, description , description2}) => {


  return (
    <div >
      <Modal center open={isOpen} onClose={onClose}>

      <div className="text-center success-modal">
 <img src='assets/images/success.svg' className='img-fluid' />
        <h5 className='heading'>{title}</h5>
        <p>{description}</p>
         <p>{description2}</p>
        <button className="btn py-2 btn-primary " onClick={onClose}>Ok
</button>     
</div>
 </Modal>

      
    </div>
  );
};

export default Popup;
