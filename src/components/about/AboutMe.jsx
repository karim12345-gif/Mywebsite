import "./about.scss";
import {Fade} from 'react-awesome-reveal';

export default function AboutMe() {

  return (
    <div className="aboutMe" id="about">


      {/* left part */}
      <div className="left">
      <Fade  direction="right"
    duration={3000}
    >
        <h1>About Me </h1>
       </Fade>
        <div className="arrows">
          <hr className="new4" />
          <hr className="new5" />
        </div>
        <Fade duration={3000}>
        <p>
          I have almost 2 years of experience working in Software development. I
          worked on projects from the front end to the back end using different
          technologies. I am a quick learner and driven with a passion to learn
          new technologies to help put services out there for people. I have the
          attitude to accept feedback to grow and the motivation to keep
          learning.
        </p>
        </Fade>
    
      </div>





      <div className="image">
      <Fade direction="up"
    duration={3000}
    >
        <img
          src="https://mrluisfer.netlify.app/static/media/code-typing-contactme.f0ec30ab.svg"
          alt=""
        />
        </Fade>
      </div>
      {/* Social media section  */}
      <div className="social-image">
        
       <a href="https://github.com/karim12345-gif" className="github">
          <img
            src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-github-1.png"
            alt=""
            width="50"
            height="50"
            style={{ marginLeft: ".6rem" }}
          />
        </a>
        <a href="https://www.linkedin.com/in/karim-salim/" className="Linkdin">
          <img
            src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
            alt=""
            width="50"
            height="50"
            style={{ marginLeft: ".6rem" }}
          />
        </a>

        <a
          href="https://stackoverflow.com/users/14599095/karim"
          className="stackoverflow"
        >
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/stackoverflow-2752065-2284882.png"
            alt=""
            width="50"
            height="50"
            style={{ marginLeft: ".6rem" }}
          />
        </a>
        
      </div>



      <div className="work_arrow">
        <a href="#skills">
          <img src="assests/down.png" alt="" />
        </a>
      </div>



      
      <div className="right">
        <div className="action-item">
        <Fade direction="left" duration={3000}>
          <div className="skills-item-logo">
            <img
              src="https://www.svgrepo.com/show/26306/light-bulb.svg"
              alt=""
              width="40"
              height="40"
            />
          </div>
          <div className="skills-title-name">Problem Solving Skills</div>
          <div className="message">
            I have the ability to solve any task even if i'm not familiar with
            it.
          </div>
          </Fade>
        </div>

        <div className="action-item">
          <Fade direction="left" duration={3000}>
          <div className="skills-item-logo">
            <img
              src="https://www.svgrepo.com/show/237742/time-watch.svg"
              alt=""
              width="40"
              height="40"
            />
          </div>
          <div className="skills-title-name">Time Management Skills</div>
          <div className="message">Ability to use my time productively.</div>
          </Fade>
        </div>

        <div className="action-item">
        <Fade direction="left" duration={3000}>
          <div className="skills-item-logo">
            <img
              src="https://mayank0255.github.io/assets/images/icons8-communication-skill-96.png"
              alt=""
              width="40"
              height="40"
            />
          </div>
          <div className="skills-title-name">Communication Skills</div>
          <div className="message">
            To listen to feedback and ideas from others.
          </div>
          </Fade >
        </div>
        <div className="action-item">
        <Fade direction="left" duration={3000}>
          <div className="skills-item-logo">
            <img
              src="https://www.svgrepo.com/show/229017/flag-maps-and-flags.svg"
              alt=""
              width="40"
              height="40"
            />
          </div>
          <div className="skills-title-name">LeaderShip Skills</div>
          <div className="message">
            Motivate a team to do their best at work.
          </div>
          </Fade>
        </div>
    
      </div>
      .


    </div>
  );
}
