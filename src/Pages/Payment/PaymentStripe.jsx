import React from "react";
import arrowLeft from "../../Assets/Icon feather-arrow-left.png";
import appleIcon from "../../Assets/Icon awesome-apple.png";
import payCards from "../../Assets/797313.png";
import eyeIcon from "../../Assets/Icon awesome-eye-slash.png";
import { Link } from "react-router-dom";
const PaymentStripe = () => {
  return (
    <React.Fragment>
      <div className="payment_stripe">
        <div className="pstripe_head">
          <Link to="/payment/method">
            <img src={arrowLeft} alt="..." />
          </Link>
          <h1>Stripe</h1>
        </div>
        <div className="row mt-3">
          <div className="col-lg-12">
            <button className="apple_pay_btn">
              <img src={appleIcon} alt="..." /> <span>Apple Pay</span>
            </button>
          </div>
          <div className="col-lg-12">
            <div className="pm_hr">
              <hr />
              <span>or pay with card</span>
              <hr />
            </div>
          </div>
          <div className="col-lg-12">
            <div className="ps_input1">
              <input type="text" placeholder="Card Number" />
              <img src={payCards} alt="..." />
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-lg-6">
            <div className="ps_input1">
              <input type="text" placeholder="Expiry Date" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="ps_input1">
              <input type="text" placeholder="CVV" />
              <img src={eyeIcon} alt="..." />
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-lg-12">
            <div className="ps_input1">
              <input type="text" placeholder="Name on the card" />
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-lg-12">
            <div className="ps_input1">
              <select name="" id="">
                <option value="">Country or Region</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-lg-12">
            <button className="home_form_btn">
              <Link to="/success">Continue to pay</Link>
            </button>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-lg-12">
            <Link className="hl_text">Having trouble logging in?</Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PaymentStripe;
