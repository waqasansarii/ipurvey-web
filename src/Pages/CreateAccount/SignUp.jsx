import React, { useState } from "react";
import SignUpForm from "../../Components/Forms/SignUpForm";
import SignUpFormTwo from "../../Components/Forms/SignUpFormTwo";
import "./style.css";
import AnimationSection from "../../Components/AnimationSection";
import Footer from "../../Layout/Footer";

const SignUp = () => {
  const [nextStep, setNextStep] = useState(false);
  const handleNextStep = () => {
    setNextStep(true);
  };
  return (
    <>
      <div className="user_acc_container">
        <div className="user_acc_md user_acc_s_md">
          <div className="user_acc_left_md">
            {!nextStep ? (
              <AnimationSection
                forms={<SignUpForm onClick={handleNextStep} />}
              />
            ) : (
              <AnimationSection forms={<SignUpFormTwo />} />
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignUp;
