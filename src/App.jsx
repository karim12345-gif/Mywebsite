import Topbar from "./components/topbar/Topbar"
import Intro from "./components/intro/Intro"
import Portfolio from "./components/portfolio/Portfolio"
import Works from "./components/works/Works"
import Contact from "./components/contact/Contact"
import './app.scss'
import { useState } from "react"
import Menu from "./components/menu/Menu"
import AboutMe from "./components/about/AboutMe"
import Skills from "./components/skills/Skills"
import Progress from "./components/progress/Progress"
// import {MediaQuery} from 'react-responsive'





function App() {
  const [menuOpen,setMenuOpen] = useState(false);
 



  

  return (
    
    <div className="app">

      {/* for the hamburger button to change colors */}
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      {/* for the hamburger to close*/}
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Progress />
 

     

      <div  className="sections" >
        {/* <MediaQuery minWidth={1224}  minResolution="2dppx"> */}
        <Intro/>
        <Portfolio/>
        <AboutMe/>
        <Skills/>
        <Works/>
        <Contact/>
  
         {/* </MediaQuery>  */}
      </div>

      
        
    </div>
  );
}

export default App;
