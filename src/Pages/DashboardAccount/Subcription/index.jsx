import React from "react";
import OurPlans from "../../OurPlans/OurPlans";
import BackHeader from "../BackHeader";
import MiniDrawer from "../Sidebar";
import "./style.css";
import SubscriptionCardMobile from "./SubscriptionCardMobile";

const SubscriptionManager = () => {
  return (
    <div className="subcription_manage_contianer">
      <div className="subscript_manage_md">
        <div className="subscript_manage_sd">
          <div className="db_left_content">
            <MiniDrawer />
          </div>
          <div className="subcript_right_content_main">
            <BackHeader head='MANAGE SUBSCRIPTIONS' link='/dashboard' />
            <div className="subscript_mng_head">
              <h2>MANAGE SUBSCRIPTIONS</h2>
            </div>
            <div className="sbc_manage_md">
              <OurPlans link bgTrans btnText activeByDefault />
              {/* mobile view subscription  */}
              <SubscriptionCardMobile />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionManager;
