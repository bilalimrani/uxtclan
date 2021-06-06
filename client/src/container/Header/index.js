import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import history from '../../history';
import Modal from '../../components/Modal';

const Header = () => {
  const [isHireUsPopup, setHireUsPopup] = useState(false);

  function hireUs() {
    setHireUsPopup((isHireUsPopup) => !isHireUsPopup);
  }

  const goto = () => {
    window.location.href = '/';
  };

  return (
    <Fragment>
      <Modal isOpen={isHireUsPopup} onClose={hireUs} />
      <header className='header'>
        <div className='container'>
          <nav className='navbar navbar-expand-lg '>
            <a className='navbar-brand' onClick={goto}>
              <img src='assets/images/footer-logo.svg' />
            </a>
            <button
              className='navbar-toggler x collapsed'
              type='button'
              data-toggle='collapse'
              data-target='#navbarsExample05'
              aria-controls='navbarsExample05'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarsExample05'>
              <ul className='navbar-nav mr-auto'>
                <div className='navmob-btn'>
                  <a href='#services' className='btn theme-btn mr-2'>
                    Make Decision
                  </a>
                  <button className='btn btn-primary' onClick={hireUs}>
                    Hire Us
                  </button>
                </div>
                <li className='nav-item'>
                  <a className='nav-link' href='#services'>
                    Services
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#our-projects'>
                    Projects
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#our-Processes'>
                    Processes
                  </a>
                </li>
                <li className='nav-item'>
                  <a href='#our-Teams' className='nav-link'>
                    Teams
                  </a>
                </li>
              </ul>
              <div className='nav-btn'>
                <a href='#services' className='btn theme-btn mr-2'>
                  Make Decision
                </a>
                <button className='btn btn-primary' onClick={hireUs}>
                  Hire Us
                </button>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
