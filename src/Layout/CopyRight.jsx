import React from 'react'
import {Link} from 'react-router-dom' 
import fb from '../Assets/Group 2430@2x.png'
import insta from '../Assets/Group 2432@2x.png'
import link from '../Assets/Group 3406@2x.png'
import twiter from '../Assets/Group 3407@2x.png'
import youtube from '../Assets/Group 3315@2x.png'
import path from '../Assets/Path 4443.png'
import copy from '../Assets/Icon metro-copyright.png'

const CopyRight = () => {
    return (
        <div className='copy_right_container'>
            <div className="copy_right_main_div">
                <div className="contact_link_ul_">
                    <h5>Contact us</h5>
                    <img className='contct_path_line' src={path} alt="" />
                    <ul className="social_links">
                        <li>
                            <a href="">
                                <img src={fb} alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img className='insta_icon' src={insta} alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src={youtube} alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src={twiter} alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src={link} alt="" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="term_link_div">
                    <div>
                        <Link className='foter_link' to='/privacy'> Privacy policy  </Link>
                      |
                      <Link className='foter_link' to='/terms'> Terms of Use </Link>
                    </div>
                </div>
            </div>
                <div className="copy_right_div">
                    <p>Copyright   <img src={copy} alt="" />    2020. iPurvey.</p>
                </div>
        </div>
    )
}

export default CopyRight
