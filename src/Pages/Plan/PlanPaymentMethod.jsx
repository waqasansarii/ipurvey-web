import React from "react";
import paypalIcon from "../../Assets/Group 4071.svg";
import tick from "../../Assets/Group 4169.png";
import stripeIcon from "../../Assets/Group 4070.svg";
import bankIcon from "../../Assets/Group 891.svg";
import wArrow from "../../Assets/Icon feather-arrow-rightw.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import OrderSummary from "../../Components/PlanComponent/OrderSummary";

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
    route: "/payment/bank-transfer",
  },
};

const PlanPaymentMethod = () => {
  const [active, setActive] = useState("paypal");

  return (
    <React.Fragment>
      <div className="pay_method plan_pay_method">
        <OrderSummary
          topText="Order Summary"
          claimText="Single Claim Initiation Fee"
          valueA="£5.99"
          totalText="Total"
          valueB="£6.98"
        />

        <div className="row">
          <div className="pp_content">
            <div className="row">
              <div className="col-lg-12">
                <div className="pm_head">
                  <div>
                    <h2>Select a Payment Method</h2>
                  </div>
                  <p>Select a payment method to continue!</p>
                </div>
              </div>
            </div>

            <div className="row p_methods">
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
                    <div>
                      {el[0] === active && <img src={tick} alt="..." />}
                    </div>
                  </div>
                ))}
              </div>
              <div className="row mt-3">
                <p>Authorise the payment from your bank account.</p>
                <p>
                  Bank account to bank account transfer which includes fee of
                  £0.25p per transaction to complete the bank transfer payment.
                </p>
                <p>Your bank may not currently support this payment method</p>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-lg-12 d-flex justify-content-center">
                <Link to={options[active].route} className="home_form_btn">
                  Continue <img src={wArrow} alt="..." />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PlanPaymentMethod;
