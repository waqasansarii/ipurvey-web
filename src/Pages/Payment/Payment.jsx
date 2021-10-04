import React from "react";
import PaymentForm from "./PaymentForm";
import AnimationSection from "../../Components/AnimationSection";

const Payment = () => {
  return (
    <React.Fragment>
      <AnimationSection forms={<PaymentForm />} />
    </React.Fragment>
  );
};

export default Payment;
