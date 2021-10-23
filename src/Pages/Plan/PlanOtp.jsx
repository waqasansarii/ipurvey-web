import React, { useEffect } from "react";
import { useHistory } from "react-router";
import BankOtp from "../Payment/BankOtp";
const PlanOtp = () => {
  const history = useHistory();
  useEffect(() => {
    setTimeout(() => {
      history.push("/planpayment/bank-type");
    }, 2000);
  }, []);
  return (
    <React.Fragment>
      <div className="plan_select_bank">
        <BankOtp />
      </div>
    </React.Fragment>
  );
};

export default PlanOtp;
