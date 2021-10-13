import React,{useState,useRef,useEffect} from "react";
import "../Style/table.css";
// assets
import i from "../../../Assets/Component 38 – 3.png";

const Table = ({ tbClass, data }) => {
  const [reqOpen, setreqOpen] = useState(false);
  const ReqRef = useRef(null);
  const handleChatOpen = () => {
    setreqOpen(true);
  };

  const hideChat = () => {
    setreqOpen(false);
  };

  //   outside click to close chat handler

  function handler(e) {
    if (ReqRef.current && !ReqRef.current.contains(e.target)) {
      hideChat();
    }
  }
  // run useEffect when state change
  useEffect(() => {
    if (reqOpen) {
      document.addEventListener("click", handler);
      return () => document.removeEventListener("click", handler);
    }
  }, [reqOpen]);
  return (
    <div className="table_container table_bk">
      {reqOpen ? (
          <div className="hoverI_togle_img2 tbHover" ref={ReqRef}>
            <div className="popover__content2">
              <h5> New:</h5>
              <p className="popover__message">
                Air passengers in England and Wales have up to six years from
                the date of the flight to make a flight compensation claim
              </p>
              <h5>Info Required:</h5>
              <p className="popover__message">
                With majority of train companies, claims can be made up to 28
                days after your journey. Some may allow longer{" "}
              </p>
              <h5>Claim Requested:</h5>
              <p className="popover__message">
                With majority of train companies, claims can be made up to 28
                days after your journey. Some may allow longer
              </p>
              <h5>Expired:</h5>
              <p className="popover__message">
                With majority of train companies, claims can be made up to 28
                days after your journey. Some may allow longer
              </p>
              <h5>Closed:</h5>
              <p>
                With majority of train companies, claims can be made up to 28
                days after your journey. Some may allow longer
              </p>
            </div>
          </div>
        ) : null}
      <table className={`db_table ${tbClass}`}>
        <thead>
          {data.head.map((val, i) => (
            <th key={i}>{val}</th>
          ))}
          <th onClick={() => {
                  !reqOpen ? handleChatOpen() : hideChat();
                }}>
            STATUS <img style={{ marginLeft: "5px" }} src={i} alt="..." />
          </th>
        </thead>
        <tbody>
          {data.body.map((val, i) => (
            <tr key={i}>
              <td>{val.date}</td>
              <td>{val.fromTo}</td>
              <td>{ val.mode }</td>
              <td>{val.operate }</td>
              <td>{val.type}</td>
              <td>{val.delay}</td>
              <td>{val.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
