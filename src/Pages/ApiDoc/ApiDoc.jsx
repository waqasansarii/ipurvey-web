import React from "react";
import { useState } from "react";
import "./ApiDoc.css";
import logo from "../../Assets/iPurvery Logo PNG.svg";
import searchIcon from "../../Assets/Icon feather-search.png";
import copyIcon from "../../Assets/Icon material-content-copy.svg";
const options = {
  list1: {
    text: "Culpa eaque qui nostrum",
  },
  list2: {
    text: "Nostrum perferendis quis vitae",
  },
  list3: {
    text: "Nemo eos dicta doloribus quo",
  },
  list4: {
    text: "Reiciendis occaecati est quia et",
  },
  list5: {
    text: "Aut perferendis et",
  },
  list6: {
    text: "Aliquam nemo ut praesentium",
  },
  list7: {
    text: "Labore et temporibus.",
  },
  list8: {
    text: "Rerum corrupti deserunt",
  },
  list9: {
    text: "Culpa eaque qui nostrum",
  },
  list10: {
    text: "Culpa eaque qui nostrum ",
  },
  list11: {
    text: "Rerum corrupti deserunt",
  },
};
const ApiDoc = () => {
  const [active, setActive] = useState("list1");

  return (
    <React.Fragment>
      <div className="api_doc_section">
        <div className="api_doc_header">
          <h2>Api Documentation</h2>
          <span>Help?</span>
        </div>
        <div className="api_doc_hero">
          <div className="api_container">
            <div className="row">
              <div className="col-lg-3">
                <div className="api_list_box">
                  <div className="row">
                    <div className="col-lg-12">
                      <img src={logo} alt="..." />
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-lg-12">
                      <div className="ps_input1">
                        <input type="text" placeholder="Search a bank" />
                        <img
                          style={{ width: "20px" }}
                          src={searchIcon}
                          alt="..."
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row w-100 mt-3">
                    {Object.entries(options).map((el) => (
                      <div
                        className="col-lg-12 p-0"
                        onClick={() => setActive(el[0])}
                      >
                        <div
                          className={
                            el[0] === active
                              ? "api_list active_list"
                              : "api_list"
                          }
                        >
                          <span>Molestias unde distinctio quia et.</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="api_content">
                  <h2>Lorem Ipsum</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                    ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                    ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                    ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet.
                  </p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="api_editor">
                  <div className="row">
                    <div className="ae_head">
                      <h2>Lorem Ipsum</h2>
                      <img src={copyIcon} alt="..." />
                    </div>
                  </div>
                  <div className="row">
                    <div className="ae_body">
                      <h6>{"<!DOCTYPE html>"}</h6>
                      <h6>{"<html>"}</h6>
                      <h6>{"<body>"}</h6>
                      <h5 className="mt-4 mb-4">
                        {"<h2>An Unordered HTML List</h2>"}
                      </h5>
                      <h6>{"<ul>"}</h6>
                      <h6>{"<li>Coffee</li>"}</h6>
                      <h6>{"<li>Tea</li>"}</h6>
                      <h6>{"<li>Milk</li>"}</h6>
                      <h6>{"</ul>"}</h6>
                      <h4>{"<h2>An Ordered HTML List</h2>"}</h4>
                      <h6>{"<ol>"}</h6>
                      <h6 style={{ color: "#FE2B2B" }}>{"<li>Coffee</li>"}</h6>
                      <h6>{"<li>Tea</li>"}</h6>
                      <h6>{"<li>Milk</li>"}</h6>
                      <h6>{"</ol>"}</h6>
                      <h6>{"<!DOCTYPE html>"}</h6>
                      <h6>{"<html>"}</h6>
                      <h6>{"<body>"}</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ApiDoc;
