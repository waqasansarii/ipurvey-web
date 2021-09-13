import React from "react";
import LoginForm from "../../Components/Forms/LoginForm";
import "./style.css";
// assets
import AnimationSection from "../../Components/AnimationSection";

const Login = () => {
  return (
    <div className="user_acc_container">
      <div className="user_acc_md">
        <div className="user_acc_left_md">
          <AnimationSection forms={<LoginForm />} />
        </div>
        {/* <div className="user_acc_right_md">
          <img src={women} alt="..." />
        </div> */}
      </div>
    </div>
  );
};

export default Login;
