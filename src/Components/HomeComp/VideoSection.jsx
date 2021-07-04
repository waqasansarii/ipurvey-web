import React from "react";
import video from "../../Assets/Group 4941.png";

const VideoSection = () => {
  return (
    <div>
      <div className="_home_video_div">
        <h3>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</h3>
        <p>
          {" "}
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        </p>
        <img src={video} alt="" />
      </div>
    </div>
  );
};

export default VideoSection;
