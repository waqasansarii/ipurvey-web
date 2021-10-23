import React from "react";
import "./Payment.css";
import { Switch, Route } from "react-router-dom";
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
import BankAuthQr from "./BankAuthQr";
const PaymentForm = () => {
  return (
    <>
      <div className="home_form_div_md">
        <div className="payment_wrapper">
          <Switch>
            <Route exact path="/payment/method" component={PaymentMethod} />
            <Route exact path="/payment/options" component={PaymentOptions} />
            <Route exact path="/payment/paypal" component={PaymentPaypal} />
            <Route exact path="/payment/stripe" component={PaymentStripe} />
            <Route
              exact
              path="/payment/thank-you"
              component={PaymentThankYou}
            />
            <Route exact path="/payment/failed" component={PaymentFailed} />
            <Route
              exact
              path="/payment/bank-method"
              component={PaymentBankMethod}
            />
            <Route exact path="/payment/loading" component={PaymentLoading} />
            <Route exact path="/payment/select-bank" component={BankSelect} />
            <Route exact path="/payment/paying-bank" component={BankPaying} />
            <Route exact path="/payment/bank-auth" component={BankAuth} />
            <Route exact path="/payment/bank-qrcode" component={BankAuthQr} />
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
            <Route exact path="/payment/success" component={PaymentSuccess} />
          </Switch>
        </div>
      </div>
    </>
  );
};

export default PaymentForm;
