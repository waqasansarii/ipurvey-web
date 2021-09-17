import React from 'react'
import { NavLink } from 'react-router-dom'
import List from '@material-ui/core/List'
import '../Pages/DashboardAccount/Style/sidebar.css'
// assets
import sOpen from '../Assets/Group 3398.png'
import sClose from '../Assets/Group 3399.png'
import dashboard from '../Assets/Icon material-dashboard.png'
import search from '../Assets/Icon feather-searchd.png'
import person from '../Assets/Icon material-person.png'
import eye from '../Assets/Icon awesome-eye.png'
import edit from '../Assets/Icon awesome-editd.png'
import time from '../Assets/Icon ionic-ios-time.png'
import lock from '../Assets/Icon awesome-lock.png'
import hand from '../Assets/Icon awesome-hand-point-up.png'
import bell from '../Assets/Icon awesome-bell.png'
import more from '../Assets/Path 5117.png'

const MobViewDashboardSidebar = () => {
  const [subLink, setSubLink] = React.useState(false)
  const openSubLinks = () => {
    setSubLink(!subLink)
  }

  return (
    <div className='mob_view_dashboard_sidebar_container'>
      <button
        className="dropdown-toggle db_sidebard_togle"
        type="button"
        id="dropdownMenuButton10"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img src={sOpen} alt="img" />
      </button>
      <div
        className="dropdown-menu "
        aria-labelledby="dropdownMenuButton10"
        onClick={(e)=>e.stopPropagation()}

      >
        <List>
          <div className="sidebar_container">
            <div className="sidebar_links">
              <div>
                {' '}
                <h5 className="sb_head">Dashboard</h5>
              </div>
            </div>
            <NavLink
              to="/dashboard"
              className="sb_link"
            >
              <div className="sb_imgD">
                <img src={dashboard} alt="..." />
                <p>YOUR DASHBOARD</p>
              </div>
              <img src={more} alt="..." />
            </NavLink>
            <div>
              {' '}
              <h5 className="sb_head">Account</h5>{' '}
            </div>
            <NavLink
              to="/travel-booking"
              className=  "sb_link"
            >
              <div className="sb_imgD">
                <img src={search} alt="..." />
                <p>Your travel bookings</p>
              </div>
              <img src={more} alt="..." />
            </NavLink>
            <div className="sb_link" onClick={openSubLinks}>
              <div className="sb_imgD">
                <img src={person} alt="..." />
                <p>Manage your account</p>
              </div>
              <img className={subLink? 'more_rotate':'less_rotate'} src={more} alt="..." />
            </div>
            {subLink ? (
              <div
              className="sub_sb_links" 
              >
                <NavLink
                  to="/account-info"
                  className='sb_link'
                >
                  <div className="sb_imgD">
                    <img src={eye} alt="..." />
                    <p>View account information</p>
                  </div>
                </NavLink>
                <NavLink to="/security" className="sb_link">
                  <div className="sb_imgD">
                    <img src={edit} alt="..." />
                    <p>Update account information</p>
                  </div>
                </NavLink>
                <NavLink to="/account-activity" className="sb_mob_link">
                  <div className="sb_imgD">
                    <img src={time} alt="..." />
                    <p>View account activity</p>
                  </div>
                </NavLink>
                <NavLink to="/security" className="sb_mob_link">
                  <div className="sb_imgD">
                    <img src={lock} alt="..." />
                    <p>Change password </p>
                  </div>
                </NavLink>
                <NavLink to="/dashboard" className="sb_mob_link">
                  <div className="sb_imgD">
                    <img src={hand} alt="..." />
                    <p>Manage subscription </p>
                  </div>
                </NavLink>
              </div>
            ) : null}
            <NavLink to="/notification" className="sb_link">
              <div className="sb_imgD">
                <img src={bell} alt="..." />
                <p>Notification</p>
              </div>
              <img src={more} alt="..." />
            </NavLink>
          </div>
        </List>
      </div>
    </div>
  )
}

export default MobViewDashboardSidebar
