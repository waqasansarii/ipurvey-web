import React from "react";
import "./style.css";
import LoginForm from "../../Components/Forms/LoginForm";
import Footer from "../../Layout/Footer";

// assets
import AnimationSection from "../../Components/AnimationSection";

const Login = () => {
  return (
    <>
      <div className="user_acc_container">
        <div className="user_acc_md">
          <div className="user_acc_left_md">
            <AnimationSection forms={<LoginForm />} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
