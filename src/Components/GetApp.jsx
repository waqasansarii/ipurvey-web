import React from "react";
import getApp from "../Assets/Group 4930@2x.png";
import arrow from "../Assets/Icon feather-arrow-rightw.png";
import store from "../Assets/App store Icons@2x.png";
import { useHistory } from "react-router";

const GetApp = ({ btn, para, head }) => {
    const history = useHistory()
  return (
    <div>
      <div className="home_commingsoon">
        <div className="hc_box">
          <div className="hcb_left">
            <h4 className="lh-base">
              {head} <br />
            </h4>
            <p className="lh-base blue_para">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore
            </p>
            {para ? (
              <p className="lh-base blue_para">
                Lorem ipsum dolor sit amet, consetetur
              </p>
            ) : null}
            {btn ? (
              <button className="sign_up_todayBtn" onClick={()=>history.push('/signup')}>
                Sign Up today <img src={arrow} alt="" />
              </button>
            ) : null}
            <div>
              <span>Coming Soon</span>
              <img src={store} alt="..." />
            </div>
          </div>
          <div className="hcb_right">
            <img className="h_mob1" src={getApp} alt="..." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetApp;
