import React from "react";
import { Switch, Route } from "react-router-dom";
import "./Plan.css";
import planImg from "../../Assets/Subtraction 2.svg";
import tick from "../../Assets/Path 5451.svg";
import PlanPaymentMethod from "./PlanPaymentMethod";
import PlanStripe from "./PlanStripe";
import PlanPaypal from "./PlanPaypal";
import PlanThank from "./PlanThank";
import PlanFailed from "./PlanFailed";
import PlanSelectBank from "./PlanSelectBank";
import PlanBankPaying from "./PlanBankPaying";
import PlanAuth from "./PlanAuth";
import PlanOtp from "./PlanOtp";
import PlanAccountType from "./PlanAccountType";
import PlanConfirm from "./PlanConfirm";
import PlanSuccessfull from "./PlanSuccessfull";

const PlanPayment = () => {
  const options = {
    data1: {
      text: "Travel disruption monitoring",
    },
    data2: {
      text: "Automatic claim request to travel operator",
    },
    data3: {
      text: "Customer notification of submitted claim",
    },
    data4: {
      text: "History of customer journeys and submitted claim",
    },
    data5: {
      text: "Multiple choice of compensation payment method",
    },
  };
  return (
    <React.Fragment>
      <div className="plan_section">
        <div className="phead_top">
          <div></div>
          <div className="partner_header">
            <h2>Subscribe to a plan</h2>
          </div>
        </div>
        <div className="plan_hero">
          <div className="plan_container">
            <div className="row">
              <div className="col-lg-6">
                <div className="select_plan_payment">
                  <img className="mt-3 mb-2" src={planImg} alt="..." />
                  <h2>Payment Details</h2>

                  <div className="row w-100">
                    <div className="col-lg-12">
                      <div className="type_box">
                        <div>
                          <h2>Payment Details</h2>
                        </div>
                        <div className="d-flex justify-content-between mt-1">
                          <span>Payee Name</span>
                          <span>Trainline Ltd</span>
                        </div>
                        <div className="d-flex justify-content-between mt-2">
                          <span>Sort Code</span>
                          <span>20-40-60</span>
                        </div>
                        <div className="d-flex justify-content-between mt-2">
                          <span>Account Number</span>
                          <span>98765432</span>
                        </div>
                        <div className="d-flex justify-content-between mt-2">
                          <span>Payment Reference</span>
                          <span>S12EERABG</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row w-100 mt-4">
                    <div className="col-lg-12">
                      <div className="type_box">
                        <div>
                          <h2>Payment Total</h2>
                        </div>
                        <div className="d-flex justify-content-between mt-1">
                          <span>Transaction amount</span>
                          <span>£ 100.00</span>
                        </div>
                        <div className="d-flex justify-content-between mt-2">
                          <span>IPurvey per transaction fee</span>
                          <span style={{ opacity: "0.9" }}>£ 0.25</span>
                        </div>
                        <div className="d-flex justify-content-between mt-2">
                          <span style={{ opacity: "0.9" }}>
                            Waived for subscribed customers
                          </span>
                          {/* <span>98765432</span> */}
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between mt-2">
                          <span>Total</span>
                          <span>£ 100.25</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="plan_content">
                  <Switch>
                    <Route>
                      <Route
                        exact
                        path="/planpayment/bank-select"
                        component={PlanSelectBank}
                      />
                      <Route
                        exact
                        path="/planpayment/bank-paying"
                        component={PlanBankPaying}
                      />
                      <Route
                        exact
                        path="/planpayment/bank-auth"
                        component={PlanAuth}
                      />
                      <Route
                        exact
                        path="/planpayment/bank-otp"
                        component={PlanOtp}
                      />
                      <Route
                        exact
                        path="/planpayment/bank-type"
                        component={PlanAccountType}
                      />
                      <Route
                        exact
                        path="/planpayment/confirm-payment"
                        component={PlanConfirm}
                      />
                      <Route
                        exact
                        path="/planpayment/success"
                        component={PlanSuccessfull}
                      />
                    </Route>
                  </Switch>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PlanPayment;
