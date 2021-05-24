import React from 'react'
import Button from '../Btn/Btn'
// assets 
import social1 from '../../Assets/Rectangle -1@2x.png'
import social2 from '../../Assets/Rectangle -5@2x.png'
import social3 from '../../Assets/Rectangle -2@2x.png'
import social4 from '../../Assets/Rectangle -3@2x.png'
import social5 from '../../Assets/Rectangle -4@2x.png'
import social6 from '../../Assets/Rectangle 1137@2x.png'
import fb from '../../Assets/Group 833@2x.png'
import insta from '../../Assets/Group 3428@2x.png'

const SocialFeed = () => {
    return (
        <div className='socail_feed_conatiner'>
            <div className="social_feed_div">
                <div className="feed_div">
                    <h4><strong>Facebook Feed</strong></h4>
                    <img className='socail_feed_img' src={social1} alt="img" />
                    <img className='socail_feed_img' src={social2} alt="img" />
                    <img className='socail_feed_img' src={social3} alt="img" />
                    <img className='socail_feed_img' src={social4} alt="img" />
                    <img className='socail_feed_img' src={social5} alt="img" />
                    <img className='socail_feed_img' src={social6} alt="img" />
                    <button className='socail_button'>
                        <img src={fb} alt="img" />
                        <p>Follow us on Facebook</p>
                    </button>
                </div>
                <div className="instagram_div">
                    <div className="feed_div">
                        <h4><strong>Instagram Feed</strong></h4>
                        <img className='socail_feed_img' src={social1} alt="img" />
                        <img className='socail_feed_img' src={social2} alt="img" />
                        <img className='socail_feed_img' src={social3} alt="img" />
                        <img className='socail_feed_img' src={social4} alt="img" />
                        <img className='socail_feed_img' src={social5} alt="img" />
                        <img className='socail_feed_img' src={social6} alt="img" />
                        <button className='socail_button insta'>
                            <img src={insta} alt="img" />
                            <p>Follow us on Instagram</p>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SocialFeed
