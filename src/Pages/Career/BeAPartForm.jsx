import React,{useState} from "react";
// assets
import email from "../../Assets/Icon ionic-ios-mail@2x.png";
import drag from '../../Assets/drag.png'

const BeAPartForm = () => {

  const [img,setImg] = useState('')
  const handleImageUpload = e=>{
     const url = URL.createObjectURL(e.target.files[0])
     setImg(url)
  }

  return (
    <div className="beA_part_container">
      <div className="beA_part_md">
        <div className="beA_part_left_md">
          <h4>Be a Part of iPurvey</h4>
          <p className="be_part_para">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et
          </p>
          <p className="be_part_para">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum{" "}
          </p>
          <p className="be_part_para">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum{" "}
          </p>
          <div className="email_div">
            <img src={email} alt="" />
            <span className="email_span">contact@ipurvey.com</span>
          </div>
        </div>
        <div className="beA_part_right_form_md">
            <h4>Drop your resume!</h4>
            <div className="beA_part_form">
                <form >
                    <div className="hw_input">
                        <input type="text" placeholder='First Name' />
                        <input type="text" placeholder='Last Name' />
                    </div>
                    <input type="email" placeholder='Email Address' />
                    <input type="text" placeholder='Job Position Interested' />
                    <div className="dragNdrop">
                      <label htmlFor="drag">
                        <input type="file" name="drag" id="drag" onChange={handleImageUpload} style={{display:'none'}} />
                      {!img?
                        <img src={drag} alt="..."  />
                     : null }
                      </label>
                      {img? <img src={img} alt='...' /> : null}
                    </div>
                    <button>Send</button>
                </form>
            </div>
        </div>
      </div>
    </div>
  );
};

export default BeAPartForm;
