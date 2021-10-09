import React from "react";
import "./style.css";
import ResetPasswordForm from "../../Components/Forms/ResetForm";
import AnimationSection from "../../Components/AnimationSection";
import Footer from "../../Layout/Footer";

const ResetPassword = () => {
  return (
    <>
      <div className="user_acc_container">
        <div className="user_acc_md user_acc_s_md">
          <div className="user_acc_left_md">
            <AnimationSection forms={<ResetPasswordForm />} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ResetPassword;
