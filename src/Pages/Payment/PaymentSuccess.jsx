import React from "react";
import arrowLeft from "../../Assets/Icon feather-arrow-left.png";
import successTick from "../../Assets/Group 872.png";
const PaymentSuccess = () => {
  return (
    <React.Fragment>
      <div className="payment_success">
        <div className="row">
          <div className="col-lg-12">
            <div className="pm_head">
              <div>
                <img src={arrowLeft} alt="..." />
                <h2>Authorize your payment</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-lg-12">
            <div className="ps_img">
              <img src={successTick} alt="..." />
            </div>
          </div>
        </div>
        <div className="row mt-4 mb-2">
          <div className="ps_text">
            <h2 style={{ color: "#2E58A6" }}>Payment Successful!</h2>
            <p>
              An amount of £100.25 has been successfully debited from your
              account. The receipt has been sent to your registered email
            </p>
          </div>
        </div>
        <div className="row mt-3 mb-5">
          <div className="col-lg-12">
            <div className="tr_details_2">
              <div>
                <span>Transaction ID</span>
                <span>ABCD-1234</span>
              </div>
              <hr />
              <div>
                <span>Transaction Status</span>
                <span>Approved</span>
              </div>
              <hr />
              <div>
                <span>Transaction Date/Time</span>
                <span>October 3, 2010 | 05:03:30</span>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PaymentSuccess;
