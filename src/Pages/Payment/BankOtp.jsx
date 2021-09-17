import React from "react";
import arrowLeft from "../../Assets/Icon feather-arrow-left.png";
import starlingIcon from "../../Assets/Mask Group 2.png";
import lockIcon from "../../Assets/Icon awesome-lock.png";
import otpIcon from "../../Assets/Group 863.png";
import { Link } from "react-router-dom";

const BankOtp = () => {
  return (
    <React.Fragment>
      <div className="bank_otp">
        <div className="row mt-3">
          <div className="col-lg-12">
            <div className="pm_head">
              <div>
                <Link to="/payment/bank-auth">
                  <img src={arrowLeft} alt="..." />
                </Link>
                <h2 className="ms-2">Authenticate your Login Credentials</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row auth_text mt-3">
          <div className="col-lg-12">
            <div className="d-flex flex-column align-items-center">
              <img src={starlingIcon} alt="..." />
              <h5>Starling Bank</h5>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="d-flex align-items-center justify-content-center">
              <img src={lockIcon} alt="..." />
              <h5 className="ms-2">Starling Bank Secure Gateway</h5>
            </div>
          </div>
        </div>

        <div className="row mt-2 otp_text">
          <div className="col-lg-12 d-flex justify-content-center">
            <img style={{ width: "35px" }} src={otpIcon} alt="..." />
          </div>
          <div className="col-lg-12 mt-2">
            <h5>OTP Verification</h5>
          </div>
          <div className="col-lg-12 mt-2">
            <p>Enter the OPT Verification code sent to +44 733 666 2222</p>
          </div>
        </div>
        <div className="otp_box row justify-content-center">
          <div className="col-3 col-sm-3 col-md-3 col-lg-3">
            <div className="otp_input">-</div>
          </div>
          <div className="col-3 col-sm-3 col-md-3 col-lg-3">
            <div className="otp_input">-</div>
          </div>
          <div className="col-3 col-sm-3 col-md-3 col-lg-3">
            <div className="otp_input">-</div>
          </div>
          <div className="col-3 col-sm-3 col-md-3 col-lg-3">
            <div className="otp_input">-</div>
          </div>
        </div>
        <div className="row mt-3 mb-5">
          <Link to="/" className="dont_text">
            Resend Code
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BankOtp;
