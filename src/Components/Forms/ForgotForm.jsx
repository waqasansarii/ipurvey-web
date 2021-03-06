import React from "react";
// assets
import forgotMan from "../../Assets/undraw_forgot_password_gi2d.png";

const ForgotForm = () => {
  return (
    <div className="account_form_container">
      <div className="account_form_md">
        <div className="account_form_sd">
          <div className="form_head_md">
            <div>
              <h4 className="fw-bold">Forgot Password?</h4>
            </div>
          </div>
          <div className='forgot_main_img'>
              <img src={forgotMan} alt="..." />
              <p className='form_blue_para'>We'll send a magic link to your email address to recover your password! </p>
          </div>
          <div className="home_form_div_sd">
            <input type="email" placeholder="Email Address" />
            <button className="home_form_btn magic_link_Btn">Get Magic Link</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotForm;
