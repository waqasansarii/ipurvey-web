import React from 'react'
import { Link } from 'react-router-dom'
import { blog_card_data } from '../../Pages/Blogs/cardData'
import arrow from '../../Assets/Icon feather-arrow-right@2x.png'
import './card.css'

const BlogCard = ({size,className}) => {
    return (
        <div className={`blog_card_container ${className}`}>
            <h3 className='blog_card_heading'>Top News</h3>
            <div className="blog_card_div">
                {blog_card_data.map((val) => (
                    <div className="card blog_card" style={{ width: `${size}rem`,marginTop:'15px' }} key={val.id}>
                        <img src={val.img} className="card-img-top" alt="..." />
                        <div className='card_title_div'>
                            <h6><strong> {val.title} </strong></h6>
                        </div>
                        <div className="blog_data_div">
                            <p>{val.date}</p>
                        </div>
                        <div className="card-body blog_card_body">
                            <p className="card-text">
                                {val.para}
                            </p>
                        </div>
                        <div className='read_more_div'>
                            <Link className='read_link' to={`/blog/${val.id}`} >Learn more <img className='right_arrow' src={arrow} alt="" /></Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BlogCard
