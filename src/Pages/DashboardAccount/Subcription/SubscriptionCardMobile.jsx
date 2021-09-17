import React from "react";
import { useHistory } from "react-router";
import tick from "../../../Assets/Path 5451.png";

const SubscriptionCardMobile = () => {
  const history = useHistory()
  return (
    <div className="mobView_subs_card_container">
      <div className="mobView_subs_card_md">
        {[0, 1, 2, 3, 4].map((val) => (
          <div className="mobView_subs_card" key={val}>
            <div className="subs_card_head">
              <div className="subsHead_left">
                <h5>Free Tail</h5>
                <p>Limited to 5 journeys</p>
              </div>
              <div className="subsHead_right">
                <h5>1 Month</h5>
                <p>(8$10p/transection)</p>
              </div>
            </div>
            <div className="subsCard_body">
              <div className="subs_card_features">
                <div className="subsCard_feature">
                  <img src={tick} alt="..." />
                  <p>Travel disruption monitoring</p>
                </div>
                <div className="subsCard_feature">
                  <img src={tick} alt="..." />
                  <p>Customer notification of submitted claim</p>
                </div>
              </div>
            </div>
            {/* <div className="subsCard_body"> */}
            <div className="subs_card_features">
              <div className="subsCard_feature">
                <img src={tick} alt="..." />
                <p>Automatic claim request to travel operator*</p>
              </div>
              <div className="subsCard_feature">
                <img src={tick} alt="..." />
                <p>History of customer journeys and submitted claim</p>
              </div>
            </div>
            {/* </div> */}
            <div className="subs_card_features">
              <div className="subsCard_feature">
                <img src={tick} alt="..." />
                <p>Multiple choice of compensation payment method</p>
              </div>
            </div>
            <div className="subs_btn">
              <button className="cus_blue_btn" onClick={()=>history.push('/start-subsricption')}>Subscribe</button>
            </div>
            {/* </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionCardMobile;
