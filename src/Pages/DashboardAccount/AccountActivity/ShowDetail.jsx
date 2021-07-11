import React from "react";

const ShowDetail = ({ detailData, reportBtn }) => {
  return (
    <div className="showDetail_container">
      <div className="showDetail_md">
        <h6>{detailData.title}</h6>
        <div className="sd_dateTime">
          <p>{detailData.date}</p>
          <p>{detailData.time}</p>
        </div>
        {detailData.type ? (
          <h6 className="sd_sub_head">{detailData.type}</h6>
        ) : null}
        <p className="sd_detail_para">
          {detailData.para ? detailData.para : detailData.msg}
        </p>
        {reportBtn ? (
          <div className="botm_btn">
            <button className="cus_blue_btn">Report Activity</button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ShowDetail;
