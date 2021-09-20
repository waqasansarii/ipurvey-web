import React from "react";
import Cokkie from "../../Components/Cookie";
import WhyIpurvey from "../../Components/HomeComp/WhyIpurvey";
import "./Home.css";
import GetApp from "../../Components/GetApp";
import IpurveySpecial from "../../Components/HomeComp/IpurveySpecial";
import Flights from "../../Components/HomeComp/Flights";
import PaymentMethod from "../../Components/HomeComp/PaymentMethod";
import Trusted from "../../Components/HomeComp/Trusted";
import ChatBox from "../../Components/ChatBox";
import VideoSection from "../../Components/HomeComp/VideoSection";
import AnimationSection from "../../Components/AnimationSection";
import StartedForm from "../../Components/HomeComp/StartedForm";
import Footer from "../../Layout/Footer";

const Home = () => {
  return (
    <React.Fragment>
      <div className="home_container">
        <Cokkie />
        <ChatBox />
        <AnimationSection forms={<StartedForm />} />
        <WhyIpurvey />
        <VideoSection />
        <IpurveySpecial />
        <Flights />
        <PaymentMethod />
        <Trusted />
        <GetApp head="Get Register Today" btn />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
