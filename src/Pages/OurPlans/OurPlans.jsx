import React from "react";
import OurPlanComp from "./OurPlanComp";
import tick from "../../Assets/Path 5267.svg";
import cross from "../../Assets/cross.png";
const OurPlans = () => {
  const our_planData = [
    {
      id: "0",
      name: "1 Month",
      price: "FREE TRIAL",
      transaction: "*Limited to 5 journeys",
      planImg: [tick, tick, tick, cross, cross],
      flistBg: ["success", "success", "success", "failed", "failed"],
      btnText: "Subscribe",
      curentPlan: "",
      showPop: false,
      route: "/plan/payment-method",
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
      btnText: "Subscribe",
      curentPlan: "",
      showPop: false,
      route: "/plan/payment-method",
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
      btnText: "Subscribe",
      curentPlan: "",
      showPop: false,
      route: "/plan/payment-method",
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
      btnText: "Subscribe",
      curentPlan: "",
      showPop: true,
      route: "/plan/payment-method",
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
      btnText: "Subscribe",
      curentPlan: "",
      showPop: false,
      route: "/plan/payment-method",
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
      btnText: "Subscribe",
      curentPlan: "",
      showPop: false,
      route: "/plan/payment-method",
    },
  ];

  return (
    <>
      <OurPlanComp data={our_planData} />
    </>
  );
};

export default OurPlans;
