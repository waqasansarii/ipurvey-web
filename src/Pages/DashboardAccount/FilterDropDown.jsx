import React from "react";
import "./Style/filterDropdow.css";
// assets
import date from "../../Assets/Icon awesome-calendar-alt.png";

const FilterDropDown = () => {
  return (
    <div className="filter_dd_container">
      <div className="filter_dd_md">
        <div className="filters_sections">
          <div className="filter_secOne">
            <h6>Travel Date</h6>
            <div className="filter_inp">
              <div className="date_inp">
                <input type="text" placeholder="Date From" />
                <img className="date_img" src={date} alt="..." />
              </div>
              <div className="date_inp">
                <input type="text" placeholder="Date To" />
                <img className="date_img" src={date} alt="..." />
              </div>
            </div>
            <h6 className='filtr_head2'>Travel Time</h6>
            <div className="filter_inp">
              <select name="" id="">
                <option value="">Time From</option>
              </select>
              <select name="" id="">
                <option value="">Time To</option>
              </select>
            </div>
          </div>
          <div className="filter_secOne travel_filter">
            <h6>Travel Details</h6>
            <div className="filter_inp">
              <input type="text" placeholder="From" />
              <input type="text" placeholder="To" />
            </div>
            <h6 className='filtr_head2'>Transport Operator</h6>
            <div className="filter_inp">
              <input type="text" placeholder="Search for an operator" />
            </div>
          </div>
          <div className="filter_secTwo filter_two_section_One">
            <h6>Transport Mode</h6>
            <div>
              <label htmlFor="all">
                <input type="checkbox" name="all" id="all" />
                <p>All</p>
              </label>
              <label htmlFor="Flight">
                <input type="checkbox" name="Flight" id="Flight" />
                <p>Flight</p>
              </label>
              <label htmlFor="rail">
                <input type="checkbox" name="rail" id="rail" />
                <p>Rail</p>
              </label>
            </div>
          </div>
          <div className="filter_secTwo filter_subSec_2">
            <h6>Distruption Type</h6>
            <div>
              <label htmlFor="all">
                <input type="checkbox" name="all" id="all" />
                <p>All</p>
              </label>
              <label htmlFor="delay">
                <input type="checkbox" name="delay" id="delay" />
                <p>Delayed</p>
              </label>
              <label htmlFor="Cancelled">
                <input type="checkbox" name="Cancelled" id="Cancelled" />
                <p>Cancelled</p>
              </label>
              <label htmlFor="Postponed">
                <input type="checkbox" name="Postponed" id="Postponed" />
                <p>Postponed</p>
              </label>
            </div>
            <h6 className='filtr_head2'>Delay Time</h6>
            <div>
              <label htmlFor="all">
                <input type="checkbox" name="all" id="all" />
                <p>All</p>
              </label>
              <label htmlFor="30">
                <input type="checkbox" name="30" id="30" />
                <p>{" < "} 30 mins</p>
              </label>
              <label htmlFor="2">
                <input type="checkbox" name="2" id="2" />
                <p>{" < "} 2 hours</p>
              </label>
              <label htmlFor="24">
                <input type="checkbox" name="24" id="24" />
                <p>{" > "} 24 hours</p>
              </label>
            </div>
          </div>
          <div className="filter_secTwo">
            <h6>Status</h6>
            <div>
              <label htmlFor="all">
                <input type="checkbox" name="all" id="all" />
                <p>All</p>
              </label>
              <label htmlFor="new">
                <input type="checkbox" name="new" id="new" />
                <p>New</p>
              </label>
              <label htmlFor="info">
                <input type="checkbox" name="info" id="info" />
                <p>Info Required</p>
              </label>
              <label htmlFor="claim">
                <input type="checkbox" name="claim" id="claim" />
                <p>Claim Requested</p>
              </label>
              <label htmlFor="exp">
                <input type="checkbox" name="exp" id="exp" />
                <p>Expired</p>
              </label>
              <label htmlFor="close">
                <input type="checkbox" name="close" id="close" />
                <p>Closed</p>
              </label>
            </div>
          </div>
        </div>
        <div className="cntr_btn">
            <button className='cus_blue_btn'>Search</button>
            <br />
            <button className='link_btn'>Reset Filters</button>
        </div>
      </div>
    </div>
  );
};

export default FilterDropDown;
