import React from 'react';

const Projects = () => {
  return (
    <section id='our-projects' className='our-projects'>
      <div className='container'>
        <div className='sec-title'>
          <h4>Our Projects</h4>
        </div>
        <div className='row'>
          <div
            className='card col-12 col-md-4 text-center'
            data-aos='fade-right'
            data-aos-duration='3000'
          >
            <img src='assets/images/our-project.svg' />
            <p>Dribble</p>
            <a href='#'>Design Projects</a>
          </div>
          <div className='card col-12 col-md-4 text-center'>
            <img src='assets/images/over-project-2.svg' />
            <p>Behance</p>
            <a href='#'>View Case Studies </a>
          </div>
          <div
            className='card col-12 col-md-4 text-center'
            data-aos='fade-left'
            data-aos-duration='3000'
          >
            <img src='assets/images/over-project-3.svg' />
            <p>Github</p>
            <a href='#'>Development Projects </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
