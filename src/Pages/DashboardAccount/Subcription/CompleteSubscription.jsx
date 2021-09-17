import React from "react";
import BackHeader from "../BackHeader";
import { useHistory } from "react-router";

const CompleteSubscription = ({ head, value ,topImg}) => {
  const history = useHistory();
  return (
    <div className="subs_complete_container">
      <div className="subsComplete_md">
        <div className="subs_complete_content">
          <BackHeader head="MANAGE SUBSCRIPTIONS" link="/dashboard" />
          <div className="subsComplete_sec">
            <img src={topImg} alt="..." />
            <p>{head}</p>
            <p>{value}</p>
            <div className="returnDb_bt">
              <button
                className="cus_blue_btn"
                onClick={() => history.push("/dashboard")}
              >
                Retun Dashboard
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompleteSubscription;
