import React from "react";
import qrCode from "../../Assets/Group 852.png";
import lockIcon from "../../Assets/Icon awesome-lock.png";
import starlingIcon from "../../Assets/Mask Group 2.png";
import arrowLeft from "../../Assets/Icon feather-arrow-left.png";
import { Link, useHistory } from "react-router-dom";

const BankAuthQr = (props) => {
  const history = useHistory();
  return (
    <>
      <div className="bank_auth payment">
        <div className="row">
          <div className="col-lg-12">
            <div className="pm_head">
              <div>
                <img
                  onClick={() => history.goBack()}
                  style={{ cursor: "pointer" }}
                  src={arrowLeft}
                  alt="..."
                />
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
          <div className="col-lg-12">
            <p>Please select your preferred login method:</p>
          </div>
        </div>
        <div className="row">
          <div className="auth_tabs">
            <Link
              to={props.path ? "/planpayment/bank-auth" : "/payment/bank-auth"}
            >
              <button className="auth_non_active_tab">
                Internet Banking ID
              </button>
            </Link>
            <button className="auth_active_tab">QR Code</button>
          </div>
        </div>
        <div className="row mt-3">
          <p>Sign In using QR Code</p>
        </div>
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <img src={qrCode} alt="..." />
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-lg-12">
            <Link
              to={
                props.path
                  ? "/planpayment/confirm-payment"
                  : "/payment/confirm-payment"
              }
            >
              <button className="home_form_btn">Login to Starling Bank</button>
            </Link>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-lg-12">
            <Link
              to={props.path ? "/plan/payment-failed" : "/payment/failed"}
              className="hl_text"
            >
              Cancel transcation
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BankAuthQr;
