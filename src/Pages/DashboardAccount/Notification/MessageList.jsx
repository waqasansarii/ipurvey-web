import React from "react";

const MessageList = ({ onClick, msgData, selectId }) => {
  return (
    <div className="msgs_container">
      <div className="msgs_md">
        <div className="msgs_lists">
          <ul className="msg_ul">
            {msgData.map((val, i) => (
              <li
                className={
                  selectId !== val.id ? "msgs_li" : "msgs_li selected_msg"
                }
                onClick={() => onClick(val.id)}
                key={i}
              >
                <div className="msgs_title">
                  <p>{val.title}</p>
                  <p className="msg_date">{val.date}</p>
                </div>
                <p className="mesage">{val.msg}</p>
                <div className="msg_time">
                  <p>{val.time}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MessageList;
