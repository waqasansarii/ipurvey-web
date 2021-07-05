import React, { useState } from "react";
import SignUpForm from "../../Components/Forms/SignUpForm";
import SignUpFormTwo from "../../Components/Forms/SignUpFormTwo";
import "./style.css";
// assets
import man from "../../Assets/man.png";
import ChatBox from "../../Components/HomeComp/ChatBox";

const SignUp = () => {
  const [nextStep, setNextStep] = useState(false);
  const handleNextStep = () => {
    setNextStep(true);
  };
  return (
    <div className="user_acc_container">
      <ChatBox />
      <div className="user_acc_md user_acc_s_md">
        <div className="user_acc_left_md">
          {!nextStep ? (
            <SignUpForm onClick={handleNextStep} />
          ) : (
            <SignUpFormTwo />
          )}
        </div>
        <div className="user_acc_sign_right_md">
          <img src={man} alt="..." />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
