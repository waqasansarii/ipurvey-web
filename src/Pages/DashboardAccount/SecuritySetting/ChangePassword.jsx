import React from "react";

const ChangePassword = () => {
  return (
    <div className="ss_container">
      <div className="ss_md">
        <div className="ss_sd">
          <h6>SECURITY SETTINGS</h6>
          <div className='ss_inp'>
            <input type="text" placeholder="Old Password" />
            <input type="text" placeholder="New Password" />
            <input type="text" placeholder="Confirm New Password" />
          </div>
          <div className="ss_btn">
            <button className="cus_blue_btn">Change Paasword</button>
          </div>
          <div className="dlt_acc_md">
            <h6>DELETE ACCOUNT</h6>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat,
            </p>
          </div>
          <div className="ss_btn">
            <button className="cus_blue_btn dlt_red">Delete Account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
