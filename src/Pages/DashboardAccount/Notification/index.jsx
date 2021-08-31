import React, { useEffect, useState } from "react";
import {useHistory} from 'react-router-dom'
import MiniDrawer from "../Sidebar";
import ShowDetail from "../AccountActivity/ShowDetail";
import { notifications } from "../data";
import "./style.css";
import MessageList from "./MessageList";
import BackHeader from "../BackHeader";

const Notifications = () => {
  const history = useHistory()
  const [detailMessage, setDetailMessage] = useState([]);
  const [selectedMsgId, setSelectedMsgId] = useState("");
  const [width, setWidth] = useState(window.innerWidth)
  // check window width function 

  const checkWidth = () => {
    setWidth(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener('resize', checkWidth)
  }, [width])

  const selectMessage = (id) => {
    const filterSelectMessage = notifications.filter((val) => val.id === id);
    setDetailMessage(filterSelectMessage[0]);
    setSelectedMsgId(id);
  };
  useEffect(() => {
    document.title = 'Notification'
    if (width > 800) {
      if (!detailMessage.length) {
        setDetailMessage(notifications[0]);
        setSelectedMsgId(notifications[0].id);
      }
      else if (width<800){
        setDetailMessage([])
      }
    }
  }, []);

  const handleBack=()=>{
    if(selectedMsgId){
      setSelectedMsgId('')
    }
    else{
      history.push('/dashboard')
    }
  }

  return (
    <div className="acc_activity_container">
      <div className="acc_activity_md">
        <div className="acc_activity_sd">
          <div className="db_left_content">
            <MiniDrawer />
          </div>
          <div className="acc_activity_right_md">
            <div className="notify_mobViewBackLink">
               <BackHeader isBtn head='notification' onclick={handleBack} />
            </div>
            <h5 className='acc_activity_head'>NOTIFICATION</h5>
            <div className=" msg_notify_right_content">
              <div className={selectedMsgId ? 'acc_active_table_md msg_list_none' : "acc_active_table_md"}>
                <MessageList
                  onClick={selectMessage}
                  msgData={notifications}
                  selectId={selectedMsgId}
                />
              </div>
              <div className={!selectedMsgId? 'msg_list_none' : "sDetail_container msg_sd_cont"}>
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
