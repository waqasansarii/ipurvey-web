import React from "react";
import ReportTimeline from "./Timeline";

const BookingStatus = () => {
  return (
    <div className="tb_status_container">
      <div className="tb_status_md">
        <div className="tb_status_sd">
          <h5>TRAVEL BOOKING STATUS UPDATE</h5>
          <div className="Booking_detail_md">
            <h6>Personal Details</h6>
            <ul className="Booking_detail_ul">
              <li>
                <p>name</p>
                <p>abc</p>
              </li>
              <li>
                <p>name</p>
                <p>abc</p>
              </li>
              <li>
                <p>email</p>
                <p>abc@gmail.com</p>
              </li>
              <li>
                <p>email</p>
                <p>abc@gmail.com</p>
              </li>
              <li>
                <p>email</p>
                <p>abc@gmail.com</p>
              </li>
            </ul>
          </div>
          <ReportTimeline />
        </div>
      </div>
    </div>
  );
};

export default BookingStatus;
