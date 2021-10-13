import React from "react";
import { Link } from "react-router-dom";
import MiniDrawer from "../Sidebar";
import Table from "./Table";
import GroupedBar from "./BarChart";
import {dbTable} from '../data'
import "./style.css";
// assets
import arrow from "../../../Assets/Icon feather-arrow-right.png";
import BookingStatus from "./BookingStatus";
import MobViewBookingCard from "./MobViewBookingCard";
const DashBoard = () => {
  return (
    <div className="db_container">
      <div className="db_md_main">
        <div className="db_left_content">
          <MiniDrawer />
        </div>
        <div className="db_right_content_md">
            <div className="db_head_btn">
              <button className="cus_blue_btn">
                Submit New Travel Booking
              </button>
            </div>
          <div className="db_right_sd">
            <div className="db_chart_table_section">
              <div className="db_table_md">
                <div>
                  <div className="db_table_head">
                    <h4>YOUR TRAVEL BOOKINGS</h4>
                  </div>
                  <GroupedBar />
                </div>
              </div>
              <div className="db_table_md">
                <div>
                  <div className="db_table_head">
                    <h4>YOUR RECENT TRAVEL BOOKINGS</h4>
                    <Link className="link" to='/travel-booking'>
                      View all <img src={arrow} alt="..." />
                    </Link>
                  </div>
                  <Table data={dbTable} />
                  <MobViewBookingCard />
                </div>
              </div>
            </div>
            <div className="db_timeline_section">
                <BookingStatus />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
