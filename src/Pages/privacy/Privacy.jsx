import React, { useLayoutEffect, useState } from "react";
import arrow from '../../Assets/Icon feather-arrow-right@2x.png'
import img from '../../Assets/undraw_privacy_protection_nlwy@2x.png'
import { Link } from "react-router-dom";
import "./Privacy.css";
import SubNav from "../../Layout/SubNav";

const termsData = [
  {
    head: "LLorem ipsum dolo",
    para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quaerat commodi quas asperiores exercitationem, maiores  cum aperiam eaque numquam repudiandae illo assumenda rem obcaecati impedit et earum inventore possimus beatae? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Official quaerat commodi quas asperiores exercitationem, maiores cumaperiam eaque numquam repudiandae illo assumenda rem obcaecati impedit et earum inventore possimus beatae? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quaerat commodi quas asperiores exercitationem, maiores cum aperiam eaque numquam repudiandae illo assumenda rem obcaecati impedit et earum inventore possimus beatae?",
    id: "01",
  },
  {
    head: "OWNERSHIT,COPYRIGHT AND TRADEMARK NOTICES",
    para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quaerat commodi quas asperiores exercitationem, maiores  cum aperiam eaque numquam repudiandae illo assumenda rem obcaecati impedit et earum inventore possimus beatae? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Official quaerat commodi quas asperiores exercitationem, maiores cumaperiam eaque numquam repudiandae illo assumenda rem obcaecati impedit et earum inventore possimus beatae? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quaerat commodi quas asperiores",
    id: "02",
    link: ''
  },
  {
    head: "WARRANTY DISCLAIMER",
    para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quaerat commodi quas asperiores exercitationem, maiores  cum aperiam eaque numquam repudiandae illo assumenda rem obcaecati impedit et earum inventore possimus beatae? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Official quaerat commodi quas asperiores exercitationem, maiores cumaperiam eaque numquam repudiandae illo assumenda rem obcaecati impedit et earum inventore possimus beatae? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quaerat commodi quas asperiores Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quaerat commodi quas asperiores exercitationem, maiores  cum aperiam eaque numquam repudiandae illo assumenda rem obcaecati impedit et earum inventore possimus beatae? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Official quaerat commodi quas asperiores exercitationem, maiores cumaperiam eaque numquam repudiandae illo assumenda rem obcaecati impedit et earum inventore possimus beatae? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quaerat commodi quas asperiores Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quaerat commodi quas asperiores exercitationem, maiores  cum aperiam eaque numquam repudiandae illo assumenda rem obcaecati impedit et earum inventore possimus beatae? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Official quaerat commodi quas asperiores exercitationem, maiores cumaperiam eaque numquam repudiandae illo assumenda rem obcaecati impedit et earum inventore possimus beatae? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quaerat commodi quas asperiores,",
    id: "03",
  },
];

const Privacy = () => {
  let [trans, setTrans] = useState([]);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);



  const handleTransalte = (event) => {
    let filter = termsData.filter((val) => val.id === event);
    setTrans(filter);
    // console.log(trans);
  };

  return (
    <div className="terms_and_cond_container">
      <SubNav head='Privacy policy' />
      <div className="terms_and_cond_main_div">
        <div className="terms_boxex_div">
          <div
            className="terms_one_box_div" >
            {termsData.map((val) => (
              <div className={`term_main "shade_box_l" `} key={val.id} onClick={() => handleTransalte(val.id)}>
                <p className="term_note_para">{val.head}</p>
                <div className="terms_para_div">
                  <p> {val.para} </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="terms_two_div">
          <div
            className="terms_two_box_para_div privacy_img_div"   >
            <div>
              <img src={img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;