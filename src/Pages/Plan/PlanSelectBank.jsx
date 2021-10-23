import React from "react";
import BankSelect from "../Payment/BankSelect";
const PlanSelectBank = () => {
  return (
    <React.Fragment>
      <div className="plan_select_bank">
        <BankSelect path col="col-lg-4" />
      </div>
    </React.Fragment>
  );
};

export default PlanSelectBank;
