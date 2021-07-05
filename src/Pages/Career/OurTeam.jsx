import React from "react";
// assets
import team from "../../Assets/team.png";

const OurTeam = () => {
  return (
    <div className="ourTeam_container">
      <div className="ourTeam_md">
        <div className="ourTeam_sd">
          <div className="ourTeam_left_content">
            <img src={team} alt="..." />
          </div>
          <div className="ourTeam_right_md">
            <h4>Our Team</h4>
            <p className='be_part_para'>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem
            </p>
            <p className='be_part_para'>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum ipsum dolor
              sit amet. Lorem ipsum{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
