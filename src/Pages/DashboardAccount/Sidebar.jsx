import React from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
// import Typography from "@material-ui/core/Typography";
// assets
import sOpen from "../../Assets/Group 3398.png";
import sClose from "../../Assets/Group 3399.png";
import dashboard from "../../Assets/Icon material-dashboard.png";
import search from "../../Assets/Icon feather-searchd.png";
import person from "../../Assets/Icon material-person.png";
import eye from "../../Assets/Icon awesome-eye.png";
import edit from "../../Assets/Icon awesome-editd.png";
import time from "../../Assets/Icon ionic-ios-time.png";
import lock from "../../Assets/Icon awesome-lock.png";
import hand from "../../Assets/Icon awesome-hand-point-up.png";
import bell from "../../Assets/Icon awesome-bell.png";
import more from "../../Assets/Path 5117.png";
// import { useState } from "react";
import './Style/sidebar.css'

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },

  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),

    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function MiniDrawer() {
  const classes = useStyles();
  // const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [subLink, setSubLink] = React.useState(false);
  const openSubLinks = () => {
    setSubLink(!subLink);
  };

  return (
    <div className={classes.root}>
       
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
        aria-labelledby="dropdownMenuButton10"
      >
        <List>
          <div
            onClick={handleDrawerClose}
            color="inherit"
            aria-label="close drawer"
            edge="start"
            className={`sClose_img ${clsx(classes.menuButton, {
              [classes.hide]: !open,
            })}`}
          >
            <h5>Your Account</h5>
            <img src={sClose} alt="..." />
          </div>
          <div className="sidebar_container">
            <div>
              <div className="sOpen_img">
                <img
                  src={sOpen}
                  alt="..."
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  edge="start"
                  className={`sb_opnBtn ${clsx(classes.menuButton, {
                    [classes.hide]: open,
                  })}`}
                />
              </div>
            </div>
            <div className="sidebar_links">
              <div>{open ? <h5 className="sb_head">Dashboard</h5> : null}</div>
            </div>
            <NavLink
              style={{ marginTop: !open ? "15px" : "" }}
              to="/dashboard"
              className={!open ? "sb_mob_link" : "sb_link"}
            >
              <div className="sb_imgD">
                <img src={dashboard} alt="..." />
                {open ? <p>YOUR DASHBOARD</p> : null}
              </div>
              {open ? <img src={more} alt="..." /> : null}
            </NavLink>
            <div>{open ? <h5 className="sb_head">Account</h5> : null}</div>
            <NavLink
              to="/travel-booking"
              className={!open ? "sb_mob_link" : "sb_link"}
            >
              <div className="sb_imgD">
                <img src={search} alt="..." />
                {open ? <p>Your travel bookings</p> : null}
              </div>
              {open ? <img src={more} alt="..." /> : null}
            </NavLink>
            <div
              className={!open ? "sb_mob_link" : "sb_link"}
              onClick={openSubLinks}
            >
              <div className="sb_imgD">
                <img src={person} alt="..." />
                {open ? <p>Manage your account</p> : null}
              </div>
              {open ? <img className={subLink? 'more_rotate':'less_rotate'} src={more} alt="..." /> : null}
            </div>
            {subLink || !open ? (
              <div className={open ? "sub_sb_links" : ""}>
                <NavLink
                  to="/account-info"
                  className={!open ? "sb_mob_link" : "sb_link"}
                >
                  <div className="sb_imgD">
                    <img src={eye} alt="..." />
                    {open ? <p>View account information</p> : null}
                  </div>
                </NavLink>
                <NavLink
                  to="/security"
                  className={!open ? "sb_mob_link" : "sb_link"}
                >
                  <div className="sb_imgD">
                    <img src={edit} alt="..." />
                    {open ? <p>Update account information</p> : null}
                  </div>
                </NavLink>
                <NavLink
                  to="/account-activity"
                  className={!open ? "sb_mob_link" : "sb_link"}
                >
                  <div className="sb_imgD">
                    <img src={time} alt="..." />
                    {open ? <p>View account activity</p> : null}
                  </div>
                </NavLink>
                <NavLink
                  to="/security"
                  className={!open ? "sb_mob_link" : "sb_link"}
                >
                  <div className="sb_imgD">
                    <img src={lock} alt="..." />
                    {open ? <p>Change password </p> : null}
                  </div>
                </NavLink>
                <NavLink
                  to="/dashboard"
                  className={!open ? "sb_mob_link" : "sb_link"}
                >
                  <div className="sb_imgD">
                    <img src={hand} alt="..." />
                    {open ? <p>Manage subscription </p> : null}
                  </div>
                </NavLink>
              </div>
            ) : null}
            <NavLink
              to="/notification"
              className={!open ? "sb_mob_link" : "sb_link"}
            >
              <div className="sb_imgD">
                <img src={bell} alt="..." />
                {open ? <p>Notification</p> : null}
              </div>
              {open ? <img src={more} alt="..." /> : null}
            </NavLink>
          </div>
        </List>
      </Drawer>
    </div>
  );
}
