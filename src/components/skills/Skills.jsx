import "./skills.scss";
import "aos/dist/aos.css";
import React from "react";
import { Fade } from "react-awesome-reveal";

export default function Skills() {
  return (
    <div className="skills" id="skills">
      <div className="left">
        <Fade duration={3000} direction="left">
          <h1>Skills</h1>
        </Fade>
        <hr className="new4" />
        <hr className="new5" />

        <Fade duration={7000}>
          <p>
            I'm eager to learn and explore new things in my field, with good
            listening skills for feedback and the ability to learn and implement
            new things quickly.
          </p>
        </Fade>

        <Fade duration={2500} direction="left">
          <div className="skill_panel">
            <div className="skill_panel_title">INTERESTS</div>
            <div className="skill_panel_items">
              <ul>
                <li>Full-Stack Developer</li>
                <li>Front-End Developer</li>
                <li>Back-End Developer</li>
                <li>Software Engineer</li>
              </ul>
            </div>
          </div>
        </Fade>
      </div>

      <div className="work_arrow">
        <a href="#works">
          <img src="assests/down.png" alt="" />
        </a>
      </div>
    

      <div id="skillsPage" className="right">
      <Fade duration={3000} direction="top-right">
    
        <div className="grid-item">
          <div className="skills-logo">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
              alt="skill"
            />
        
          </div>
    
       
       
          <div className="skills-title">JAVASCRIPT</div>
    
        </div>


        <div className="grid-item">
          <div className="skills-logo">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              alt=""
            />
          </div>
       

          <div className="skills-title">REACT.JS</div>
        </div>
        <div className="grid-item">
          <div className="skills-logo">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg"
              alt=""
              width="58"
              height="70"
            />
          </div>

          <div className="skills-title">JAVA</div>
        </div>
        <div className="grid-item">
          <div className="skills-logo">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
              alt="skill"
              width="68"
              height="80"
            />
          </div>
          <div className="skills-title">CSS3</div>
        </div>
        <div className="grid-item">
          <div className="skills-logo">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
              alt="skill"
              width="60"
              height="90"
            />
          </div>
          <div className="skills-title">MYSQL</div>
        </div>
        <div className="grid-item">
          <div className="skills-logo">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
              alt="skill"
            />
          </div>
          <div className="skills-title">PYTHON</div>
        </div>
        <div className="grid-item">
          <div className="skills-logo">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
              alt="skill"
              width="70"
              height="80"
            />
          </div>
          <div className="skills-title">MONGODB</div>
        </div>
        <div className="grid-item">
          <div className="skills-logo">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
              alt="skill"
              width="80"
            />
          </div>
          <div className="skills-title">NODE.JS</div>
        </div>
        <div className="grid-item">
          <div className="skills-logo">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
              alt="skill"
              width="70"
            />
          </div>
          <div className="skills-title">REDUX</div>
        </div>
        <div className="grid-item">
          <div className="skills-logo">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-original.svg"
              alt="skill"
              width="80"
            />
          </div>
          <div className="skills-title">DJANGO</div>
        </div>
        <div className="grid-item">
          <div className="skills-logo">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
              alt="skill"
              height="75"
            />
          </div>
          <div className="skills-title">GIT</div>
        </div>
        <div className="grid-item">
          <div className="skills-logo">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
              alt="skill"
            />
          </div>
          <div className="skills-title">DOCKER</div>
        </div>
        <div className="grid-item">
          <div className="skills-logo">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg"
              alt="skill"
              width="75"
            />
          </div>
          <div className="skills-title">KUBERNETES</div>
        </div>
        <div className="grid-item">
          <div className="skills-logo">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
              alt="skill"
              width="70"
            />
          </div>
          <div className="skills-title">SASS</div>
        </div>
        <div className="grid-item">
          <div className="skills-logo">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
              alt="skill"
              width="65"
              height="80"
            />
          </div>
          <div className="skills-title">POSTGRESQL</div>
        </div>
        <div className="grid-item">
          <div className="skills-logo">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"
              alt="skill"
              width="69"
              height="76"
            />
          </div>
          <div className="skills-title">FLUTTER</div>
        </div>
        </Fade>
      </div>
    </div>
  );
}
