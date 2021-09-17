import React from "react";
import PaymentPaypal from "../../Payment/PaymentPaypal";
import PaymentStripe from "../../Payment/PaymentStripe";
import BackHeader from "../BackHeader";
import OrderDetail from "./OrderDetail";

const MethodDetail = (props) => {
//   console.log(props.location.state);
  
  return (
    <div className="subs_methodDetail_container">
      <div className="subs_methodDetial_md">
        <div className="subs_back">
          <BackHeader head="MANAGE SUBSCRIPTIONS" link="/select-method" />
        </div>
        <OrderDetail />
        <div className="subs_payment_methods">
            {props.location.state && props.location.state==='stripe'?
            <PaymentStripe />
            : props.location.state==='paypal' ?
            <PaymentPaypal />
            : null
        }
        </div>
      </div>
    </div>
  );
};

export default MethodDetail;
