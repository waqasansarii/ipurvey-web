import React from 'react'
import getApp from '../Assets/Group 4930@2x.png'
import arrow from '../Assets/Icon feather-arrow-rightw.png'
import store from '../Assets/App store Icons@2x.png'

const GetApp = ({btn,para,head}) => {
    return (
        <div>
            <div className="home_commingsoon">
                <div
                    className="hc_box">
                    <div className="hcb_left">
                        <h2
                            className="lh-base">
                            {head} <br />

                        </h2>
                        <p
                            className="lh-base blue_para">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                            diam nonumy eirmod tempor invidunt ut labore
                       </p>
                       {para?
                       <p
                       className="lh-base blue_para">
                            Lorem ipsum dolor sit amet, consetetur
                       </p>
                            :null}
                       {btn?
                        <button className='sign_up_todayBtn'>Sign Up today <img src={arrow} alt="" /></button>
                    :null}
                        <div>

                            <span    >
                                Coming soon!
                </span>
                            <img src={store} alt="..." />
                        </div>
                    </div>
                    <div className="hcb_right">
                        <img className="h_mob1" src={getApp} alt="..." />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetApp
