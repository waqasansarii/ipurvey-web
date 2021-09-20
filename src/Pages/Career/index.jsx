import React from "react";
import BeAPartForm from "./BeAPartForm";
import SubNav from "../../Layout/SubNav";
import Benifit from "./Benifit";
import OurTeam from "./OurTeam";
import "./style.css";
import Footer from "../../Layout/Footer";

const Career = () => {
  return (
    <React.Fragment>
      <div className="career_container">
        <div className="career_md">
          <SubNav head="Careers" />
          <BeAPartForm />
          <Benifit />
          <OurTeam />
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Career;
