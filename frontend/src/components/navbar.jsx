import {useRef} from "react";
import "./styles/navbar.css";
function Navbar({scrollToPageone, scrollToAbout,scrollToPortfolio ,scrollToContact}){
    const menuref=useRef(null);
    const line3=useRef(null);
    const closemenuref=useRef(null);
    
    const openmenu=()=>{
        if(menuref.current ){
            menuref.current.style.display="flex";
            line3.current.style.display="none";
            closemenuref.current.style.display="flex";
        }
    }
    const closemenu=()=>{
        if(menuref.current ){
            menuref.current.style.display="none";
            line3.current.style.display="flex";
            closemenuref.current.style.display="none";
        }
    }


    return(
//  navbar 
       <navbar >
            <div id="leftdiv">Naresh.R</div>
            <div className="ringhtdiv">
                <ul id="nav-list" ref={menuref}>
                    <li id="dez"><a onClick={scrollToPageone}>Home</a></li>
                    <li id="dez"><a  onClick={scrollToAbout}>About</a></li>
                    <li id="dez"><a onClick={scrollToPortfolio}>Portfolio</a></li>
                    <li id="dez"><a onClick={scrollToContact}>Contact</a></li>
                </ul>
                
            </div>
            <i class="ri-align-justify" onClick={openmenu} ref={line3}></i>
            <i class="ri-xrp-line" onClick={closemenu} ref={closemenuref}></i>
       </navbar> 
    );
}
export default Navbar;