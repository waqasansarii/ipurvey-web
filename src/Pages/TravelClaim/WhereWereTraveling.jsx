import React from 'react'
// assets
import headImg from '../../Assets/undraw_Airport_re_oqk1.png'
import arrival from '../../Assets/Icon awesome-plane-arrival.png'
import arrival2 from '../../Assets/Icon awesome-plane-arriva.png'
import path from '../../Assets/Path 6636.png'
import arrow from '../../Assets/Icon feather-arrow-rightw.png'

const WhereWereTraveling = ({ nextBtn, backBtn }) => {
  return (
    <div className="steper_form_container">
      <div className="stepper_form_md">
        <div className="stepper_form">
          <img src={headImg} alt="..." />
          <h2>Where were you traveling?</h2>
          <div className="stp_inp arrive_inp">
            <img src={arrival} alt="..." />
            <input
              type="text"
              name="text"
              id="text"
              placeholder="Departure Airport e.g. London or LHA"
            />
          </div>
          <div className="arrival_path">
            <img src={path} alt="..." />
          </div>
          <div className="stp_inp arrive_inp2">
            <img src={arrival2} alt="..." />
            <input
              type="text"
              name="text"
              id="text"
              placeholder="Arrival Airport e.g. Dubai or DIA"
            />
          </div>
          <div className="stp_btns">
            <button className="home_form_btn" onClick={nextBtn}>
              Continue <img src={arrow} alt="..." />{' '}
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

export default WhereWereTraveling
