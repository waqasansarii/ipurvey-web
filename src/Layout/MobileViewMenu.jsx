import React from "react";
import bar from "../Assets/Group 4111.png";
import userprofileimg from "../Assets/Rectangle 1113.png";
import { Link } from "react-router-dom";

const MobileViewMenu = () => {
  return (
    <div className="mobView_menu_bar">
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContentMobile"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <img className="" src={bar} alt="" />
      </button>
      <div
        className="dropdown-menu "
        aria-labelledby="dropdownMenuButton10"
        id="navbarSupportedContentMobile"
        // onClick={(e) => e.stopPropagation()}
      >
        <div className="mobVIewLinks_md">
            <div className="nav_userInfo">
                <div className="nav_nameEmail">
                    <p className="navUsername">Username</p>
                    <p className="navUserEmail">abc@gmail.com</p>
                    <p className="navUserField">Frequent Rail Commuter Plan</p>
                </div>
                <img src={userprofileimg} alt="..." />
            </div>
          <div className="mobView_link">
              <Link className='link' to='/'>Home</Link>
              <Link className='link ' to='/'>Services</Link>
              <Link className='link' to='/our-plan'>Pricing</Link>
              <Link className='link' to='/developer'>Developers</Link>
              <Link className='link' to='/blog'>Blogs</Link>
              <Link className='link' to='/contact'>Contact</Link>
          </div>
          <div className="mobView_link_two">
              <Link className='link' to='/dashboard'>Dashboard</Link>
              <Link className='link' to='/travel-booking'>Your Travel Bookings</Link>
              <Link className='link' to='/security'>Manage Account</Link>
              <Link className='link ' to='/notification'>Notification</Link>
              <button>Logout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileViewMenu;
