import React from "react";
import "../Style/table.css";
// assets

const Table = ({ tbClass, data, onClick }) => {
  return (
    <div className="table_container">
      <table className={`db_table ${tbClass}`}>
        <thead>
          {/* <tr> */}
            {data.head.map((val, i) => (
              <th key={i}>{val}</th>
            ))}
          {/* </tr> */}
        </thead>
        <tbody>
          {data.body.map((val, i) => (
            <tr key={i} onClick={() => onClick(val.id)}>
              <td>{val.date}</td>
              <td>{val.time}</td>
              <td>{val.type}</td>
              <td>{val.ip}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
