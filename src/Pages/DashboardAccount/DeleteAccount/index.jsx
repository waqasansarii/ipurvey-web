import React from "react";
import MiniDrawer from "../Sidebar";
// import ChangePassword from "./ChangePassword";
import "./style.css";
// assets
import leaving from "../../../Assets/undraw_feeling_blue_4b7q.png";
import BackHeader from "../BackHeader";

const DeleteAccount = () => {
  return (
    <div className="accInfo_container">
      <div className="accInfo_md">
        <div className="accInfo_sd">
          <div className="db_left_content">
            <MiniDrawer />
          </div>
          <div className="accInfo_rigth_md">
          <div className="acc_back_link">
              <BackHeader head="DELETE ACCOUNT" link="/dashboard" />
            </div>
            <div className="acc_info_sd">
              <div className="dltAcc_container">
                <div className="ss_md">
                  <div className="ss_sd">
                    <h6 className='leaving_head'>WHY ARE YOU LEAVING?</h6>
                    <div className="leaving_img">
                      <img src={leaving} alt="..." />
                    </div>
                    <div className="dlt_acc_md dlt_slct">
                      <select name="" id="">
                        <option value="">
                          I want to temporarily delete my account
                        </option>
                        <option value="">
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr, sed
                        </option>
                        <option value="">
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr, sed
                        </option>
                        <option value="">
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr, sed
                        </option>
                      </select>
                    </div>
                    <div className="ss_btn">
                      <button className="cus_blue_btn dlt_red">
                        Delete Account
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteAccount;
