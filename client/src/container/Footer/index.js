import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='footer w-100'>
      <div className='container'>
        <div className='row  align-items-center'>
          <div className='col-12 col-md-3 text-center text-md-left'>
            <a href='index.html'>
              <img src='assets/images/footer-logo.svg' />
            </a>
            <p className='mt-3'>&copy;2021 UXT CLAN</p>
          </div>
          <div className='col-12 col-md-7'>
            <ul className='nav'>
              <li className='nav-item'>
                <Link className='nav-link' to='/about'>
                  About Us
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/contact'>
                  Contact Us
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/privacy'>
                  Privacy & Cookies
                </Link>
              </li>
              <li className='nav-item'>
                <a
                  className='nav-link'
                  href='https://www.who.int/health-topics/coronavirus#tab=tab_1'
                >
                  COVID-19
                </a>
              </li>
            </ul>
          </div>
          <div className='col-12 col-md-2 social-center'>
            <div className='social'>
              <h6>Follow Us On</h6>
              <ul className='mt-3 mb-0'>
                <a href='javascript: void(0);'>
                  <li>
                    {' '}
                    <i className='fab fa-facebook-f'></i>
                  </li>
                </a>
                <a href='javascript: void(0);'>
                  <li>
                    {' '}
                    <i className='fab fa-linkedin-in'></i>
                  </li>
                </a>
                <a href='javascript: void(0);'>
                  <li>
                    {' '}
                    <i className='fab fa-twitter'></i>
                  </li>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
