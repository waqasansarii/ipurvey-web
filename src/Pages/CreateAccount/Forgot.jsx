import React from "react";
import ForgotForm from "../../Components/Forms/ForgotForm";
import AnimationSection from "../../Components/AnimationSection";
import "./style.css";

const Forgot = () => {
  return (
    <div className="user_acc_container">
    <div className="user_acc_md user_acc_s_md">
      <div className="user_acc_left_md">
       
       <AnimationSection forms={<ForgotForm />} />
      </div>
    </div>
  </div>
  );
};

export default Forgot;
