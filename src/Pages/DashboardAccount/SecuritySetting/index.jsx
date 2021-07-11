import React from "react";
import MiniDrawer from "../Sidebar";
import ChangePassword from "./ChangePassword";
import './style.css'

const SecuritySetting = () => {
  return (
    <div className="accInfo_container">
      <div className="accInfo_md">
        <div className="accInfo_sd">
          <div className="db_left_content">
            <MiniDrawer />
          </div>
          <div className="accInfo_rigth_md">
            <div className="acc_info_sd">
                <ChangePassword />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecuritySetting;
