import React from "react";
// assets
import img1 from "../../Assets/Group 3387.png";
import img2 from "../../Assets/Group 3386.png";
import img3 from "../../Assets/Group 3384.png";
const Benifit = () => {
  return (
    <div className="benifit_container">
      <div>
        <div className="benifit_md">
          <h4>Benifits</h4>
          <div className="benifit_cards">
            <div>
              <img src={img1} alt="..." />
              <h6>Benefit Title</h6>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et
              </p>
            </div>
            <div>
              <img src={img2} alt="..." />
              <h6>Benefit Title</h6>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et
              </p>
            </div>
            <div>
              <img src={img3} alt="..." />
              <h6>Benefit Title</h6>
              <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benifit;
