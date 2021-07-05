import React from "react";
import { Link } from "react-router-dom";
// assets
import fb from "../../Assets/Group 833.png";
import google from "../../Assets/Group 830.png";
import eye from "../../Assets/Icon awesome-eye-slash.png";
import orLine from "../../Assets/Group 3483.png";

const LoginForm = () => {
  return (
    <div className="account_form_container">
      <div className="account_form_md">
        <div className="account_form_sd">
          <div className="form_head_md">
            <div>
              <h4>Login</h4>
            </div>
          </div>
          <div className="sign_up_btns">
            <button className="acc_blue_btn">
              <img src={fb} alt="..." /> <p> Login using Facebook</p>
            </button>
            <button className="acc_wht_btn">
              <img src={google} alt="..." /> <p> Login using Google</p>
            </button>
          </div>
          <div className="orLine_md">
            <img src={orLine} alt="..." />
          </div>
          <div className="home_form_div_sd">
            <input type="email" placeholder="Email" />
            <div className="eye_md">
              <input type="password" placeholder="Password" />
              <img src={eye} alt="..." />
            </div>
            <div className="remember_chck_md">
              <div>
                <input type="checkbox" name="" id="" />
                <p>Remember me</p>
              </div>
              <Link className="form_link">Forgot password?</Link>
            </div>
            <button className="home_form_btn">Login</button>
            <div className="notMember_para">
              <p>
                Not a registered member? <Link className="link" to='/signup'>Sign up</Link>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
