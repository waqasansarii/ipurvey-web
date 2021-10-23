import React from "react";
import arrowLeft from "../../Assets/Icon feather-arrow-left.png";
import bankImg from "../../Assets/Group 868.png";
import starlingIcon from "../../Assets/Mask Group 2.png";

import { Link, useHistory } from "react-router-dom";
const ConfirmPayment = (props) => {
  const history = useHistory();
  return (
    <React.Fragment>
      <div className="payment_bank_method1 payment">
        <div className="row">
          <div className="col-lg-12">
            <div className="pm_head">
              <div>
                <img
                  style={{ cursor: "pointer" }}
                  onClick={() => history.goBack()}
                  src={arrowLeft}
                  alt="..."
                />
                <h2>Authorize your payment</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3 starlink_div">
          <div className="col-lg-12">
            <div className="d-flex flex-column align-items-center">
              <img src={starlingIcon} alt="..." />
              <h5>Starling Bank</h5>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-lg-12">
            <div className="ps_img">
              <img src={bankImg} alt="..." />
            </div>
          </div>
        </div>
        <div className="row mt-4 mb-2">
          <div className="ps_text">
            <h2 style={{ color: "#2E58A6" }}>Confirm Payment?</h2>
            <p>Are you sure you want to make this payment?</p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-lg-12">
            <Link to="success">
              <button className="home_form_btn">Proceed & Pay</button>
            </Link>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-lg-12">
            <Link
              to={props.path ? "/plan/payment-failed" : "/payment/failed"}
              className="hl_text"
            >
              Cancel Transaction
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ConfirmPayment;
