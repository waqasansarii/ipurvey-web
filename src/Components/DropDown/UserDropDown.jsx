import React from "react";
import { useHistory, Link } from "react-router-dom";

import userprofileimg from "../../Assets/Rectangle 1113.png";
import downicon from "../../Assets/Path 5113.png";
import dashboard from "../../Assets/Icon material-dashboard.png";
import person from "../../Assets/Icon material-person.png";
import hand from "../../Assets/Icon awesome-hand-point-up.png";
import bell from "../../Assets/Icon awesome-bell.png";
import out from "../../Assets/Icon open-account-logout.png";

const UserDropdown = ({ logout }) => {
  const history = useHistory();
  return (
    <React.Fragment>
      <div className="dropdown userinfo_dropdown">
        <div className="userinfo_text">
          <h2>Salman Altaf</h2>
          <span className="">salmanaltaf@gmail.com</span>
          <span className="grey">Frequent Rail Commuter Plan</span>
        </div>
        <button
          className="btn userdrpdwn_btn dropdown-toggle d-flex"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img className="usericon" src={userprofileimg} alt="img" />
          <img className="downicon" src={downicon} alt="img" />
        </button>
        <div
          className="dropdown-menu userdrpdwn_menu"
          aria-labelledby="dropdownMenuButton1"
        >
          {/* <li className="userdrpdwn_content"> */}
          <Link to="/dashboard" className='drop_link' >
            <img src={dashboard} alt="..." />
            <p>Your Dashboard</p>
          </Link>
          <Link to="/dashboard" className='drop_link'>
            <img src={person} alt="..." />
            <p>Account Seetings</p>
          </Link>
          <Link to="/dashboard" className='drop_link'>
            <img src={hand} alt="..." />
            <p>Subscription</p>
          </Link>
          <Link to="/dashboard" className='drop_link'>
            <img src={bell} alt="..." />
            <p>Notification</p>
          </Link>
          <br />
          <Link to="/dashboard" className='drop_link' onClick={logout}>
            <img src={out} alt="..." />
            <p>Logout</p>
          </Link>
        </div>
        {/* </ul> */}
      </div>
    </React.Fragment>
  );
};

export default UserDropdown;
