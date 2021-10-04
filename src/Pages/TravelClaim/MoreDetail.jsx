import React, { useState } from "react";
import arrow from "../../Assets/Icon feather-arrow-rightw.png";
import plan from "../../Assets/Icon ionic-ios-airplane.png";
import twoPlan from "../../Assets/Group 5036.png";

const MoreDetail = ({ nextBtn, backBtn }) => {
  let [selectMode, setSelectMode] = useState("");
  const handleTravelMode = (event) => {
    setSelectMode(event);
  };

  return (
    <div>
      <div className="steper_form_container">
        <div className="stepper_form_md">
          <div className="stepper_form">
            <h2>Just a few more details!</h2>
            <p className="flight_type">Flight Type</p>
            <div className="selection_travel_mode">
              <div
                className={
                  selectMode === "oneWay" ? "byAir_mode activate" : "byAir_mode"
                }
                onClick={() => handleTravelMode("oneWay")}
              >
                <img src={plan} alt="..." />
                <p>One Way</p>
              </div>
              <div
                className={
                  selectMode === "twoWay"
                    ? "byTrain_mode activate"
                    : "byTrain_mode"
                }
                onClick={() => handleTravelMode("twoWay")}
              >
                <img src={twoPlan} alt="..." />
                <p>Round Trip</p>
              </div>
            </div>
            <div className="flight_num ">
              <p className="tlgt_num">Flight Number</p>
              <input
                type="text"
                name="text"
                id="text"
                placeholder="QA - 1234"
              />
            </div>
            <div className="stp_btns">
              <button className="home_form_btn" onClick={nextBtn}>
                Continue <img src={arrow} alt="..." />{" "}
              </button>
              <button className="stp_back" onClick={backBtn}>
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreDetail;
