import React from "react";
import ForgotForm from "../../Components/Forms/ForgotForm";
import "./style.css";
// assets
import man from "../../Assets/man.png";
import ChatBox from "../../Components/HomeComp/ChatBox";

const Forgot = () => {
  return (
    <div className="user_acc_container">
    <ChatBox />
    <div className="user_acc_md user_acc_s_md">
      <div className="user_acc_left_md">
       <ForgotForm />
      </div>
      <div className="user_acc_sign_right_md">
        <img src={man} alt="..." />
      </div>
    </div>
  </div>
  );
};

export default Forgot;
