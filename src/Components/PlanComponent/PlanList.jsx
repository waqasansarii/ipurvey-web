import React from "react";
import tick from "../../Assets/Path 5451.svg";

const PlanList = () => {
  const options = {
    data1: {
      text: "Travel disruption monitoring",
    },
    data2: {
      text: "Automatic claim request to travel operator",
    },
    data3: {
      text: "Customer notification of submitted claim",
    },
    data4: {
      text: "History of customer journeys and submitted claim",
    },
    data5: {
      text: "Multiple choice of compensation payment method",
    },
  };
  return (
    <>
      {Object.entries(options).map((el) => (
        <div className="col-lg-12 mb-2 p-0">
          <ul className="plan_list">
            <li>
              <img src={tick} alt="..." />
              <div>
                <span>{el[1].text}</span>
              </div>
            </li>
          </ul>
        </div>
      ))}
    </>
  );
};

export default PlanList;
