import React from 'react';

const Testimonial = () => {
  return (
    <section className='testimonial text-center'>
      <div className='container'>
        <div className='sec-title'>
          <h4 className=''>Our Client Says </h4>
        </div>
        <div
          id='testimonial4'
          className='carousel slide testimonial4_indicators testimonial4_control_button thumb_scroll_x swipe_x'
          data-ride='carousel'
          data-pause='hover'
          data-interval='5000'
          data-duration='2000'
        >
          <div className='carousel-inner' role='listbox'>
            <div className='carousel-item active'>
              <div className='testimonial4_slide'>
                <p>
                  I always have a nice experience working with UXT CLAN’s team.
                  They have great design aesthetics. They are a great listener
                  and pays attention to details and project needs. They provide
                  their services with the highest level of professionalism and
                  creativity. I have worked with them on numerous projects and
                  every time he meets all expectations.{' '}
                </p>
                <h4>Anderson Stutger</h4>
                <img
                  src='assets/images/reating.svg'
                  className='img-circle img-responsive'
                />
              </div>
            </div>
            <div className='carousel-item'>
              <div className='testimonial4_slide'>
                <p>
                  UXT CLAN helped us improve our product and built a completely
                  new set of user-friendly features. They have highly experts in
                  their teams. I have learned so many things from them .t Its
                  seasoned team worked fast and responded to messages even
                  faster. Without a doubt, I will be hiring UXT CLAN again for
                  our design needs.
                </p>
                <h4>Andy Huffman</h4>
                <img
                  src='assets/images/reating.svg'
                  className='img-circle img-responsive'
                />
              </div>
            </div>
            <div className='carousel-item'>
              <div className='testimonial4_slide'>
                <p>
                  Team UXT CLAN is a very talented team that understood our
                  needs. Even with our tight budget, they were very
                  accommodating and helped work through many of the questions we
                  had. They believe in building good relationships. They were
                  available at every stage that is required to make my product
                  successfully. I Will highly recommend and will seek them out
                  again without question!
                </p>
                <h4>Niki Tiwayne</h4>
                <img
                  src='assets/images/reating.svg'
                  className='img-circle img-responsive'
                />
              </div>
            </div>
            <div className='carousel-item'>
              <div className='testimonial4_slide'>
                <p>
                  UXT CLAN Team was very helpful and understanding and did not
                  hesitate to do revisions to make sure that the job was done
                  right. Excellent work with designing a refreshed UX, UI &
                  Development. Very good communication and regular updates. They
                  were on time for all meetings and worked around the clock to
                  ensure that timelines were met. I would definitely work with
                  them again.
                </p>
                <h4>Nikoly M</h4>
                <img
                  src='assets/images/reating.svg'
                  className='img-circle img-responsive'
                />
              </div>
            </div>
          </div>
          <a
            className='carousel-control-prev'
            href='#testimonial4'
            data-slide='prev'
          >
            <span className='carousel-control-prev-icon'>
              <i className='fas fa-chevron-left'></i>
            </span>
          </a>
          <a
            className='carousel-control-next'
            href='#testimonial4'
            data-slide='next'
          >
            <span className='carousel-control-next-icon'>
              <i className='fas fa-chevron-right'></i>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
