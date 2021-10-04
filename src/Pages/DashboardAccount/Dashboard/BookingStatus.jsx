import React from "react";
import ReportTimeline from "./Timeline";

const BookingStatus = () => {
  const booking_data = [
    {
      detailName: "BOOKING REFERENCE",
      detailType: "1564-584134",
    },
    {
      detailName: "TRAVEL DATE",
      detailType: "08/01/2021",
    },
    {
      detailName: "DEPARTURE TIME",
      detailType: "05:00 AM GMT",
    },
    {
      detailName: "DEPARTURE LOCATION",
      detailType: "Dubai, UAE",
    },
    {
      detailName: "TRANSPORT OPERATOR",
      detailType: "Qatar Airways",
    },
    {
      detailName: "DISTRUPTION TYPE",
      detailType: "Delayed",
    },
    {
      detailName: "DELAY",
      detailType: "30 Minutes",
    },
  ];
  return (
    <div className="tb_status_container">
      <div className="tb_status_md">
        <div className="tb_status_sd">
          <h5>TRAVEL BOOKING STATUS UPDATE</h5>
          <div className="Booking_detail_md">
            <h6>Personal Details</h6>
            <ul className="Booking_detail_ul">
              {booking_data.map((d, i) => {
                return (
                  <li key={i}>
                    <p>{d.detailName}</p>
                    <p style={{ fontWeight: "500" }}>{d.detailType}</p>
                  </li>
                );
              })}
            </ul>
          </div>
          <ReportTimeline />
        </div>
      </div>
    </div>
  );
};

export default BookingStatus;
