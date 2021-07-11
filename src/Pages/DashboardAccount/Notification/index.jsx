import React, { useEffect, useState } from "react";
import MiniDrawer from "../Sidebar";
import ShowDetail from "../AccountActivity/ShowDetail";
import { notifications } from "../data";
import "./style.css";
import MessageList from "./MessageList";

const Notifications = () => {
  const [detailMessage, setDetailMessage] = useState([]);
  const [selectedMsgId, setSelectedMsgId] = useState("");
  const selectMessage = (id) => {
    const filterSelectMessage = notifications.filter((val) => val.id === id);
    setDetailMessage(filterSelectMessage[0]);
    setSelectedMsgId(id);
  };
  useEffect(() => {
    if (!detailMessage.length) {
      setDetailMessage(notifications[0]);
      setSelectedMsgId(notifications[0].id);
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
                <MessageList
                  onClick={selectMessage}
                  msgData={notifications}
                  selectId={selectedMsgId}
                />
              </div>
              <div className="sDetail_container msg_sd_cont">
                <ShowDetail detailData={detailMessage} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
