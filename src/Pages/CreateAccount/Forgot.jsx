import React from "react";
import "./style.css";
import ForgotForm from "../../Components/Forms/ForgotForm";
import AnimationSection from "../../Components/AnimationSection";
import Footer from "../../Layout/Footer";
const Forgot = () => {
  return (
    <>
      <div className="user_acc_container">
        <div className="user_acc_md user_acc_s_md">
          <div className="user_acc_left_md">
            <AnimationSection forms={<ForgotForm />} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Forgot;
