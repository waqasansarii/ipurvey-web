import React from "react";
import { Link } from "react-router-dom";
// assets
import forgotMan from "../../Assets/undraw_my_password_d6kg.png";

const ResetPasswordForm = () => {
  return (
    <div className="account_form_container">
      <div className="account_form_md">
        <div className="account_form_sd">
          <div className="form_head_md">
            <div>
              <h4>Reset your password</h4>
            </div>
          </div>
          <div className='forgot_main_img'>
              <img src={forgotMan} alt="..." />
              <p className='form_blue_para'>Please enter a new password! Your old password will be updated!</p>
          </div>
          <div className="home_form_div_sd">
            <input type="password" placeholder="New password" />
            <input type="password" placeholder="Confirm new password" />
            <button className="home_form_btn mt-4">Reset Password</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordForm;
