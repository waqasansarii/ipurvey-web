import React from "react";
import ResetPasswordForm from "../../Components/Forms/ResetForm";
import "./style.css";
// assets
import man from "../../Assets/man.png";
import ChatBox from "../../Components/HomeComp/ChatBox";

const ResetPassword = () => {
  return (
    <div className="user_acc_container">
    <ChatBox />
    <div className="user_acc_md user_acc_s_md">
      <div className="user_acc_left_md">
       <ResetPasswordForm />
      </div>
      <div className="user_acc_sign_right_md">
        <img src={man} alt="..." />
      </div>
    </div>
  </div>
  );
};

export default ResetPassword;
