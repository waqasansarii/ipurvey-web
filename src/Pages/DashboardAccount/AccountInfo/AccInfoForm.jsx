import React from "react";
// assets
import edit from "../../../Assets/Icon awesome-edit.png";
import profile from "../../../Assets/Group 4934.png";
const AccInfoForm = () => {
  return (
    <div className="AInfo_conatainer">
      <div className="ainfo_md">
        <div className="aInfo_head">
          <h5 className='accInfoHeadMain'>YOUR ACCOUNT INFORMATION</h5>
          <button>
            {" "}
            <img src={edit} alt="..." /> Edit
          </button>
        </div>
        <div className="acc_info_form">
          <form action="">
            <div className='profile_img'>
              <img src={profile} alt="..." />
              <button className='mob_view_infoEdit_btn'>
            {" "}
            <img src={edit} alt="..." /> Edit
          </button>
            </div>
            <div className="hw_inp">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Surname" />
            </div>
            <input type="text" placeholder="Email Address" />
            <input type="text" placeholder="Mobile Number" />
            <input type="text" placeholder="Postal Code" />
            <input type="text" placeholder="Address" />
            <div className='acc_sv_btn'>
              <button className="cus_blue_btn">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AccInfoForm;
