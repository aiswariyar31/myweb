import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import cnvimg from "../../assets/cnvimg.svg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={cnvimg} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I'm an M.Sc Computer Science graduate from Kannur University. With
              two years of hands-on experience in Off-page SEO, I have developed
              a strong foundation in digital marketing strategies while
              concurrently honing my coding skills.
            </p>
            <p>
              My passion for coding transcends mere professional endeavors; it
              embodies a personal dedication to perpetual learning and mastery
              of advancing technologies.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "90%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Python</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>SEO</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>MySQL</p>
              <hr style={{ width: "65%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>3+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>13+</h1>
          <p>CERTIFICATIONS</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>8+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
      </div>
    </div>
  );
};

export default About;