import React from "react";
import { Link } from "react-router-dom";
import arrow from "../../Assets/Icon feather-arrow-rightw.png";

const OneStepAway = ({ nextBtn }) => {
  return (
    <div className="steper_form_container">
      <div className="stepper_form_md">
        <div className="stepper_form">
          <h2 style={{ fontSize: "1.1rem" }}>
            You're one step away from your claim!
          </h2>
          <p className="stpr_email_para">
            Please enter your booking reference number!
          </p>
          <p className="refrence_num">Booking Reference Number</p>
          <div className="stp_inp">
            <input type="text" name="date" id="date" placeholder="12345678" />
          </div>
          <div className="accept_privacy">
            <input type="checkbox" className='awayCheck' name="accept" id="accept" />
            <p>
              We have updated our{" "}
              <Link to="" className="stp_link">
                {" "}
                Terms of Service{" "}
              </Link>
              ,{" "}
              <Link to="" className="stp_link">
                Privacy Policy{" "}
              </Link>
              , and{" "}
              <Link to="" className="stp_link">
                {" "}
                Cookie Policy{" "}
              </Link>
              . By accepting, you agree to our updated{" "}
              <Link
                to=""
                style={{ textDecoration: "underline" }}
                className="stp_link2"
              >
                terms and policies.
              </Link>
            </p>
          </div>
          <div className="stp_btns">
            <button className="home_form_btn" onClick={nextBtn}>
              Sign Up to iPurvey <img src={arrow} alt="..." />{" "}
            </button>
            <button className="stp_back">
              Already a member?
              <Link to="/login" className="stp_link">
                {" "}
                Login{" "}
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneStepAway;
