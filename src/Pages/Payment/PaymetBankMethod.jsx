import React from "react";
import arrowLeft from "../../Assets/Icon feather-arrow-left.png";
import bankImg from "../../Assets/Group 891.png";
import { Link } from "react-router-dom";

const PaymetBankMethod = () => {
  return (
    <React.Fragment>
    
      <div className="payment_bank_method1">
        <div className="row">
          <div className="col-lg-12">
            <div className="pm_head">
              <div>
                <img src={arrowLeft} alt="..." />
                <h2>Select a Payment Method</h2>
              </div>
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
        <div className="row mt-4">
          <div className="ps_text">
            <h2>Pay by bank transfer</h2>
            <p>Authorise the payment from your bank account.</p>
            <p>
              Bank account to bank account transfer which includes fee of £0.25p
              per transaction to complete the bank transfer payment.
            </p>
            <p>Your bank may not currently support this payment method</p>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-lg-12">
            <button className="home_form_btn">
              <Link to="success">Continue</Link>
            </button>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-lg-12">
            <Link className="hl_text">Cancel Transaction</Link>
          </div>
        </div>
      </div>
    
    </React.Fragment>
  );
};

export default PaymetBankMethod;
