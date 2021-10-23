import React from "react";
import OrderSummary from "../../Components/PlanComponent/OrderSummary";
import PaymentStripe from "../Payment/PaymentStripe";
const PlanStripe = () => {
  return (
    <React.Fragment>
      <div className="pay_method plan_pay_method plan_stripe">
        <OrderSummary
          topText="Order Summary"
          claimText="Single Claim Initiation Fee"
          valueA="£5.99"
          totalText="Total"
          valueB="£6.98"
        />
        <div className="row">
          <div className="pp_content">
            <PaymentStripe path />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PlanStripe;
