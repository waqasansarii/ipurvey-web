import React from "react";
import { Link } from "react-router-dom";
import SubNav from "../../Layout/SubNav";
import "./style.css";
// assets
import arrow from "../../Assets/Icon feather-arrow-right.png";
import img1 from "../../Assets/Group pc.png";
import img2 from "../../Assets/Pc.png";

const Developers = () => {
  return (
    <div className="developer_container">
      <divl className="developer_md">
        <SubNav head="Developers" />
        <div className="developer_sd">
          <div className="pm_sections">
            <div className="pm_left_sec">
              <h5>iPuervey API</h5>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
              </p>
              <div className="learn_more_lin">
                <Link className="link">
                  Start integration <img src={arrow} alt="..." />
                </Link>
              </div>
              <div className="developers_btns">
                <button className="cus_blue_btn">View API Documentation</button>
                <button className="cus_wht_btn">Contact Us</button>
              </div>
            </div>
            <div className="pm_right_sec">
              <img src={img1} alt="..." />
            </div>
          </div>
          <div className="pm_sections2">
            <div className="pm_right_sec2">
              <img src={img2} alt="..." />
            </div>
            <div>
              <div className="dvlp_left_m_section">
                <h5>Lorem ipsum dolor sit</h5>
                <div className="dvlp_sect_card_md">
                  <div className="dvlp_sect_card">
                    <h6>Lorem ipsum dolor </h6>
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                      accusam
                    </p>
                  </div>
                  <div className="dvlp_sect_card">
                    <h6>Lorem ipsum dolor </h6>
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                      accusam
                    </p>
                  </div>
                </div>
              </div>
              <div className="pm_left_sec2">
                <h5>Multiple payment methods!</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur nulla aut ipsam aliquam perspiciatis, autem ea magnam
                  fugiat optio, doloribus neque laborum? Corrupti provident
                  velit aut amet culpa, voluptatibus excepturi!
                </p>
                <div className="learn_more_lin2">
                  <Link className="link">
                    View registered banks <img src={arrow} alt="..." />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </divl>
    </div>
  );
};

export default Developers;
