import Slider from "react-slick";
import Button from "../Btn/Btn";

// assets 
import blogSliderImg from "../../Assets/Mask Group 9.png";


export const BlogSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="blog_slick_slidr">
      <div>
        <img className="slider_img" src={blogSliderImg} alt="img" />
        <div className="upcomin_head_div slider_absolute">
          <div>
            <h6 className="upcoming_head">
              <strong>
                New Heading
              </strong>
            </h6>
            <p className="upcoming_data">Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <Button className="upcoming_btn" value="Learn more" />
          </div>
        </div>
      </div>
      <div>
        <img className="slider_img" src={blogSliderImg} alt="img" />
        <div className="upcomin_head_div slider_absolute">
          <div>
            <h6 className="upcoming_head">
              <strong>
                New Heading
              </strong>
            </h6>
            <p className="upcoming_data">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <Button className="upcoming_btn" value="Learn more" />
          </div>
        </div>
      </div>
    </Slider>
  );
};
