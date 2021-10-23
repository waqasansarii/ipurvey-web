import React from "react";
import BankAuthQr from "../Payment/BankAuthQr";
const PlanQrCode = () => {
  return (
    <React.Fragment>
      <div className="plan_select_bank bank_auth">
        <BankAuthQr path />
      </div>
    </React.Fragment>
  );
};

export default PlanQrCode;
