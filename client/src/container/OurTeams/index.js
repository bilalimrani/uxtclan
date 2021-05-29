import React from 'react';

const OurTeams = () => {
  return (
    <section id='our-Teams' className='our-Teams'>
      <div className='container'>
        <div className='sec-title'>
          <h4>Our Teams</h4>
        </div>
        <div className='row align-items-center'>
          <div className='co-12 col-md-6'>
            <p>
              {' '}
              We’re a seasoned team of Digital Geeks who share a strong
              commitment to enabling businesses through innovative and advanced
              digital solutions across the world catering to the growing needs
              of your customers effectively. We envision bringing an impactful
              change in the world through our wonders & solutions, —To Bring
              people Close, Improve Their Experience over the Internet, and Help
              Businessmen Run Business Effortlessly.
            </p>
          </div>
          <div
            className='co-12 col-md-6'
            data-aos='flip-down'
            data-aos-duration='2000'
          >
            <div className='team-img mt-4 mt-sm-0'>
              <img src='assets/images/team.svg' className='img-fluid' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeams;
