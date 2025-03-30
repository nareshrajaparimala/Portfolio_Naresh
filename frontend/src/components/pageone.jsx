import React from "react";
import './styles/pageone.css';

function Pageone({pageoneRef}){
    return(
        <streem ref={pageoneRef}>
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
                    Backend & DBA Student
                </div>
                <p id="paraThought"> passionate about innovation, problem-solving,<br /> and creating seamless digital experiences</p>
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