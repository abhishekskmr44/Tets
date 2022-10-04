import React, { useEffect } from "react";
import "./Nintro.css";
import me5 from "../../img/profile pic.png";
import AOS from "aos";
import "aos/dist/aos.css";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Bounce from "react-reveal/Bounce";
import MailIcon from "@mui/icons-material/Mail";
import { Element } from "react-scroll/modules";







const NIntro = () => {
  useEffect(() => {
    setTimeout(() => {
      AOS.init({ duration: 2000 });
    }, 4000);
  }, []);

  return (
    <Element id="intro">
      <div
        data-aos="fade-down"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        className="wrapper"
      >
        <div className="container">
          <div className="i-wrapper">
            <div data-aos="fade" className="i-left">
              <Fade left>
                <div className="i-img">
                  <img src={me5} alt="" />
                </div>
              </Fade>
            </div>
            <div className="i-right">
              <Fade right>
                <div>
                  <p data-aos="fade-right" className="i-text-hi">
                    Hi 👋,
                  </p>
                  <p data-aos="fade-right" className="i-text">
                    {" "}
                    I'm <span className="span-name">Abhishek Sukumar</span>
                  </p>
                  <p data-aos="fade-right" className="i-text-desc">
                    I'm a full-stack React Js developer trained
                    by Masai School, Bengaluru. I have a passion to create
                    useful projects and systems which can contribute in 
                    everyone's wellbeing. I have interest in dark web also.
                  </p>
                </div>
              </Fade>
              <Flip right>
                <div className="i-resume">
                  <button> 
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="../src/img/AbhishekResume.pdf" download = "AbhishekResume.pdf"
                    className="r-btn"
                  >
                    Resume
                  </a>
                  </button>
                </div>
              </Flip>

              <div className="work">
                <Bounce>
                  <div className="work-icon">
                    <a
                      className="linked_in"
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.linkedin.com/in/abhishekskmr"
                    >
                      <LinkedInIcon />
                    </a>
                  </div>
                </Bounce>
                <Bounce>
                  <div className="work-icon">
                    <a
                      className="github"
                      target="_blank"
                      rel="noreferrer"
                      href="https://github.com/abhishekskmr44"
                    >
                      <GitHubIcon />
                    </a>
                  </div>
                </Bounce>
                <Bounce>
                  <div className="work-icon">
                    <a
                      className="email"
                      href="mailto:abhishekskmr444@gmail.com"
                    >
                      <MailIcon />
                    </a>
                  </div>
                </Bounce>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default NIntro;