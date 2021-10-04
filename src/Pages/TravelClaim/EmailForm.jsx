import React from 'react'
import calender from '../../Assets/Icon awesome-calendar-alt.png'
import arrow from '../../Assets/Icon feather-arrow-rightw.png'
import headImg from '../../Assets/undraw_Order_confirmed_re_g0if_light.png'

const EmailForm = ({nextBtn,backBtn}) => {
  return (
    <div className="steper_form_container">
      <div className="stepper_form_md">
        <div className="stepper_form">
          <img src={headImg} alt="..." />
          <h2>Voila! We'll need your email!</h2>
          <p className="stpr_email_para">
            Please enter your email address so we can send you the results and
            submit your claim!{' '}
          </p>
          <div className="stp_inp">
            <img src={calender} alt="..." />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
            />
          </div>
          <div className="stp_btns">
            <button className="home_form_btn" onClick={nextBtn}>
            Check Eligibility <img src={arrow} alt="..." />{' '}
            </button>
            <button className="stp_back" onClick={backBtn}>
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmailForm
