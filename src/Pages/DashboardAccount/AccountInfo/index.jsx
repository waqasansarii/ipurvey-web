import React from "react";
import MiniDrawer from "../Sidebar";
import AccInfoForm from "./AccInfoForm";
import PaymentDetail from "./PaymentDetail";
import './style.css'

const AccountInformation = () => {
  return (
    <div className="accInfo_container">
      <div className="accInfo_md">
        <div className="accInfo_sd">
          <div className="db_left_content">
            <MiniDrawer />
          </div>
          <div className="accInfo_rigth_md">
              <div className="acc_info_sd">
                  <div className="_accountInfo_form_container">
                      <AccInfoForm />
                  </div>
                  <div className="pD_container">
                      <PaymentDetail />
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountInformation;
