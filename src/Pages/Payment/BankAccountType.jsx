import React, { useState } from "react";
import arrowLeft from "../../Assets/Icon feather-arrow-left.png";
import starlingIcon from "../../Assets/Mask Group 2.png";
import tick from "../../Assets/Group 4169.png";
import { Link } from "react-router-dom";

const options = {
  bank: {
    currAccount: "Current Account",
    accNumber: "33322222",
    sortNumber:"40-65-22",
    route: "/",
  },
  monzo: {
    currAccount: "Savings Account",
    accNumber: "33322222",
    sortNumber:"40-65-22",
    route: "/",
  },
};
const BankAccountType = () => {
  const [active, setActive] = useState("paypal");

  return (
    <React.Fragment>
      <div className="bank_type payment">
        <div className="row mt-3">
          <div className="col-lg-12">
            <div className="pm_head">
              <div>
                <img src={arrowLeft} alt="..." />
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
          <div className="col-lg-12 mt-4">
            <div className="btype_text">
              <h5 className="mt-2">Welcome Mr. Joe Bloggs</h5>
              <p className="mt-2">Select an account to pay!</p>
              <h2>
                Account Title: <strong>Mr. Joe Bloggs</strong>
              </h2>
            </div>
          </div>
        </div>
        <div className="row mt-2">
          {Object.entries(options).map((el) => (
            <div className="col-lg-6">
              <div
                onClick={() => setActive(el[0])}
                className={
                  el[0] === active ? "type_box active_box" : "type_box"
                }
              >
                {el[0] === active && <img src={tick} alt="..." />}

                <div>
                  <span>{el[1].currAccount}</span>
                </div>
                <div className="d-flex justify-content-between mt-1">
                    <span>ACC No.</span>
                    <span>33322222</span>
                </div>
                <div className="d-flex justify-content-between mt-2">
                    <span>Sort No.</span>
                    <span>40-65-22</span>
                </div>
              </div>
            </div>
          ))}
        </div>
            
        <div className="row mt-5">
              <div className="col-lg-12">
                <button className="home_form_btn">
                  <Link to="success">Proceed & Pay</Link>
                </button>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-lg-12">
                <Link className="hl_text">Cancel transcation</Link>
              </div>
            </div>
      </div>
    </React.Fragment>
  );
};

export default BankAccountType;