import React from 'react'
import BeAPartForm from './BeAPartForm'
import SubNav from '../../Layout/SubNav'
import Benifit from './Benifit'
import OurTeam from './OurTeam'
import './style.css'

const Career = () => {
    return (
        <div className='career_container'>
            <div className="career_md">
                <SubNav head='Careers' />
                <BeAPartForm />
                <Benifit />
                <OurTeam />
            </div>
        </div>
    )
}

export default Career
