import React from "react";
import Switch from "@material-ui/core/Switch";

const PaymentDetail = () => {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedC: true,
    checkedD: true,
    checkedE: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <div className="AInfo_conatainer">
      <div className="ainfo_md">
        <div className="aInfo_head">
          <h5 >PAYMENT DETAIL</h5>
        </div>
        <div className="pD_inp">
          <input type="text" placeholder="Sort Code" />
          <input type="text" placeholder="Account Number" />
          <input type="text" placeholder="Alternative Compensation Method" />
        </div>
        <div className="acc_seting_md">
          <h5>ACCOUNT SETTING</h5>
          <ul className="acc_stng_ul">
            <li>
              <div>
                <h6>Email Notification</h6>
                <p>Travel disruption notification via email</p>
              </div>
              <Switch
                checked={state.checkedB}
                onChange={handleChange}
                color="primary"
                name="checkedB"
                inputProps={{ "aria-label": "primary checkbox" }}
              />
            </li>
            <li>
              <div>
                <h6>SMS Notification</h6>
                <p>Travel disruption notification via SMS</p>
              </div>
              <Switch
                checked={state.checkedA}
                onChange={handleChange}
                color="primary"
                name="checkedA"
                inputProps={{ "aria-label": "primary checkbox" }}
              />
            </li>
            <li>
              <div>
                <h6>Newsletter</h6>
                <p>Additional services and new product alerts</p>
              </div>
              <Switch
                checked={state.checkedC}
                onChange={handleChange}
                color="primary"
                name="checkedC"
                inputProps={{ "aria-label": "primary checkbox" }}
              />
            </li>
            <li>
              <div>
                <h6>Feedback</h6>
                <p>Occasionally we ask customers for feedback to help us improve our service</p>
              </div>
              <Switch
                checked={state.checkedD}
                onChange={handleChange}
                color="primary"
                name="checkedD"
                inputProps={{ "aria-label": "primary checkbox" }}
              />
            </li>
            <li>
              <div>
                <h6>Smart  Recommendation</h6>
                <p>Receive recommendations on routes and/or tickets based on travel disruption history</p>
              </div>
              <Switch
                checked={state.checkedE}
                onChange={handleChange}
                color="primary"
                name="checkedE"
                inputProps={{ "aria-label": "primary checkbox" }}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetail;
