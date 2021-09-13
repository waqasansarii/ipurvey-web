import React from "react";
import PaymentFailed from "../Payment/PaymentFailed";
const PlanFailed = () => {
  return (
    <React.Fragment>
      <React.Fragment>
        <div className="pay_method plan_pay_method plan_thank">
          <div className="row mb-3">
            <div className="col-lg-12">
              <div className="tr_details_1">
                <span>Order Summary</span>
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
            <div className="pp_content">
              <PaymentFailed />
            </div>
          </div>
        </div>
      </React.Fragment>
    </React.Fragment>
  );
};

export default PlanFailed;
