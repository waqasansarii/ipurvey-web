import React from 'react'
import AnimationSection from '../../Components/AnimationSection'
import Stepper from './Stepper'
import './TravelClaim.css'

const TravelClaim = () => {
    return (
        <div className='home_steper_animation'>
            <AnimationSection forms={<Stepper />} />
        </div>
    )
}

export default TravelClaim
