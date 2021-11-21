import './topbar.scss'
import {Person, Mail} from "@material-ui/icons"

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    {/* left icons of the top bar */}
                    <a href="#intro" className="logo">
                        <span className="nav-icon">K</span> 
                        arim
                    </a>
                    <div className="itemContainer">
                        <Person className="icon"/>
                        <span>+968 9254 5260</span>

                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span>karim991996@gmail.com</span>

                    </div>

                </div>
             
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>

                </div>

            </div>
            
        </div> 
    )
}
