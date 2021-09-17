import React from "react";
import "./Payment.css";
import { Switch, Route } from "react-router-dom";
import useWebAnimations from "@wellyshen/use-web-animations";
import tree from "../../Assets/Group 3848.png";
import road from "../../Assets/Group 3975.png";
import airplane from "../../Assets/Group 3870@2x.png";
import train from "../../Assets/Group 4050@2x.png";
import PaymentOptions from "./PaymentOptions";
import PaymentMethod from "./PaymentMethod";
import PaymentPaypal from "./PaymentPaypal";
import PaymentStripe from "./PaymentStripe";
import PaymentThankYou from "./PaymentThankYou";
import PaymentFailed from "./PaymentFailed";
import PaymentBankMethod from "./PaymetBankMethod";
import PaymentLoading from "./PaymentLoading";
import BankSelect from "./BankSelect";
import BankPaying from "./BankPaying";
import BankAuth from "./BankAuth";
import BankOtp from "./BankOtp";
import BankAccountType from "./BankAccountType";
import ConfirmPayment from "./ConfirmPayment";
import PaymentSuccess from "./PaymentSuccess";

const Payment = () => {
  const { ref } = useWebAnimations({
    keyframes: {
      transform: "translateX( -1100px)", // Move by 500px
    },
    animationOptions: {
      delay: 1000, // Start with a 500ms delay
      duration: 5000, // Run for 1000ms
      iterations: Infinity, // Repeat once
      direction: "alternate", // Run the animation forwards and then backwards
      easing: "ease-in-out", // Use a fancy timing function
    },
  });
  function onChange(value) {
    console.log("Captcha value:", value);
  }

  return (
    <React.Fragment>
      <div className="home_container">
        <div className="main_sect_animation_div">
          <div className="animation_content_div">
            {/* home first left section  */}
            <div className="animation_para_div">
              <h3>Simplifying Travel Claims </h3>
              {/* <h1>when we arrive!</h1> */}
              <p>
                Be among the first 100 early members and win iPurvey monitoring
                and raising compensation claim requests for up to 5 (five) Rail
                and/or Flight journeys within the first 2 onths of launch,{" "}
                <strong> completely free!</strong>
              </p>
              <div className="signup_div">
                <button className="cus_blue_btn">Sign up today!</button>
              </div>
            </div>
            <img src={airplane} className="airplane App-logo" alt="" />
            {/* home first form section  */}
            <div className="home_form_div_md">
              <div className="payment_wrapper">
                <Switch>
                  <Route
                    exact
                    path="/payment/method"
                    component={PaymentMethod}
                  />
                  <Route
                    exact
                    path="/payment/options"
                    component={PaymentOptions}
                  />
                  <Route
                    exact
                    path="/payment/paypal"
                    component={PaymentPaypal}
                  />
                  <Route
                    exact
                    path="/payment/stripe"
                    component={PaymentStripe}
                  />
                  <Route
                    exact
                    path="/payment/thank-you"
                    component={PaymentThankYou}
                  />
                  <Route
                    exact
                    path="/payment/failed"
                    component={PaymentFailed}
                  />
                  <Route
                    exact
                    path="/payment/bank-method"
                    component={PaymentBankMethod}
                  />
                  <Route
                    exact
                    path="/payment/loading"
                    component={PaymentLoading}
                  />
                  <Route
                    exact
                    path="/payment/select-bank"
                    component={BankSelect}
                  />
                  <Route
                    exact
                    path="/payment/paying-bank"
                    component={BankPaying}
                  />
                  <Route exact path="/payment/bank-auth" component={BankAuth} />
                  <Route exact path="/payment/bank-otp" component={BankOtp} />
                  <Route
                    exact
                    path="/payment/bank-type"
                    component={BankAccountType}
                  />
                  <Route
                    exact
                    path="/payment/confirm-payment"
                    component={ConfirmPayment}
                  />
                  <Route
                    exact
                    path="/payment/success"
                    component={PaymentSuccess}
                  />
                </Switch>
              </div>
            </div>
          </div>
          <img className="tree_img" src={tree} alt="" />
          <div className="station_img">
            <img className="train_img" ref={ref} src={train} alt="" />
            <img className="road_img" src={road} alt="" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Payment;
