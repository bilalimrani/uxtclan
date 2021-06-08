import React from 'react';
import NewLetter from '../NewsLetter';
import Testimonial from '../Testimonial';
import OurValues from '../OurValues';
import OurTeams from '../OurTeams';
import Processes from '../Processes';
import Projects from '../Projects';
import Services from '../Services';
import Banner from '../Banner'; 
import './Main.css';

const Main = () => {
  return (
    <div>
      <div className='cookies-covid'>
        <div id='covid'>
          <div className='row'>
            <div className='col-12 col-md-9 mx-auto'>
              <div className='row align-items-center'>
                <div className=' adjust col-10 col-md-10'>
                  <p className='m-0'>
                    Get the latest news & updates on 
                    <span className='mob-view ml-1'>
                       COVID-19.
                      <a className="ml-1" href='https://www.who.int/health-topics/coronavirus#tab=tab_1'>
                         Read More
                      </a>
                    </span>
                  </p>
                </div>
                <div className='col-2 col-md-2 text-center'>
                  <button className='covid-close btn ml-md-5 p-0'>
                    <img src='assets/images/close.svg' />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id='cookies'>
          <div className='row m-0'>
            <div className='col-12 col-md-9 mx-auto'>
              <div className='d-flex'>
                <img src='assets/images/Vector.svg' />
                <h6>Cookies!</h6>
              </div>
              <div className='row'>
                <div className='col-12 col-md-10  pl-5'>
                  <p className='m-0'>
                    We use cookies to enhance your experience, analyze traffic,
                    marketing, and security. By visiting our website, you agree
                    to our use of cookies.    <a href='#'>  Learn <i className='fas fa-arrow-up'></i>
                    </a>
                  </p>
                </div>
                <div className='col-12 col-md-2 text-center'>
                  <button className='close-div btn-primary btn mt-3 mt-md-0'>Accept</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Banner />
      <Services />
      <Projects />
      <Processes />
      <OurTeams />
      <OurValues />
      <Testimonial />
      <NewLetter />
    </div>
  );
};

export default Main;
