import React, { useEffect, useState } from "react";
import MiniDrawer from "../Sidebar";
import ShowDetail from "./ShowDetail";
import Table from "./Table";
import { accountActivityTable } from "../data";
import "./style.css";

const AccountActivity = () => {
  const [showDetail, setShowDetail] = useState([]);
  const selectRow = (id) => {
    const filterRowData = accountActivityTable.body.filter(
      (val) => val.id === id
    );
    setShowDetail(filterRowData[0]);
  };
  useEffect(() => {
    if (!showDetail.length) {
      setShowDetail(accountActivityTable.body[0]);
    }
  }, []);
  return (
    <div className="acc_activity_container">
      <div className="acc_activity_md">
        <div className="acc_activity_sd">
          <div className="db_left_content">
            <MiniDrawer />
          </div>
          <div className="acc_activity_right_md">
            <h5>ACCOUNT ACTIVITY</h5>
            <div className="acc_activity_right_content">
              <div className="acc_active_table_md">
                <Table
                  data={accountActivityTable}
                  tbClass="tb_page_table acc_tble"
                  onClick={selectRow}
                />
              </div>
              <div className="sDetail_container">
                <ShowDetail detailData={showDetail} reportBtn  />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountActivity;
