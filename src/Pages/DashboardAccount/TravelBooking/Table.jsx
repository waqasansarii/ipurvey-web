import React from "react";
import "../Style/table.css";
// assets
import i from "../../../Assets/Component 38 – 3.png";

const Table = ({ tbClass, data }) => {
  return (
    <div className="table_container">
      <table className={`db_table ${tbClass}`}>
        <thead>
          {data.head.map((val, i) => (
            <th key={i}>{val}</th>
          ))}
          <th>
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
