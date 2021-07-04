import React from "react";
import { Link } from "react-router-dom";
import arrow from "../../Assets/Icon feather-arrow-right.png";
import img1 from "../../Assets/Group 4933.png";
import img2 from "../../Assets/Group 3364.png";
import img3 from "../../Assets/Group 3367.png";

const PaymentMethod = () => {
  return (
    <div className="PM_container">
      <div className="pm_md">
        <div className="pm_sd">
          <div className="pm_sections">
            <div className="pm_left_sec">
              <h5>All your favorite banks at one place!</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur nulla aut ipsam aliquam perspiciatis, autem ea magnam
                fugiat optio, doloribus neque laborum? Corrupti provident velit
                aut amet culpa, voluptatibus excepturi!
              </p>
              <div className="learn_more_lin">
                <Link className="link">
                  View registered banks <img src={arrow} alt="..." />
                </Link>
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
            <div className="pm_left_sec2">
              <h5>Multiple payment methods!</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur nulla aut ipsam aliquam perspiciatis, autem ea magnam
                fugiat optio, doloribus neque laborum? Corrupti provident velit
                aut amet culpa, voluptatibus excepturi!
              </p>
              <div className="learn_more_lin2">
                <Link className="link">
                  View registered banks <img src={arrow} alt="..." />
                </Link>
              </div>
            </div>
          </div>
          <div className="pm_sections">
            <div className="pm_left_sec">
              <h5>Book at the last minute!</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur nulla aut ipsam aliquam perspiciatis, autem ea magnam
                fugiat optio, doloribus neque laborum? Corrupti provident velit
                aut amet culpa, voluptatibus excepturi!
              </p>
              <div className="learn_more_lin">
                <Link className="link">
                  View registered banks <img src={arrow} alt="..." />
                </Link>
              </div>
            </div>
            <div className="pm_right_sec">
              <img src={img3} alt="..." />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
