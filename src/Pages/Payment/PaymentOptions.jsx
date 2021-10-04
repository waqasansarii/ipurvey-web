import React, { useState } from "react";
import { Link } from "react-router-dom";
import tick from "../../Assets/Group 4169.png";
import wArrow from "../../Assets/Icon feather-arrow-rightw.png";
const PaymentOptions = () => {
  const [activeOption1, setActiveOption1] = useState(true);
  const [activeOption2, setActiveOption2] = useState();

  return (
    <React.Fragment>
      <div className="pay_options">
        <div className="row">
          <div className="col-lg-12">
            <div className="pay_option_text">
              <h2>Select a payment option</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div
              className={
                !activeOption1 ? "pay_option_1" : "pay_option_1 active_box"
              }
              onClick={() => {
                setActiveOption1(!activeOption1);
                setActiveOption2(false)
              }}
            >
              {activeOption1 ? (
                <div>
                  <img src={tick} alt="..." />
                </div>
              ) : (
                ""
              )}
              <h5>Subscribe to a plan</h5>
              <p>Claim initiation for all your travel bookings</p>
              <h6>STARTING FROM</h6>
              <strong>£2.99</strong>
              <span>(+30p/Transaction)</span>
            </div>
          </div>

          <div className="col-lg-12">
            <div
              className={
                !activeOption2 ? "pay_option_2" : "pay_option_2 active_box"
              }
              onClick={() => {
                setActiveOption2(!activeOption2);
                setActiveOption1(false)
              }}
            >
              {activeOption2 ? (
                <div>
                  <img src={tick} alt="..." />
                </div>
              ) : (
                ""
              )}
              <h5>Pay for claim initiation for this booking only</h5>
              <strong>£5.99</strong>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-lg-12">
            <Link to="/payment/method" className="home_form_btn">
              Continue <img src={wArrow} alt="..." />{" "}
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PaymentOptions;
