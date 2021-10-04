import React, { useLayoutEffect } from "react";
import "./Terms.css";
import SubNav from "../../Layout/SubNav";
import rightImg from "../../Assets/undraw_contract_uy56.png";
import TermsDetail from "./TermsDetail";
import Footer from "../../Layout/Footer";

const TermAndCond = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="terms_and_cond_container">
      <SubNav head="Terms of Service" />
      <div className="mobileView_terms_top_img">
        <img src={rightImg} alt="" />
      </div>
      <div className="terms_top_main">
        <p className="mt-3">
          This Agreement is between the user of iPurvey service and The Digital
          Purveyor Company Limited (trading as iPurvey). The Digital Purveyor
          Company Limited is a company registered in England under company
          number 12484804, at address 130 Old Street, London, England, EC1V 9BD.
        </p>
        <p className="mt-3">
          Please read these Terms and Conditions and our Privacy Policy
          carefully as by using the site or our service, you confirm that you
          accept these terms and agree to abide by them.
        </p>
        <p className="mt-3">
          These terms may change at any time and changes will be effective
          immediately upon posting. If you continue using the site or our
          service you agree to the new terms.
        </p>
      </div>
      <div className="terms_cond_main_div">
        <div className="terms_ques_content_main">
          <TermsDetail />
        </div>
        <div className="terms_two_div select_lang_div">
          <div className="terms_two_img_box">
            <img src={rightImg} alt="..." />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermAndCond;
