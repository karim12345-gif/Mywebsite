import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";

export default function Intro() {
  const textRef = useRef();

  // for the text animation
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Web Developer", "Mobile App Developer", "Teach Enthusiastic"],
    });
  }, []);

  return (
    
    <div className="intro" id="intro">
      {/* Mobile  */}
      
      <div className="right">
        <div className="wrapper">
          <h2>
            Hello, I'm 
            <span>
              <img
                src="https://user-images.githubusercontent.com/1303154/88677602-1635ba80-d120-11ea-84d8-d263ba5fc3c0.gif"
                alt=""
              />
            </span>
          </h2>
        </div>
      </div>

          {/* middle is done  */}
          <div className="middle">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 4 }}
        >
          Karim<span>.</span>
        </motion.h1>
      </div>

      <div className="left">
        {/* its getting out span like getelementbyid */}
        <motion.h3 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 4 }}
        >
          I'm a <span ref={textRef}></span>
        </motion.h3>
      </div>

      {/*  */}

      <div className="right-content">
        {/* Phone  */}
        <div className="phone">
          <Fade duration={3000} direction="right" cascade="true">
            <img src="assests/phone-1.svg" alt="" />
          </Fade>
        </div>
        {/* Message 1 blue sign  */}
        <div className="message1">
          <Fade duration={3000} direction="right">
            <img src="assests/message_blue.svg" alt="" />
          </Fade>
        </div>
        {/* Message 2 pink sign  */}
        <div className="message2">
          <Fade duration={3000} direction="right">
            <img src="assests/message_pink.svg" alt="" />
          </Fade>
        </div>

        {/* Orange sign  */}
        <div className="orange">
          <Fade duration={3000} direction="right">
            <img src="assests/ring_orange.svg" alt="" />
          </Fade>
        </div>
      </div>

      <div className="arrow-direction">
        <a href="#portfolio">
          <img src="assests/down.png" alt="" />
        </a>
      </div>

  
      
    </div>
  );
}
