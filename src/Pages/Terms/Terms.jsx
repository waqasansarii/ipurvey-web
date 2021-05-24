import React, { useLayoutEffect,  useState } from "react";
import arrow from '../../Assets/Icon feather-arrow-right@2x.png'
import { Link } from "react-router-dom";
import "./Terms.css";
import SubNav from "../../Layout/SubNav";

const termsData = [
  {
    head: "LLorem ipsum dolo",
    para: " Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea",
    id: "01",
  },
  {
    head: "OWNERSHIT,COPYRIGHT AND TRADEMARK NOTICES",
    para: " Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea",
    id: "02",
    link:''
  },
  {
    head: "WARRANTY DISCLAIMER",
    para: " Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea",
    id: "03",
  },
];

const TermAndCond = () => {
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
      <SubNav head='Terms of use' />
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
                <div className="learm_more">
                   <Link className='more_link'>Learn more <img src={arrow} alt="" /></Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="terms_two_div select_lang_div">
          <div
            className="terms_two_box_para_div"   >
            <div className="terms_sub_head_div">
              <h5>
                <strong>In Plain English</strong>
              </h5>
            </div>
            { trans.map((val,i) => (
              <div key={i}>
                <p className='trans_para'> {val.para} </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermAndCond;