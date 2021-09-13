import React, { useState } from "react";
import { useHistory } from "react-router-dom";
// assets
import topImg from "../../Assets/undraw_connected_world_wuay.png";
import plan from "../../Assets/Group 3468.png";
import train from "../../Assets/Group 3465.png";
import error from "../../Assets/Icon material-error.png";
import hover from "../../Assets/Component 41 – 1.png";
import arrow from "../../Assets/Icon feather-arrow-rightw.png";
const StartedForm = () => {
  const history = useHistory();

  let [selectMode, setSelectMode] = useState("");
  const handleTravelMode = (event) => {
    setSelectMode(event);
  };

  return (
    <div className="started_form_container">
      <div className="started_form_md">
        <div className="started_form">
          <p>Let's get started with your claim!</p>
          <img src={topImg} alt="..." />
          <h1>How did you travel?</h1>
          <div className="selection_travel_mode">
            <div
              className={
                selectMode === "byAir" ? "byAir_mode activate" : "byAir_mode"
              }
              onClick={() => handleTravelMode("byAir")}
            >
              <img src={plan} alt="..." />
              <p>By Air</p>
            </div>
            <div
              className={
                selectMode === "byTrain"
                  ? "byTrain_mode activate"
                  : "byTrain_mode"
              }
              onClick={() => handleTravelMode("byTrain")}
            >
              <img src={train} alt="..." />
              <p>By Rail</p>
            </div>
          </div>
          <div className="getError_md">
            <img src={error} alt="..." />
            <p>Please select a travel mode!</p>
          </div>
          <div className="hover_togle_div">
            <p>Retrieve your travel booking</p>
            <div className="hover_togle">
              <img src={hover} alt="..." />
              <div className="hover_i">
                <h6>Flight:</h6>
                <p>
                  Air passengers in England and Wales have up to six years from
                  the date of the flight to make a flight compensation claim
                </p>
                <div>
                  <h6>Rail</h6>
                  <p>
                    With majority of train companies, claims can be made up to
                    28 days after your journey. Some may allow longer
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button
            className="home_form_btn"
            onClick={() => history.push("travel-claim")}
          >
            Claim Compensation <img src={arrow} alt="..." />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartedForm;
