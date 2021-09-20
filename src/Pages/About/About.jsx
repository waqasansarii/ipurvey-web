import React, { useLayoutEffect } from "react";
// import JoinCommunity from "../../Components/HomeComp/JoinCommunity";
import "./About.css";
//assets
import aboutRec1 from "../../Assets/aboutimg.png";
import aboutRec2 from "../../Assets/Group 4947@2x.png";
import getApp from '../../Assets/Group 4930@2x.png'
import arrow from '../../Assets/Icon feather-arrow-rightw.png'
import store from '../../Assets/App store Icons@2x.png'
import GetApp from "../../Components/GetApp";
import Footer from "../../Layout/Footer";
import Trusted from "../../Components/HomeComp/Trusted";

const About = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <div className="about_container">
        <div className="about_content">
          <div className="about_left_content1">
            <h4 className="main_about_head">Lorem ipsum</h4>
            <h2 className=" fw-bold about_head">Lorem ipsum</h2>
            <p className="about_para">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea
            </p>
            <p className="about_para">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea
            </p>
          </div>
          <div className="about_right_content1">
            <img src={aboutRec1} alt="img" />
          </div>
        </div>
        <div className='about_sec2'>
          <div className="about_content mt-5 ">
            <div className="about_left_content2">
              <h2 className="">About iPurvey</h2>
              <p className=''>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
                magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
                rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </p>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
                magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
                rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

            </p>
              <p className=''>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                erat, sed diam
            </p>

            </div>
            <div className="about_right_content2">
              <img src={aboutRec2} alt="img" />
            </div>
          </div>
        </div>
      </div>
      <Trusted />
      <GetApp btn head='Get Registered Today!' />
     <Footer />
    </React.Fragment>
  );
};

export default About;
