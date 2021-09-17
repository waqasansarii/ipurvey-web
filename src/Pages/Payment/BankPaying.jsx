import React from "react";
import arrowLeft from "../../Assets/Icon feather-arrow-left.png";
import bankImg from "../../Assets/Group 868.png";
import { Link } from "react-router-dom";
const BankPaying = () => {
  return (
    <React.Fragment>
      <div className="payment_bank_method1 paying_bank">
        <div className="row">
          <div className="col-lg-12">
            <div className="pm_head">
              <div>
                <Link to="/payment/select-bank">
                  <img src={arrowLeft} alt="..." />
                </Link>
                <h2>Select your bank</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-lg-12">
            <div className="ps_img">
              <Link to="/payment/select-bank">
                <img src={bankImg} alt="..." />
              </Link>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="ps_text">
            <h2>Paying from your Starling Bank account</h2>
            <p>
              By clicking Yes, I Agree!, you agree to be redirected to Starling
              Bank, where you can login to your account and approve the payment
              to <strong>iPurvey Inc</strong>, for your <strong>£100.25</strong>{" "}
              transaction
            </p>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-lg-12">
            <button className="home_form_btn">
              <Link to="success">Yes, I Agree!</Link>
            </button>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-lg-12">
            <Link className="hl_text">Change Bank</Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BankPaying;
