import React, { useState } from 'react';
import Modal from '../../components/Modal';

const Banner = () => {
  const [isHireUsPopup, setHireUsPopup] = useState(false);

  function hireUs() {
    setHireUsPopup((isHireUsPopup) => !isHireUsPopup);
  }
  return (
    <div>
      <Modal isOpen={isHireUsPopup} onClose={hireUs} />

      <a id='button-up'>
        <i className='fa fa-chevron-up ' />
      </a>
      <section className='main-banner '>
        <div className='container'>
          <div className='row align-items-center pt-md-5'>
            <div
              className='col-12 col-md-7'
              data-aos='zoom-in'
              data-aos-duration='2000'
            >
              <h1 className='mb-2'>
                We Turn Your Ideas into Reality & Solve your Problems Through
                Innovation
              </h1>
              <p className='mt-4 mb-2'>
                UXT CLAN offers Innovative & Tailored Digital Solutions that
                help your Business Grow Faster & Easier, — Just the Way You
                Planned! Our Key Services Include, But Not Limited To
              </p>
              <div className='top-trending  mb-2'>
                <span className='trending-bage'>
                  User Experience Design (UX Design)
                </span>
                <span className='trending-bage'>
                  User Interface Design (UI Design)
                </span>
                <span className='trending-bage'>Interaction Design (IXD)</span>
                <span className='trending-bage'>Front-End Development</span>
                <span className='trending-bage'>Backend Development</span>
                <span className='trending-bage'>
                  Full Cycle Product Development
                </span>
              </div>
              <div className='text-sm-left text-center'>
                <button className='btn-primary btn mt-4 py-2' onClick={hireUs}>
                  Let’s Talk
                </button>
              </div>
            </div>
            <div className='col-12 col-md-5 mt-4'>
              <div className='wrapper'>
                <div className='frame'></div>
              </div>
            </div>
          </div>
        </div>


        <div id='stars'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>


      </section>
    </div>
  );
};

export default Banner;
