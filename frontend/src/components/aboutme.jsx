import React from "react";
import "./styles/aboutme.css";
function Aboutme({ aboutRef }){
    return(
        <aboutme ref={aboutRef}>
            {/* About ME */}
            <div className="headdiv">
                <h1 className="habout">About me</h1>
                <p id="sent1"><i class="ri-bard-fill"></i>
                    Transforming my Ideas into Digital Experience
                    <i class="ri-bard-fill"></i> </p>
            </div>
            {/*  sentence and image */}
            <div className="aboutsap">
                <div className="aboutsent">
                    <h1 id="deztex">Hello, I'm</h1>
                    <h1>Naresh.R</h1>
                    <p id="aboutpara"> “Passionate about web development, I love building efficient <br />and user-friendly solutions. Skilled in React, Node.js, and <br /> Express, I aim to create seamless digital experiences. <br /> Constantly learning and innovating, I strive to push boundaries in tech.”</p>
                    <div className="butabout">
                        <button id="cvdownload" >Download cv <i class="ri-file-text-fill"></i></button>
                        <button id="viewpro">View Projects <i class="ri-code-line"></i></button>
                    </div>
                </div>
                <div className="aboutpho">
                    <div className="myphoto">
                        {/* my photo */}
                    </div>
                </div>
            </div>
            {/* skills display */}
            <div className="skillview">
                <div className="skillbox" id="projects">
                    {/* symbol */}
                    <div className="divsymb1">
                        <div className="symbolcont">
                        <i class="ri-code-line"></i>
                        </div>
                        <h4>Total Projects</h4>
                        <p id="symbolsent">source are avilable in github and hear </p>
                    </div>
                    <div className="divsymb2">
                        10 <br /><br /><i class="ri-arrow-right-up-line"></i>
                    </div>
                </div>
                <div className="skillbox" id="cirtificate">
                     {/* symbol */}
                     <div className="divsymb1">
                        <div className="symbolcont">
                        <i class="ri-medal-line"></i>
                        </div>
                        <h4>Certificates</h4>
                        <p id="symbolsent">Professional skills added</p>
                    </div>
                    <div className="divsymb2">
                        5 <br /><br /><i class="ri-arrow-right-up-line"></i>
                    </div>
                </div>
                <div className="skillbox" id="experience">
                     {/* symbol */}
                     <div className="divsymb1">
                        <div className="symbolcont">
                        <i class="ri-global-line"></i>
                        </div>
                        <h4>Years of Experience</h4>
                        <p id="symbolsent">Experience as a student(project)</p>
                    </div>
                    <div className="divsymb2">
                        1 <br /><br /><i class="ri-arrow-right-up-line"></i>
                    </div>
                </div>
            </div>
        </aboutme>
    );
}
export default Aboutme;