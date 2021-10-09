import React, { useState } from "react";
import MiniDrawer from "../Sidebar";
import Table from "./Table";
import { travelBookingTable } from "../data";
import "./style.css";
// assets
import filter from "../../../Assets/Group 3570.png";
import FilterDropDown from "../FilterDropDown";
import MobViewDetailCard from "./MobViewDetailCard";
import BackHeader from "../BackHeader";

const TravelBooking = () => {
  const [showFilterDrp, setShowFilterDrp] = useState(false);
  return (
    <div className="tb_page_container">
      <div className="tb_page_md">
        <div className="tb_page_sd">
          <div className="db_left_content">
            <MiniDrawer />
          </div>
          <div className="tb_page_right_md">
            <div className="tb_page_rigth_content">
              <BackHeader head="SEARCH TRAVEL BOOKING" link="/dashboard" />
              <h5>SEARCH YOUR TRAVEL BOOKINGS</h5>
              <div className="tb_search_md">
                <form action="">
                  <input
                    type="text"
                    className="cus_inp"
                    placeholder="Add a reference number"
                  />
                  <div>
                    <div className="tb_select_md">
                      <select className="cus_select" placeholder="select">
                        <option value="">Travel From</option>
                      </select>
                    </div>
                    <div className="tb_select_md">
                      <select className="cus_select" placeholder="select">
                        <option value="">Travel To</option>
                      </select>
                    </div>
                  </div>
                  <button className="cus_blue_btn">Search</button>
                </form>
              </div>
              <div className="filter_container">
                <div className="filter_img_md">
                  <div
                    className="d-flex align-items-center"
                    onClick={() => setShowFilterDrp(!showFilterDrp)}
                  >
                    <img src={filter} alt="..." />
                    <p style={{ marginBottom: "0", marginLeft: "10px" }}>
                      Advanced Filters
                    </p>
                  </div>
                  {showFilterDrp ? <FilterDropDown /> : null}
                </div>
              </div>
              <div className="travel_table_container">
                <Table tbClass="tb_page_table" data={travelBookingTable} />
              </div>
              <div className="mob_view_taravel_card">
                <MobViewDetailCard />
              </div>
              <div className="result_per_page">
                <p>Results per page</p>
                <div className="result_count">
                  <p>15</p>
                  <div className="rp_btn">
                    <button>+</button>
                    <button>-</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelBooking;
