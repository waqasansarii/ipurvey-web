import React from 'react'
import ShowDetail from './ShowDetail'
import { useParams } from 'react-router-dom'
import { accountActivityTable } from '../data'
import BackHeader from '../BackHeader'

const MobViewActitvityDetailPage = () => {
  const { id } = useParams()
  const filterActivityData = accountActivityTable.body.filter((val) => val.id === id)
  console.log(filterActivityData)

  return (
    <div className='mobView_moreActivity_dtl_container'>
      <BackHeader head='ACOUNT ACTIVITY' link='/account-activity' />
      <div className='mobView_moreActivity_dtl_md'>

        <ShowDetail detailData={filterActivityData[0]} />
      </div>
    </div>
  )
}

export default MobViewActitvityDetailPage
