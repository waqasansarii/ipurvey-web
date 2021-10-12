import React, { useState } from "react";
import arrow from "../../Assets/Path 5677@3x.png";

const termsData = [
  {
    head: "Summary",
    para: [
      `By using the services provided by iPurvey, you are agreeing to
      our Terms & Conditions as set out`,
      `Your access to and use of the service is subject to our Privacy
      Policy iPurvey is not responsible for any errors or omissions
      within the data provided to us by third- party. We utilise the
      information as provided to us to monitor your journey for
      disruption. You are responsible for your actions and we are not
      liable for any damages or actions taken based on the use of the
      data or the application or service. iPurvey is not responsible
      for the content of third-party websites and you take full
      responsibility for accepting the terms and conditions of the
      third-party web sites.`,
    ],
    id: "01",
  },
  {
    head: "Who we are",
    para: [
      `By using the services provided by iPurvey, you are agreeing to
      our Terms & Conditions as set out`,
      `Your access to and use of the service is subject to our Privacy
      Policy iPurvey is not responsible for any errors or omissions
      within the data provided to us by third- party. We utilise the
      information as provided to us to monitor your journey for
      disruption. You are responsible for your actions and we are not
      liable for any damages or actions taken based on the use of the
      data or the application or service. iPurvey is not responsible
      for the content of third-party websites and you take full
      responsibility for accepting the terms and conditions of the
      third-party web sites.`,
    ],
    id: "02",
    link: "",
  },
  {
    head: "How do we do this",
    para: [
      `By using the services provided by iPurvey, you are agreeing to
      our Terms & Conditions as set out`,
      `Your access to and use of the service is subject to our Privacy
      Policy iPurvey is not responsible for any errors or omissions
      within the data provided to us by third- party. We utilise the
      information as provided to us to monitor your journey for
      disruption. You are responsible for your actions and we are not
      liable for any damages or actions taken based on the use of the
      data or the application or service. iPurvey is not responsible
      for the content of third-party websites and you take full
      responsibility for accepting the terms and conditions of the
      third-party web sites.`,
    ],
    id: "03",
  },
  {
    head: "What is covered?",
    para: [
      `By using the services provided by iPurvey, you are agreeing to
      our Terms & Conditions as set out`,
      `Your access to and use of the service is subject to our Privacy
      Policy iPurvey is not responsible for any errors or omissions
      within the data provided to us by third- party. We utilise the
      information as provided to us to monitor your journey for
      disruption. You are responsible for your actions and we are not
      liable for any damages or actions taken based on the use of the
      data or the application or service. iPurvey is not responsible
      for the content of third-party websites and you take full
      responsibility for accepting the terms and conditions of the
      third-party web sites.`,
    ],
    id: "04",
  },
  {
    head: "What is not covered?",
    para: [
      `By using the services provided by iPurvey, you are agreeing to
      our Terms & Conditions as set out`,
      `Your access to and use of the service is subject to our Privacy
      Policy iPurvey is not responsible for any errors or omissions
      within the data provided to us by third- party. We utilise the
      information as provided to us to monitor your journey for
      disruption. You are responsible for your actions and we are not
      liable for any damages or actions taken based on the use of the
      data or the application or service. iPurvey is not responsible
      for the content of third-party websites and you take full
      responsibility for accepting the terms and conditions of the
      third-party web sites.`,
    ],
    id: "05",
  },
  {
    head: "Limitation of our Liability",
    para: [
      `By using the services provided by iPurvey, you are agreeing to
      our Terms & Conditions as set out`,
      `Your access to and use of the service is subject to our Privacy
      Policy iPurvey is not responsible for any errors or omissions
      within the data provided to us by third- party. We utilise the
      information as provided to us to monitor your journey for
      disruption. You are responsible for your actions and we are not
      liable for any damages or actions taken based on the use of the
      data or the application or service. iPurvey is not responsible
      for the content of third-party websites and you take full
      responsibility for accepting the terms and conditions of the
      third-party web sites.`,
    ],
    id: "06",
  },
  {
    head: "Links and Third-Party Websites",
    para: [
      `By using the services provided by iPurvey, you are agreeing to
      our Terms & Conditions as set out`,
      `Your access to and use of the service is subject to our Privacy
      Policy iPurvey is not responsible for any errors or omissions
      within the data provided to us by third- party. We utilise the
      information as provided to us to monitor your journey for
      disruption. You are responsible for your actions and we are not
      liable for any damages or actions taken based on the use of the
      data or the application or service. iPurvey is not responsible
      for the content of third-party websites and you take full
      responsibility for accepting the terms and conditions of the
      third-party web sites.`,
    ],
    id: "07",
  },
  {
    head: "Compensation",
    para: [
      `By using the services provided by iPurvey, you are agreeing to
      our Terms & Conditions as set out`,
      `Your access to and use of the service is subject to our Privacy
      Policy iPurvey is not responsible for any errors or omissions
      within the data provided to us by third- party. We utilise the
      information as provided to us to monitor your journey for
      disruption. You are responsible for your actions and we are not
      liable for any damages or actions taken based on the use of the
      data or the application or service. iPurvey is not responsible
      for the content of third-party websites and you take full
      responsibility for accepting the terms and conditions of the
      third-party web sites.`,
    ],
    id: "08",
  },
];

const TermsDetail = () => {
  let [trans, setTrans] = useState([termsData[0]]);

  const handleTransalte = (event) => {
    let filter = termsData.filter((val) => val.id === event);
    setTrans(filter);
    if (trans.length && filter[0].id === trans[0].id) {
      setTrans([]);
    }
  };

  return (
    <div className="terms_detail_contianer">
      <div className="terms_dtl_md">
        <div className="termsDetail_box">
          <div className="termsQues_list">
            <h4>Contents</h4>
            <ul className="tersmQues_ul">
              {termsData.map((val) => (
                <li>
                  <div
                    className={`termQ
                       ${
                         trans.length
                           ? trans[0].id === val.id
                             ? "active_term"
                             : ""
                           : null
                       }
                       `}
                    onClick={() => handleTransalte(val.id)}
                  >
                    <p>{val.head}</p>
                    {trans.length? val.id === trans[0].id ? (
                      <img src={arrow} alt="..." />
                    ) : null : null}
                  </div>
                  {trans.length?  trans[0].id === val.id
                    ? trans.map((val) => (
                        <div className="mobileView_termsQues_detail">
                          <h6>{val.head}</h6>
                          {val.para.map((para) => (
                            <>
                              <p className="mt-3">{para}</p>
                            </>
                          ))}
                        </div>
                      ))
                    : null : null }
                </li>
              ))}
            </ul>
          </div>
          <div className="terms_quesDetail_box">
            {trans.map((val) => (
              <div className="termQues_detail_content">
                <h6>{val.head}</h6>
                {val.para.map((para) => (
                  <>
                    <p className="mt-3">{para}</p>
                  </>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsDetail;
