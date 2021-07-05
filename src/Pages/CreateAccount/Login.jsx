import React from "react";
import LoginForm from "../../Components/Forms/LoginForm";
import "./style.css";
// assets
import women from "../../Assets/woman-wearing-hat-glasses-handles-suitcases-travel.png";
import ChatBox from "../../Components/HomeComp/ChatBox";

const Login = () => {
  return (
    <div className="user_acc_container">
        <ChatBox />
      <div className="user_acc_md">
        <div className="user_acc_left_md">
          <LoginForm />
        </div>
        <div className="user_acc_right_md">
          <img src={women} alt="..." />
        </div>
      </div>
    </div>
  );
};

export default Login;
