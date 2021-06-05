import React from 'react';

const Processes = () => {
  return (
    <section id='our-Processes' className='our-Processes'>
      <div className='container'>
        <div className='sec-title'>
          <h4>Our Processes</h4>
        </div>
        <div className='row align-items-center'>
          <div className='co-12 col-md-6'>
            <h5 className='mb-3'>
              Design{' '}
              <span className='section-bage'>INTERNATIONAL STANDARS</span>
            </h5>
            <ul className='p-0'>
              <li>- Human Centered Design Methods </li>
              <li>- Design Thinking  </li>
              <li>- Design Sprints</li>
            </ul>
            <h5 className='mb-3'>
              Development{' '}
              <span className='section-bage'>INTERNATIONAL STANDARS </span>
            </h5>
            <ul className='p-0'>
              <li>- Agile Methodology</li>
              <li>- Rapid Application Development (RAD)</li>
              <li>- Waterfall Software Development Model</li>
            </ul>
          </div>
          <div
            className='co-12 col-md-6'
            data-aos='fade-down-left'
            data-aos-duration='3000'
          >
            <img
              src='assets/images/process.svg'
              className='mt-4 mt-sm-0 img-fluid'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Processes;
