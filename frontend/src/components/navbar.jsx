import React from "react";
import "./styles/navbar.css";
function Navbar(){
    return(
//  navbar 
       <navbar>
            <div id="leftdiv">Naresh.R</div>
            <div className="ringhtdiv">
                <ul id="nav-list">
                    <li id="dez"><a href="#">Home</a></li>
                    <li id="dez"><a href="#">About</a></li>
                    <li id="dez"><a href="#">Portfolio</a></li>
                    <li id="dez"><a href="#">Contact</a></li>
                </ul>
            </div>
       </navbar> 
    );
}
export default Navbar;