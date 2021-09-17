import React, { useEffect, useState } from "react";
import ShowDetail from "./ShowDetail";
import { useParams } from "react-router-dom";
import { accountActivityTable } from "../data";
import BackHeader from "../BackHeader";

const MobViewActitvityDetailPage = () => {
  const { id } = useParams();
  let [activity,setActivity] = useState([])
  useEffect(() => {
    const filterActivityData = accountActivityTable.body.filter(
      (val) => val.id === id
    );
    // if(filterActivityData.length){
    // }
      setActivity(filterActivityData)
  }, []);
  // console.log(activity);

  if(!activity.length){
    return <div>loading...</div>
  }

  return (
    <div className="mobView_moreActivity_dtl_container">
      <BackHeader head="ACOUNT ACTIVITY" link="/account-activity" />
      <div className="mobView_moreActivity_dtl_md">
        <ShowDetail detailData={ activity[0]} />
      </div>
    </div>
  );
};

export default MobViewActitvityDetailPage;
