import React, { useEffect } from "react";
import "./About.css";
import AOS from "aos";
import "aos/dist/aos.css";
import MailIcon from "@mui/icons-material/Mail";
import Flip from "react-reveal/Flip";
import Bounce from "react-reveal/Bounce";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div
      data-aos="fade-down"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      id="about"
      className="wrapper"
    >
      <div className="container">
        <Flip left>
          <div className="a-content">
            <h1 className="a-title">About Me</h1>
            <p className="a-sub">I'm Abhishek Sukumar</p>
            <p className="a-desc">
              Aspiring full Stack MERN Developer. I love to make
              projects which are helpful for masses and serve 
              as a great helpful entity.
            </p>
            <Bounce left>
              <div className="connect-at">
                <div className="connect-icon">
                  <MailIcon />
                </div>
                <a href="mailto:abhishekskmr444@gmail.com">
                  abhsihekskmr444@gmail.com
                </a>
              </div>
            </Bounce>
          </div>
        </Flip>
      </div>
    </div>
  );
};

export default About;
