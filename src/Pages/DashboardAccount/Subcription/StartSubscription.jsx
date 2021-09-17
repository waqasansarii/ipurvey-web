import React from "react";
import PlanList from "../../../Components/PlanComponent/PlanList";
import BackHeader from "../BackHeader";
import { useHistory } from "react-router";

const StartSubscription = () => {
  const history = useHistory();
  return (
    <div className="mobileView_start_subs">
      <div className="mobView_startSubscription">
        <BackHeader head="MANAGE SUBSCRIPTIONS" link="/manage-subscription" />
        <div className="mobView_startSubs_head">
          <h5>Frequent Rail Commuter Plan</h5>
          <h4 className="plan_price">$45</h4>
          <p>(*$30p/transection)</p>
        </div>
        <div className="beforeStart_subs">
          <PlanList />
          <div className="subs_btn">
            <button
              className="cus_blue_btn"
              onClick={() => history.push("/select-method")}
            >
             Start Subscription
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartSubscription;
