import React from "react";
import ResetPasswordForm from "../../Components/Forms/ResetForm";
import AnimationSection from "../../Components/AnimationSection";
import "./style.css";

const ResetPassword = () => {
  return (
    <div className="user_acc_container">
    <div className="user_acc_md user_acc_s_md">
      <div className="user_acc_left_md">
       
       <AnimationSection forms={<ResetPasswordForm />} />
      </div>

    </div>
  </div>
  );
};

export default ResetPassword;
