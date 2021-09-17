import React from "react";
import arrowLeft from "../../Assets/Icon feather-arrow-left.png";
import eyeIcon from "../../Assets/Icon awesome-eye-slash.png";
import paypalIcon from "../../Assets/PayPal_logo_logotype_emblem.svg";
import { Link } from "react-router-dom";
const PaymentPaypal = () => {
  return (
    <React.Fragment>
      <div className="payment_stripe payment">
        <div className="pstripe_head">
         <Link to="/payment/method"><img src={arrowLeft} alt="..." /></Link> 
         <img className="paypal_img" src={paypalIcon} alt="..." />
        </div>
        <div className="row mt-3">
          <div className="pay-text col-lg-12 p-0 d-flex justify-content-center">
            <span>Please login to PayPal to complete the transaction!</span>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-lg-12">
            <div className="ps_input1">
            <input type="email" placeholder="Email Address" />
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-lg-12">
            <div className="ps_input1">
              <input type="password" placeholder="Password" />
              <img src={eyeIcon} alt="..." />
            </div>
          </div>
        </div>
        
        <div className="row mt-5">
          <div className="col-lg-12">
            <button className="home_form_btn">
              <Link to="success">Login to Paypal</Link>
            </button>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-lg-12">
            <Link className="hl_text d-flex justify-content-center">Having trouble logging in?</Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PaymentPaypal;
