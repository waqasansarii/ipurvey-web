import React from "react";
import FaqList from "./FaqList";
import './style.css'
// assets 
import search from '../../Assets/Icon feather-search.png'
const Faq = () => {
  return (
    <div className="Faq_container">
      <div className="faq_md">
        <div className="faq_sd">
          <div className="sub_header_md">
            <h4> Frequently Asked Questions</h4>
            <div className="faq_search_md">
                <input type="text" placeholder='Search' />
                <img src={search} alt="..." />
            </div>
          </div>
          <FaqList />
        </div>
      </div>
    </div>
  );
};

export default Faq;
