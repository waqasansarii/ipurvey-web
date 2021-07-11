import React from "react";
import { Link } from "react-router-dom";

import notificationIcon from "../../Assets/Icon awesome-bell.png";

const NotificationDropdown = ({ className }) => {
  return (
    <React.Fragment>
      <div className={`dropdown ${className}`}>
        <button
          className="btn notif_btn dropdown-toggle d-flex"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img src={notificationIcon} alt="img" />
        </button>
        <div
          className="dropdown-menu notification_menu"
          aria-labelledby="dropdownMenuButton1"
        >
          <ul >
            <li>
              <div className="notif_title">
                <div className="nt_head">
                  <h6 >Notification Title</h6>
                  <span className="msg_date">April,2021</span>
                </div>
                <p className="mesage">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                  Beatae.
                </p>
                <div className="msg_time">
                    <p>2:00 PM</p>
                </div>
              </div>
            </li>
            <li>
              <div className="notif_title">
                <div className="nt_head">
                  <h6 className="text_darkblue">Notification Title</h6>
                  <span className="msg_date">April,2021</span>
                </div>
                <p className="mesage">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                  Beatae.
                </p>
                <div className="msg_time">
                    <p>2:00 PM</p>
                </div>
              </div>
            </li>
            <li>
              <div className="notif_title">
                <div className="nt_head">
                  <h6 className="text_darkblue">Notification Title</h6>
                  <span className="msg_date">April,2021</span>
                </div>
                <p className="mesage">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                  Beatae.
                </p>
                <div className="msg_time">
                    <p>2:00 PM</p>
                </div>
              </div>
            </li>
            <li>
              <div className="notif_title light_purple">
                <div className="nt_head">
                  <h6 className="">Notification Title</h6>
                  <span className="msg_date">April,2021</span>
                </div>
                <p className="mesage">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                  Beatae.
                </p>
                <div className="msg_time">
                    <p>2:00 PM</p>
                </div>
              </div>
            </li>
          </ul>
          <div className="nitfic_view_all">
            <Link className="va_text text-center text_bluegreen">view all</Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NotificationDropdown;
