import { useEffect, useState } from "react";
import PortfolioList from "../portfoliolist/PortfolioList";
import "./portfolio.scss";
import {
  featuredPortfolio,
  webPortfolio,
  MobilePortfolio,
  GamesPortfolio,
  FrontPortfolio,
  BackPortfolio,
} from "../../config/data";
import { Fade } from "react-awesome-reveal";

export default function Portfolio() {
  // the default is going to be selected
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);

  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "game",
      title: "Games App",
    },
    {
      id: "front",
      title: "Front-end App",
    },
    {
      id: "back",
      title: "Back-end App",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(MobilePortfolio);
        break;
      case "game":
        setData(GamesPortfolio);
        break;
      case "front":
        setData(FrontPortfolio);
        break;
      case "back":
        setData(BackPortfolio);
        break;
      // Default Value
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <Fade duration={1000} direction="right" cascade="true">
        <h1>Portfolio</h1>
        <ul>
          {list.map((item) => (
            <PortfolioList
              title={item.title}
              active={selected === item.id}
              setSelected={setSelected}
              id={item.id}
              purpose={item.purpose}
              language={item.language}
            />
          ))}
        </ul>

        {/* on click create the pop up page and added the the things inside of it  */}

        <body>
          <figure className="container">
            {data.map((d) => (
              <figure className="item">
                <img src={d.img} alt="" />
                <a href={d.link}></a>
            
                <figcaption>
                  <h4>Check It Out!</h4>
                  <h3>{d.title}</h3>
                  <h3>Purpose: {d.purpose}</h3>
                  <h3>Language: {d.language}</h3>
                </figcaption>
              </figure>
            ))}
          </figure>
        </body>
      </Fade>

   

      <div className="middle-arrow">
        <a href="#about">
          <img src="assests/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
