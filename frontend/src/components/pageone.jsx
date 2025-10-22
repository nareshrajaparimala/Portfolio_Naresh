import React, { useState, useEffect } from "react";
import './styles/pageone.css';

function Pageone({pageoneRef}){
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    
    const skills = [
        "Backend Developer",
        "DSA Enthusiast", 
        "Database Expert",
        "Full Stack Student",
        "Problem Solver"
    ];
    
    useEffect(() => {
        const typeText = () => {
            if (charIndex < skills[currentIndex].length) {
                setCurrentText(skills[currentIndex].substring(0, charIndex + 1));
                setCharIndex(charIndex + 1);
            } else {
                setTimeout(() => {
                    setCharIndex(0);
                    setCurrentIndex((currentIndex + 1) % skills.length);
                }, 2000);
            }
        };
        
        const timer = setTimeout(typeText, 100);
        return () => clearTimeout(timer);
    }, [charIndex, currentIndex, skills]);
    
    return(
        <streem ref={pageoneRef}>
            {/* naresh.R */}
            <div className="field">
            {/* thought */}
                <div className="thought">
                    {/* <div className="inovateImage">
                        <img src="./styles/image/inovate.png" alt="test" />
                    </div> */}<i class="ri-brain-line"></i>
                    Ready to innovate
                </div>
                {/* topic */}
                <div className="topic">
                Full Stack <br />
                    <span id="devop">Developer</span> 
                </div>
                <div className="info1">
                    {currentText}<span className="cursor">|</span>
                </div>
                <p id="paraThought">Welcome to my digital world! I'm a passionate developer who transforms complex problems into elegant solutions. With expertise in full-stack development, I create seamless user experiences that bridge the gap between innovative design and powerful functionality. Every line of code I write is driven by curiosity, precision, and the desire to build something meaningful that makes a difference in people's lives.</p>
                {/* skills */}
                <div className="skillsDisplay">
                    <div className="dez">
                        DSA
                    </div>
                    <div className="dez">
                        JavaScript
                    </div>
                    <div className="dez">
                        Database
                    </div>
                    <div className="dez">
                        Node.js
                    </div>
                </div>
                {/* project and contacts */}
                <div className="pandc">
                    <div className="pandcdec">
                        <a href="https://github.com/nareshrajaparimala">Projects
                        <i class="ri-folder-shared-line"></i>
                        </a>
                        
                    </div>
                    <div className="pandcdec">
                        <a href="#">Contacts
                        <i class="ri-contacts-fill"></i>
                        </a>
                    </div>
                </div>
                {/* social media */}
                <div className="socialmedia">
                    <div className="iconbox">
                       <a href="https://github.com/nareshrajaparimala"> <i class="ri-github-fill"></i></a>
                    </div>
                    <div className="iconbox">
                       <a href="https://www.linkedin.com/in/naresh-raja-895477276/"> <i class="ri-linkedin-fill"></i></a>
                    </div>
                    <div className="iconbox">
                       <a href="https://www.instagram.com/naresh_r_code/"> <i class="ri-instagram-line"></i></a>
                    </div>
                </div>
            </div>
            <div className="interactiveDesign">
                {/* <img id="frontimg" src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHY3OGhqc3gxNHRsa2ZsdW54NGRiMnExaHQyMTlzN2xkc3VleDl1bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/YYW0hHizzIOrlhimPG/giphy.gif" alt="" /> */}
                <img id="frontimg" src="https://media.giphy.com/media/L1R1tvI9svkIWwpVYr/giphy.gif?cid=790b7611hszomiligr25d2f4gnvxbu50wpkrfl221ipkpxsz&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt="" />
                {/* <img  id="frontimg" src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExaTZldXg0dWJ5ZGtpaGdzZ3dleGFiNDM1cXVwdjRnYzFlbDduYmsydiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/u2pmTWUi0MXjyrMaVj/giphy.gif" alt="" /> */}
               {/* <img  id="frontimg" src="https://media.giphy.com/media/DbXSzkKLzy96e3uukf/giphy.gif?cid=ecf05e47p7rlhbbqcdqh5mtf76jeh2k1502lttb9vzbh3clx&ep=v1_gifs_related&rid=giphy.gif&ct=g" alt="" /> */}
                        {/* <img src="./styles/image/codeimage.gif" alt="" /> */}

            </div>
        </streem>
    );
}
export default Pageone;