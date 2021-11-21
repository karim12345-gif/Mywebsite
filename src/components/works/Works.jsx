import "./work.scss";
import Particles from "react-particles-js";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";

export default function Works() {
  const [currentSlide, setCurrentSlider] = useState(0);
  const data = [
    {
      id: 1,
      title: "Web E-commerce Full-Stack App",
      desc: "A full-stack e-commerce for tech shopping, i built it from scratch using JavaScript ,React.js, Redux and React Hooks for the frontend. Moreover, for the backend, I used Node.js, Express.js and MongoDB.",
      img: "https://karim12345-gif.github.io/portfolio-finalVersion/img/mern-stack.png",
    },
    {
      id: 2,
      title: "Web Billing-Page Full-Stack App",
      desc: "A full-stack billing page using Django framework, Python and Rest-API for the Back-end. Front-end, I used React.js, React Hooks, Redux and Axios to fetch the Rest-API data . Finally, I performed Unit Testing on the Back-end. Front-end Unit Testing is still in the development process.",
      img: "https://karim12345-gif.github.io/portfolio-finalVersion/img/billing.png",
    },
    {
      id: 3,
      title: "Web Tesla App",
      desc: "Tesla ⚡️ clone built with React.js. Throughout this project, I have used React-Router which is the standard routing library for React. With Firebase for authentication.  Additionally, I used Material-UI and Redux,  Redux helps with writing JavaScript apps that behave consistently across client, server, and native environments and are easy to test.",
      img: "https://d1lss44hh2trtw.cloudfront.net/assets/article/2021/04/26/tesla-earningscall-watch-here_feature.jpg",
    },
    {
      id: 4,
      title: "Calculator",
      desc: "I managed to create a gRPC server and client application, the client can input various program arguments and send them to the server, and wait for the server to reply back, I also managed to apply unit testing , using Golang. Finally , I used docker to share application image and development environments.",
      img: "https://media.istockphoto.com/vectors/calculator-icon-vector-id1000600468?b=1&k=6&m=1000600468&s=612x612&w=0&h=qWQxi2NruFHFrIV2LyWV4lLfnnzI2_0FQd9cOXoytWo=",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlider(currentSlide > 0 ? currentSlide - 1 : 2)
      : //data length is 2, currentslide will ask is 1 smaller than 2 , then it will add +1 and move to the next slider , now you cant
        //increase anymore so zero to start from the beginning
        setCurrentSlider(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  return (
    <div className="works" id="works">
      <div className="background-animation">
        <Particles
          params={{
            particles: {
              number: {
                value: 50,
              },
              size: {
                value: 3,
              },
              color: {
                value: "#DC143C",
              },
            },
            interactivity: {
              events: {
                onclick: {
                  enable: true,
                  mode: "repulse",
                },
              },
            },
          }}
          height="100vh"
          width="80vw"
        />
      </div>
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <Fade duration={2000} direction="right" cascade="true">
              <div className="item">
                <div className="left">
                  <div className="leftContainer">
                    <div className="imgContainer">
                      <img src={d.img} alt="" />
                    </div>
                    <h2>{d.title}</h2>
                    <p>{d.desc}</p>
                    <span>Projects</span>
                  </div>
                </div>
                <div className="right">
                  <img
                    src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930"
                    alt=""
                  />
                </div>
              </div>
            </Fade>
          </div>
        ))}
      </div>
      <Fade duration={3000} cascade="true">
        <img
          src="assests/arrow.png"
          className="arrow left"
          alt=""
          onClick={() => handleClick("left")}
        />
        <img
          src="assests/arrow.png"
          className="arrow right"
          alt=""
          onClick={() => handleClick("right")}
        />
      </Fade>
    </div>
  );
}
