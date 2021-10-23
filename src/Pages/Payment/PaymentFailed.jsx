import React from "react";
import orderFailed from "../../Assets/undraw_access_denied_re_awnf.png";
import { Link, useHistory } from "react-router-dom";

const PaymentFailed = () => {
  const history = useHistory();
  return (
    <React.Fragment>
      <div className="payment_success payment_failed">
        <div className="row">
          <div className="col-lg-12">
            <div className="ps_img">
              <img src={orderFailed} alt="..." />
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="ps_text">
            <h2>Transaction Failed!!</h2>
            <p>
              The transaction did not complete. Please retry or contact the
              service provider!{" "}
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            {/* <Link to="/payment/select-bank"> */}
            <button onClick={() => history.goBack()} className="home_form_btn">
              Retry Transcation
            </button>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PaymentFailed;
