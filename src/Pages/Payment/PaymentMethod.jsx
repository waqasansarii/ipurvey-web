import React from "react";
import arrowLeft from "../../Assets/Icon feather-arrow-left.png";
import paypalIcon from "../../Assets/Group 4071.svg";
import tick from "../../Assets/Group 4169.png";
import stripeIcon from "../../Assets/Group 4070.svg";
import bankIcon from "../../Assets/Group 891.svg";
import wArrow from "../../Assets/Icon feather-arrow-rightw.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const options = {
  paypal: {
    name: "Payment with Paypal",
    img: paypalIcon,
    route: "/payment/paypal",
  },
  stripe: {
    name: "Payment with Stripe",
    img: stripeIcon,
    route: "/payment/stripe",
  },
  bank: {
    name: "Payment with Bank",
    img: bankIcon,
    route: "/payment/bank-method",
  },
};

const PaymentMethod = () => {
  const [active, setActive] = useState("paypal");
  return (
    <React.Fragment>
      <div className="pay_method">
        <div className="row">
          <div className="col-lg-12">
            <div className="pm_head">
              <div>
                <Link to="/payment/options">
                  <img src={arrowLeft} alt="..." />
                </Link>
                <h2>Select a Payment Method</h2>
              </div>
              <p>Select a payment method to continue!</p>
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-lg-12">
            <div className="tr_details_1">
              <span>TRANSCATION DETAILS</span>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="tr_details_2">
              <div>
                <span>Single Claim Initiation Fee</span>
                <span>£5.99</span>
              </div>
              <hr />
              <div>
                <span>Total</span>
                <span>£6.98</span>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            {Object.entries(options).map((el) => (
              <div
                onClick={() => setActive(el[0])}
                className={
                  el[0] === active ? "paypal_box active_box" : "paypal_box"
                }
              >
                <div>
                  <img src={el[1].img} alt="..." />
                  <span>{el[1].name}</span>
                </div>
                <div>{el[0] === active && <img src={tick} alt="..." />}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-lg-12">
            <Link to={options[active].route} className="home_form_btn">
              Continue <img src={wArrow} alt="..." />
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PaymentMethod;
