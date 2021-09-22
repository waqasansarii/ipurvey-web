import React, { useState } from "react";
import OrderDetail from "./OrderDetail";
import stripe from "../../../Assets/Group 4070.png";
import paypal from "../../../Assets/Group 4071.svg";
import tick from "../../../Assets/Group 3469.png";
import { useHistory } from "react-router";
import BackHeader from "../BackHeader";

const SelectMethod = () => {
  const history = useHistory();

  const [method, setMethod] = useState("");
  const handleSelectMethod = (e) => {
    setMethod(e);
  };

  return (
    <div className="selectMethod_container">
      <div className="selectM_md">
        <div className="subs_back">
          <BackHeader head="MANAGE SUBSCRIPTIONS" link="/start-subsricption" />
        </div>
        <OrderDetail />
        <div className="subs_pay_methods">
          <h5>Selec a Payment Method</h5>
          <div className="payMethod_boxes">
            <div
              className="paymethod_box"
              onClick={() => handleSelectMethod("paypal")}
            >
              <div
                className={
                  method === "paypal"
                    ? "selectedM payMethodImg"
                    : "payMethodImg"
                }
              >
                <img className="method_img" src={paypal} alt="..." />
                {method === "paypal" ? (
                  <img className="slct_tick" src={tick} alt="..." />
                ) : null}
              </div>
              <p>Pay with Paypal</p>
            </div>
            <div
              className="paymethod_box"
              onClick={() => handleSelectMethod("stripe")}
            >
              <div
                className={
                  method === "stripe"
                    ? "selectedM payMethodImg"
                    : "payMethodImg"
                }
              >
                <img className="method_img" src={stripe} alt="..." />
                {method === "stripe" ? (
                  <img className="slct_tick" src={tick} alt="..." />
                ) : null}
              </div>
              <p>Pay with Stripe</p>
            </div>
          </div>
          <div className="subs_btn">
            <button
              disabled={method === ""}
              className="cus_blue_btn"
              onClick={() => history.push("/method-detail", method)}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectMethod;
