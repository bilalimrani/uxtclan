import React from 'react';

const OurValues = () => {
  return (
    <section className='our-values'>
      <div className='container'>
        <div className='sec-title'>
          <h4 className=''>Our Values</h4>
        </div>
        <div className='row align-items-center'>
          <div
            className='card col-12 col-md-3 text-center'
            data-aos='zoom-in'
            data-aos-duration='2000'
          >
            <img src='assets/images/Our-Values1.svg' />
            <p>Confidentiality & Credibility</p>
          </div>
          <div
            className=' card col-12 col-md-3 text-center'
            data-aos='zoom-in'
            data-aos-duration='2000'
          >
            <img src='assets/images/Our-Values3.svg' className='img-fluid' />
            <p>Trust & Commitment</p>
          </div>
          <div
            className='card col-12 col-md-3 text-center'
            data-aos='zoom-in'
            data-aos-duration='2000'
          >
            <img src='assets/images/Our-Values2.svg' className='img-fluid' />
            <p>Adaptability & Flexibility</p>
          </div>
          <div
            className='card col-12 col-md-3 text-center'
            data-aos='zoom-in'
            data-aos-duration='2000'
          >
            <img src='assets/images/Our-Values4.svg' className='img-fluid' />
            <p>Dedication & Responsibility</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValues;
