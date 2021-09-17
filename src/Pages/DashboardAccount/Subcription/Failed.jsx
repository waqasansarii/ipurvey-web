import React from "react";
import CompleteSubscription from "./CompleteSubscription";
import topImg from "../../../Assets/undraw_Order_confirmed_re_g0if.png";

const Failed = () => {
  return (
    <div>
      <CompleteSubscription
        head="Thank You"
        value="Payment has been made successfully"
        topImg={topImg}
      />
    </div>
  );
};

export default Failed;
