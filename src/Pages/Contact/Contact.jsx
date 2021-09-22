import React from "react";
import aboutRec1 from "../../Assets/Group 4066.png";
import aboutRec2 from "../../Assets/Group 4941.png";
// import play from "../../Assets/Polygon 13.png";
import email from "../../Assets/Icon ionic-ios-mail@2x.png";
import path from "../../Assets/Path 4974.png";
// import map from "../../Assets/Mask Group 7@2x.png";
import office from "../../Assets/Icon awesome-building@2x.png";
import mob from "../../Assets/Icon ionic-ios-call@2x.png";
import msg from "../../Assets/Group 4946@2x.png";

import "./Contact.css";
import Footer from "../../Layout/Footer";

const Contact = () => {
  return (
    <React.Fragment>
      <div className="contact_container">
        <div className="about_container">
          <div className="about_content abt_contetn">
            <div className="about_left_content1 ab_left_c1">
              <h2 className=" fw-bold about_head">
                We're on a mission to simplify travel claims
              </h2>
              <p className="about_para">
                We assist rail and air passengers by automatically submitting
                travel claims on their behalf to travel operators, when they
                experience a travel disruption
              </p>
              <div className="email_div">
                <img src={email} alt="" />
                <span className="email_span">contact@ipurvey.com</span>
              </div>
            </div>
            <div className="about_right_content1 abt_right_c1">
              <img className="contact_img1" src={aboutRec1} alt="img" />
            </div>
          </div>
          <div className="contact_section2">
            <div className="about_sec2">
              <div className="contact_form_main_div">
                <div className="contact_video_img">
                  <img src={aboutRec2} alt="img" />

                  <p className="video_desc">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata
                  </p>
                </div>
                <img className="contact_path" src={path} alt="" />
                <div className="contact_form_sec">
                  <h3>Get in touch!</h3>
                  <form className="contact_form" action="">
                    <div>
                      <input
                        className="name_inp"
                        type="text"
                        placeholder="First Name"
                      />
                      <input
                        className="name_inp m_l"
                        type="text"
                        placeholder="Surname"
                      />
                    </div>
                    <div>
                      <input
                        className="conatact_inp"
                        type="email"
                        placeholder="Email Address"
                      />
                    </div>
                    <div>
                      <input
                        className="conatact_inp"
                        type="text"
                        placeholder="Subject"
                      />
                    </div>
                    <div>
                      <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="7"
                        placeholder="Message"
                      ></textarea>
                    </div>
                    <div>
                      <button className="contact_send_btn">Send</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="contact_map_sec">
            <h3>Our Office</h3>
            <div className="contact_map_flex d-flex">
              {/* <img className='map_img' src={map} alt="" /> */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.364970384342!2d-0.09444828479893302!3d51.524865417247824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ca8726d93f7%3A0x8e7d368cebe4db0b!2s130%20Old%20St%2C%20London%20EC1V%209BD%2C%20UK!5e0!3m2!1sen!2s!4v1621864060958!5m2!1sen!2s"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                className="map_img"
              ></iframe>
              <div className="_contact_links">
                <h5>Head Office</h5>
                <div className="addres_div mt-3">
                  <img src={office} alt="" />
                  <span>
                    {" "}
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy{" "}
                  </span>
                </div>
                <div>
                  <img src={mob} alt="" />
                  <span className="mt-2">Lorem ipsum dolor sit</span>
                </div>
                <div>
                  <img src={msg} alt="" />
                  <span className="mt-2"> Lorem ipsum dolor sit</span>
                </div>
                <h4>iPurvey Business Support</h4>
                <div>
                  <img src={mob} alt="" />
                  <span>Lorem ipsum dolor sit</span>
                </div>
                <h4>Client Support</h4>
                <div>
                  <img src={mob} alt="" />
                  <span>+1 1234 4567 898</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Contact;
