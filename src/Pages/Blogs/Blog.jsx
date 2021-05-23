import React,{useLayoutEffect} from "react";
import './Blog.css'
import BlogCard from '../../Components/BlogComp/BlogCard'
// import UpcomingEvent from '../../Components/BlogComp/UpcomingEvent'
import SocialFeed from '../../Components/BlogComp/SocialFeed'
import { BlogSlider } from '../../Components/BlogComp/BlogSlider'
import SubNav from "../../Layout/SubNav";
// assets 
// import search from '../../Assets/Icon feather-search@2x.png'

const Blog = () => {
    
    useLayoutEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return (
        <div className='blog_container'>
            <SubNav  head='ipurvey Blogs'/>
            <div className="blog_main_div">
                <div className='event_slider_div'>
                    <BlogSlider />
                </div>
                <div className='blog_card_socail_feed_div margin_top'>
                    <BlogCard size='15' />
                    <SocialFeed />
                </div>
            </div>

        </div>
    )
}

export default Blog
