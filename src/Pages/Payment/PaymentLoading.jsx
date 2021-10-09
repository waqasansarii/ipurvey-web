import React from "react";
import arrowLeft from "../../Assets/Icon feather-arrow-left.png";
import loading from "../../Assets/stepLoad.png";
import { Link } from "react-router-dom";

const PaymentLoading = () => {
  return (
    <React.Fragment>
      <div className="payment_bank_method1">
        <div className="row">
          <div className="col-lg-12">
            <div className="pm_head">
              <div>
                <Link to="/payment/bank-method">
                  <img src={arrowLeft} alt="..." />
                </Link>
                <h2>Select a Payment Method</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-lg-12">
            <div className="loading_stpr_div">
              <p className="loading_border"></p>
              <img className="loading_steper" src={loading} alt="..." />
            </div>
            {/* <div className="ps_img mt-3">
             
              <img src={loading} alt="..." />
            </div> */}
          </div>
        </div>
        <div className="row mt-3">
          <div className="ps_text">
            <p>Please wait while we direct you to our platform!</p>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-lg-12">
            <button className="home_form_btn">
              <Link to="/payment/select-bank">Continue</Link>
            </button>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-lg-12">
            <Link to="#" className="hl_text">
              Cancel Transaction
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PaymentLoading;
