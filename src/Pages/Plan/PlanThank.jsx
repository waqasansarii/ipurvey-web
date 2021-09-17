import React from "react";
import OrderSummary from "../../Components/PlanComponent/OrderSummary";
import PaymentThank from "../Payment/PaymentThankYou";
const PlanThank = () => {
  return (
    <React.Fragment>
      <div className="pay_method plan_pay_method plan_thank">
        <OrderSummary
          topText="Order Summary"
          claimText="Single Claim Initiation Fee"
          valueA="£5.99"
          totalText="Total"
          valueB="£6.98"
        />
        <div className="row">
          <div className="pp_content">
            <PaymentThank />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PlanThank;
