import {useRef} from "react";
import "./styles/navbar.css";
function Navbar({scrollToPageone, scrollToAbout,scrollToPortfolio ,scrollToContact}){
    return(
//  navbar 
       <navbar >
            <div id="leftdiv">Naresh.R</div>
            <div className="ringhtdiv">
                <ul id="nav-list">
                    <li id="dez"><a onClick={scrollToPageone}>Home</a></li>
                    <li id="dez"><a  onClick={scrollToAbout}>About</a></li>
                    <li id="dez"><a onClick={scrollToPortfolio}>Portfolio</a></li>
                    <li id="dez"><a onClick={scrollToContact}>Contact</a></li>
                </ul>
            </div>
       </navbar> 
    );
}
export default Navbar;