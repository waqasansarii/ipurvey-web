import React from "react";
import BankAuth from "../Payment/BankAuth";

const PlanAuth = () => {
  return (
    <React.Fragment>
      <div className="plan_select_bank bank_auth">
        <BankAuth />
      </div>
    </React.Fragment>
  );
};

export default PlanAuth;
