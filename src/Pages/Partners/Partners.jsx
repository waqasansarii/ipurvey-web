import React from "react";
import "./Partners.css";
import PartnerHeader from "./PartnerHeader";
import PartnerHero from "./PartnerHero";
import PartnersPlan from "./PartnersPlan";
import PartnerStarted from "./PartnerStarted";
import Footer from "../../Layout/Footer";
const Partners = () => {
  return (
    <React.Fragment>
      <div className="partner_section">
        <PartnerHeader />
        <PartnerHero />
        <PartnersPlan />
        <PartnerStarted />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Partners;
