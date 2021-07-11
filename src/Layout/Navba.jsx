import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/Group 4947.png";
import bar from "../Assets/Group 4111.png";
import "./style.css";
import NotificationDropdown from "../Components/DropDown/NotificationDropDown";
// assets 
import path from '../Assets/Path 5114.png'
import UserDropdown from "../Components/DropDown/UserDropDown";
const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const handleLogIn = () => {
    setIsActive(true);
  };
  const handleLogout = ()=>{
      setIsActive(false)
  }

  return (
    <div className="nav_container">
      <nav className="navbar navbar-expand-lg navbar-light custom_nav">
        <div className="container-fluid">
          <Link to="/">
            <img className="web_logo" src={logo} alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <img className="" src={bar} alt="" />
          </button>
          <div
            className="collapse navbar-collapse nav_ul"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blog">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/developers">
                  Developers
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blog">
                  Blogs
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            <ul className="navl_ultwo">
              {!isActive ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contact">
                      My Account
                    </Link>
                  </li>
                  <li className="nav-item" onClick={handleLogIn}>
                    <Link className="nav-link cus_blue_btn" to="/contact">
                      Sing Up
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <NotificationDropdown />
                  </li>
                  <img className="path_line" src={path} alt="img" />
                  {/* <li className="nav-item">
                    <CartDropdown />
                  </li> */}
                  {/* <img className="path_line" src={path} alt="img" /> */}
                  <li className="nav-item">
                    <UserDropdown logout={handleLogout} />
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
