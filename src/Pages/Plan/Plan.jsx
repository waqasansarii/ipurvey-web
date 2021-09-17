import React from "react";
import { Switch, Route } from "react-router-dom";
import "./Plan.css";
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
import PlanList from "../../Components/PlanComponent/PlanList";

const Plan = () => {
  return (
    <React.Fragment>
      <div className="plan_section">
        <div className="partner_header">
          <h2>Subscribe to a plan</h2>
        </div>
        <div className="plan_hero">
          <div className="plan_container">
            <div className="row">
              <div className="col-lg-6">
                <div className="select_plan">
                  <h2>Select a plan</h2>
                  <div>
                    <select name="" id="">
                      <option value="">
                        Frequent Rail & Flight Combo Plan
                      </option>
                      <option value="">Frequent Rail</option>
                      <option value="">Flight Combo Plan</option>
                    </select>
                  </div>
                  <div className="row d_p_text p_text mt-4">
                    <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                      <h2>Frequent Rail & Flight Combo Plan</h2>
                    </div>
                    <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                      <h6 className="fw-bold">£6.99</h6>
                      <p>(+30p/transaction)</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row w-100">
                    <PlanList />
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="plan_content">
                  <Switch>
                    <Route>
                      <Route
                        exact
                        path="/plan/payment-method"
                        component={PlanPaymentMethod}
                      />
                      <Route
                        exact
                        path="/plan/payment-stripe"
                        component={PlanStripe}
                      />
                      <Route
                        exact
                        path="/plan/payment-paypal"
                        component={PlanPaypal}
                      />
                      <Route
                        exact
                        path="/plan/payment-thank"
                        component={PlanThank}
                      />
                      <Route
                        exact
                        path="/plan/payment-failed"
                        component={PlanFailed}
                      />
                      {/* <Route
                        exact
                        path="/plan/bank-select"
                        component={PlanSelectBank}
                      />
                      <Route
                        exact
                        path="/plan/bank-paying"
                        component={PlanBankPaying}
                      />
                      <Route
                        exact
                        path="/plan/bank-auth"
                        component={PlanAuth}
                      />
                      <Route exact path="/plan/bank-otp" component={PlanOtp} />
                      <Route
                        exact
                        path="/plan/bank-type"
                        component={PlanAccountType}
                      />
                      <Route
                        exact
                        path="/plan/confirm-payment"
                        component={PlanConfirm}
                      />
                      <Route
                        exact
                        path="/plan/success"
                        component={PlanSuccessfull}
                      /> */}
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

export default Plan;
