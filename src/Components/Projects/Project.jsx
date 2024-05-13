import React from "react";
import "./Project.css";
import theme_pattern from "../../assets/theme_pattern.svg";

const Project = () => {
  return (
    <div id="projects" className="projects">
      <div className="projects-title">
        <h1>Projects</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="projects-container">
      
      </div>
      <div className="projects-completed">
        <div className="project-completed">
          <h1>ASP.NET</h1>
          <p>Eco Tech Recycling</p>
          <p><span>SQL SERVER :- Aims at recycling
            electronic products</span></p>
        </div>
        <hr className="hrr-color" />
        <div className="project-completed">
          <h1>PHP</h1>
          <p>Dry Waste Recycling</p>
          <p><span>SQL SERVER :- Transforms waste
            into clean energy</span></p>
        </div>
        <hr className="hrr-color" />
        <div className="project-completed">
          <h1>JavaScript</h1>
          <p>Calculator Project</p>
          <p><span>Calculator Using HTML CSS And JavaScript</span></p>
        </div> 
        <hr className="hrr-color"  />
        <div className="project-completed">
          <h1>React</h1>
          <p>Ecommerce website</p>
          <a href="https://aiswariyar31.github.io/react-ecommerce-app/" target="_blank">   <p><span>https://aiswariyar31.github.io/react-ecommerce-app/</span></p></a>
        </div> 
        <hr className="hrr-color" />
        <div className="project-completed">
          <h1>React</h1>
          <p>Educational website</p>
        <a href="https://aiswariyar31.github.io/edu-website-test" target="_blank">  <p><span>https://aiswariyar31.github.io/edu-website-test</span></p></a>
        </div> 
        <hr className="hrr-color" />
        <div className="project-completed">
          <h1>Canva</h1>
          <p>Canva Design</p>
        <a href="https://aiswariyak.my.canva.site/" target="_blank">  <p><span>https://aiswariyak.my.canva.site/</span></p></a>
        </div>
      </div>
    </div>
  );
};

export default Project;