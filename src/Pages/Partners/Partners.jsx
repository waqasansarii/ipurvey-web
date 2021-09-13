import React from "react";
import "./Partners.css";
import PartnerHeader from "./PartnerHeader";
import PartnerHero from "./PartnerHero";
import PartnersPlan from "./PartnersPlan";
import PartnerStarted from "./PartnerStarted";
const Partners = () => {
  return (
    <React.Fragment>
      <div className="partner_section">
        <PartnerHeader />
        <PartnerHero />
        <PartnersPlan />
        <PartnerStarted />
      </div>
    </React.Fragment>
  );
};

export default Partners;
