import React from "react";
import OurPlanComp from "../../OurPlans/OurPlanComp";
import BackHeader from "../BackHeader";
import MiniDrawer from "../Sidebar";
import "./style.css";
import SubscriptionCardMobile from "./SubscriptionCardMobile";
import tick from "../../../Assets/Path 5267.svg";
import cross from "../../../Assets/cross.png";
const our_planData = [
  {
    id: "0",
    name: "1 Month",
    price: "FREE TRIAL",
    transaction: "*Limited to 5 journeys",
    planImg: [tick, tick, tick, cross, cross],
    flistBg: ["success", "success", "success", "failed", "failed"],
    btnText: "Upgrade",
    curentPlan: "",
    showPop: false,
    route: "#",
  },
  {
    id: "1",
    name: (
      <>
        Frequent Rail <br /> Commuter Plan
      </>
    ),
    price: "£2.99",
    transaction: "*(+30p/Transaction)",
    planImg: [tick, tick, tick, tick, tick],
    flistBg: ["success", "success", "success", "success", "success"],
    btnText: "Cancel Plan",
    curentPlan: "current_plan",
    showPop: false,
    route: "#",
  },
  {
    id: "2",
    name: (
      <>
        Frequent Flyer <br /> Plan
      </>
    ),
    price: "£5.99",
    transaction: "(+30p/transaction)",
    planImg: [tick, tick, tick, tick, tick],
    flistBg: ["success", "success", "success", "success", "success"],
    btnText: "Upgrade",
    curentPlan: "",
    showPop: false,
    route: "#",
  },
  {
    id: "3",
    name: (
      <>
        Frequent Rail & <br /> Flight Combo Plan
      </>
    ),
    price: "£6.99",
    transaction: "(+30p/transaction)",
    planImg: [tick, tick, tick, tick, tick],
    flistBg: ["success", "success", "success", "success", "success"],
    btnText: "Upgrade",
    curentPlan: "",
    showPop: true,
    route: "#",
  },
  {
    id: "4",
    name: (
      <>
        Occasional <br /> Rail Plan
      </>
    ),
    price: "£0.79",
    transaction: "Per transaction",
    planImg: [tick, tick, tick, cross, cross],
    flistBg: ["success", "success", "success", "failed", "failed"],
    btnText: "Upgrade",
    curentPlan: "",
    showPop: false,
    route: "#",
  },
  {
    id: "5",
    name: (
      <>
        Occasional <br /> Flight Plan
      </>
    ),
    price: "£1.99",
    transaction: "Per transaction",
    planImg: [tick, tick, tick, cross, cross],
    flistBg: ["success", "success", "success", "failed", "failed"],
    btnText: "Upgrade",
    curentPlan: "",
    showPop: false,
    route: "#",
  },
];
const SubscriptionManager = () => {
  return (
    <div className="subcription_manage_contianer">
      <div className="subscript_manage_md">
        <div className="subscript_manage_sd">
          <div className="db_left_content">
            <MiniDrawer />
          </div>
          <div className="subcript_right_content_main">
            <BackHeader head="MANAGE SUBSCRIPTIONS" link="/dashboard" />
            <div className="subscript_mng_head">
              <h2>MANAGE SUBSCRIPTIONS</h2>
            </div>
            <div className="sbc_manage_md">
              <OurPlanComp data={our_planData} />
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
