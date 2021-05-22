import React, { useEffect, useState, useLayoutEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper-bundle.css';
import SocialFeed from '../../Components/BlogComp/SocialFeed'
import { useParams } from 'react-router-dom'
import { blog_card_data } from './cardData'
// assets 
import blogSliderImg from '../../Assets/Rectangle 1137@3x.png'
import BlogCard from '../../Components/BlogComp/BlogCard'
import SubNav from '../../Layout/SubNav'
// import sIcon1 from '../../Assets/Icon awesome-facebook-square.png'
// import sIcon2 from '../../Assets/Icon awesome-instagram-1.png'
// import sIcon3 from '../../Assets/Icon awesome-twitter-square.png'
// import sIcon4 from '../../Assets/Icon awesome-linkedin.png'
// import sIcon5 from '../../Assets/Icon awesome-behance-square.png'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const SelectBlog = () => {

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { id } = useParams()
    let [blogData, setBlogData] = useState([])
    useEffect(() => {
        const filter = blog_card_data.filter((val) => id === val.id)
        setBlogData(filter)
    }, [id])

    return (
        <div>
            <div className='blog_container'>
                <SubNav head='ipurvey Blogs' />
                <div className="blog_main_div">
                    {/* <div className="blog_head_search_div">
                        <h3><strong style={{ color: '#1cc1a0' }}> Rarare Blog!</strong></h3>
                    </div> */}
                    {/* <div className='get_blog_one_link'>
                        Blogs {' > '} <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</span>
                    </div> */}
                    <div className="select_blog_para_data">
                        <h5><strong>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</strong></h5>
                        <div className="blog_data_div">
                            <p>june 20-3-2020 | 3:00 Pm</p>
                        </div>
                    </div>
                    <div className='blog_card_socail_feed_div'>
                        {blogData.map((val, i) => (
                            <div className='select_blog_more_main_div' key={i}>
                                <Swiper
                                    spaceBetween={50}
                                    slidesPerView={1}
                                    navigation
                                    pagination={{ clickable: true }}
                                    // scrollbar={{ draggable: true }}
                                    onSwiper={(swiper) => console.log(swiper)}
                                    onSlideChange={() => console.log('slide change')}
                                    className='swiper_slider_blog'
                                >
                                    <SwiperSlide>
                                        <img className='id_blog_img' src={blogSliderImg} alt="img" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img className='id_blog_img' src={blogSliderImg} alt="img" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img className='id_blog_img' src={blogSliderImg} alt="img" />
                                    </SwiperSlide>
                                 </Swiper>
                                <div className="select_blog_user_info" >
                                </div>
                                <div className="select_blog_more_para">
                                    <p >
                                        {val.para1 ? val.para1 : null}
                                    </p>
                                    <p >
                                        {val.para2 ? val.para2 : null}
                                    </p>
                                    <p >
                                        {val.para3 ? val.para3 : null}
                                    </p>
                                </div>
                                <div className="more_head">
                                    <h5>More Stories</h5>
                                </div>
                                <BlogCard size='14' className='blog_cards_story' />
                            </div>
                        ))}
                        < SocialFeed />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SelectBlog
