import React from 'react'
import headImg from '../../Assets/undraw_feeling_blue_4b7q (2).png'

const TryAgain = ({ nextBtn }) => {
  return (
    <div className="steper_form_container">
      <div className="stepper_form_md">
        <div className="stepper_form">
          <img src={headImg} alt="..." />
          <h2>Oops! That’s way too far back!</h2>
          <div className="stp_para">
            {/* <img src={calender} alt="..." />
            <input
              type="text"
              name="date"
              id="date"
              placeholder="Enter or select a date"
            /> */}
            <p>
              Sorry we can't process flight bookings beyond <strong> 6 years </strong> time period!
              We're trying our best to include bookings since man ever learned
              to fly!
            </p>
          </div>
          <div className="stp_btns">
            <button className="home_form_btn" onClick={nextBtn}>
              Try again!
               {/* <img src={arrow} alt="..." />{' '} */}
            </button>
            <button className="stp_back">Report an issue</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TryAgain
