import React from "react";
import CompleteSubscription from "./CompleteSubscription";
import topImg from "../../../Assets/undraw_access_denied_re_awnf.png";

const Success = () => {
  return (
    <div>
      <CompleteSubscription
        topImg={topImg}
        head="Transsction Failed"
        value="The transsction did not complete. Please retry or contact the service provider"
      />
    </div>
  );
};

export default Success;
