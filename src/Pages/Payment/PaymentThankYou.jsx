import React from "react";
import orderConfirmed from "../../Assets/undraw_Order_confirmed_re_g0if.png";
import { Link } from "react-router-dom";

const PaymentThankYou = () => {
  return (
    <React.Fragment>
      <div className="payment_thank">
        <div className="row">
          <div className="col-lg-12">
            <div className="ps_img">
              <img src={orderConfirmed} alt="..." />
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="ps_text">
            <h2>Thankyou!</h2>
            <p>Payment has been made successfully!</p>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <button className="home_form_btn">
              <Link to="/dashboard">Continue to Dashboard</Link>
            </button>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-lg-12">
            <Link to="/" className="hl_text">Retrieve another booking</Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PaymentThankYou;
