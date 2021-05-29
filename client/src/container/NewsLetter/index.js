import React from 'react';

const NewLetter = () => {
  return (
    <section className='newsletter'>
      <div className='container' data-aos='zoom-in' data-aos-duration='2000'>
        <div className='sec-title'>
          <h4 className='mb-4'>Subscribe to our Newsletter!</h4>
        </div>
        <div className='row align-items-center'>
          <div className='co-12 col-md-5 mx-auto text-center'>
            <form>
              <div className='form-group'>
                <input
                  type='email'
                  className='form-control'
                  id=''
                  aria-describedby=''
                  placeholder='john@gmail.com'
                />
                <i className='far fa-envelope'></i>
              </div>
            </form>
            <button id='show-msg' className='btn-primary btn py-2 mt-3'>
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewLetter;
