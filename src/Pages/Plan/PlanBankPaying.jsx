import React from "react";
import BankPaying from "../Payment/BankPaying";

const PlanBankPaying = () => {
  return (
    <React.Fragment>
      <div className="plan_select_bank">
        <BankPaying path />
      </div>
    </React.Fragment>
  );
};

export default PlanBankPaying;
