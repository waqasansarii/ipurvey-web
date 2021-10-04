import React from 'react'
// assets
import headImg from '../../Assets/undraw_checking_boxes_2ibd.png'
import calender from '../../Assets/Icon awesome-calendar-alt.png'
import arrow from '../../Assets/Icon feather-arrow-rightw.png'

const DepartureDateForm = ({nextBtn,backBtn}) => {
  
  return (
    <div className="steper_form_container">
      <div className="stepper_form_md">
        <div className="stepper_form">
          <img src={headImg} alt="..." />
          <h2>What's the departure date?</h2>
          <div className="stp_inp">
            <img src={calender} alt="..." />
            <input type="text" name="date" id="date" placeholder='Enter or select a date'  />
          </div>
          <div className="stp_btns">
            <button className="home_form_btn" onClick={nextBtn}>
              Continue <img src={arrow} alt="..." />{' '}
            </button>
            <button className='stp_back' onClick={backBtn} >Back</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DepartureDateForm
