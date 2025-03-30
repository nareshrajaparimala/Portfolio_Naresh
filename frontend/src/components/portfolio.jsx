import { useRef} from "react";
import './styles/portfolio.css'
function Portfolio(){
    // project handle
    const projectdiv=useRef(null);
    const certicatediv=useRef(null);
    const techdiv=useRef(null);
    // button
    const projectbuthandle=useRef(null);
    const certificatebuthandle=useRef(null);
    const techbuthandle=useRef(null);

    const counthead=1;
    // hover function
    const handleMouseEnter1 = () => {
        projectbuthandle.current.style.background="linear-gradient(to right, purple, darkblue)";
    }
    const handleMouseLeave =() =>{
        if( projectdiv.current.style.display == "none"){
            projectbuthandle.current.style.background="none";
        }
        if( certicatediv.current.style.display == "none"){
            certificatebuthandle.current.style.background="none";
        }
        if( techdiv.current.style.display == "none"){
            techbuthandle.current.style.background="none";
        }
        if( projectdiv.current.style.display == "flex"){
            projectbuthandle.current.style.background="flex";
        }
        if( certicatediv.current.style.display == "flex"){
            certificatebuthandle.current.style.background="flex";
        }
        if( techdiv.current.style.display == "flex"){
            techbuthandle.current.style.background="flex";
        }
    }
    const handleMouseEnter2 = () => {
        certificatebuthandle.current.style.background="linear-gradient(to right, purple, darkblue)";
        
    }
    const handleMouseEnter3 = () => {
        techbuthandle.current.style.background="linear-gradient(to right, purple, darkblue)";
    }



    const projecthandle =()=>{
        if(projectdiv.current && certicatediv.current && techdiv.current && projectbuthandle.current && certificatebuthandle.current && certificatebuthandle.current){
            projectdiv.current.style.display="flex";
            certicatediv.current.style.display="none";
            techdiv.current.style.display="none";
            // button
            projectbuthandle.current.style.background="linear-gradient(to right, purple, darkblue)";
            certificatebuthandle.current.style.background="transparent";
            techbuthandle.current.style.background="transparent"
            counthead=1;
        }
    }
    const certificatehandle=()=>{
        if(projectdiv.current && certicatediv.current && techdiv.current && projectbuthandle.current && certificatebuthandle.current && certificatebuthandle.current){
            projectdiv.current.style.display="none";
            certicatediv.current.style.display="flex";
            techdiv.current.style.display="none";
            // button
            projectbuthandle.current.style.background="transparent";
            certificatebuthandle.current.style.background="linear-gradient(to right, purple, darkblue)";
            techbuthandle.current.style.background="transparent"
            counthead=2;
        }
    }
    const techhandle=()=>{
        if(projectdiv.current && certicatediv.current && techdiv.current && projectbuthandle.current && certificatebuthandle.current && certificatebuthandle.current){
            projectdiv.current.style.display="none";
            certicatediv.current.style.display="none";
            techdiv.current.style.display="flex";
            // button
            projectbuthandle.current.style.background="transparent";
            certificatebuthandle.current.style.background="transparent";
            techbuthandle.current.style.background="linear-gradient(to right, purple, darkblue)";
            counthead=3;
        }
    }

    return (
        <portfolio>
            <div className="portheaddiv">
                <h1 id="portheadsent">Portfolio Showcase</h1>
                <p id="portthough">Explore my journey through projects, certificates and technical expertise.</p><p id="portthough">Each section  represents a milestone in my continuous learning path.</p>
            </div>
            {/* 3 parts  */}
            <div className="portdivider">
                <div className="projectsbut boxdez" onClick={projecthandle} ref={projectbuthandle} onMouseEnter={handleMouseEnter1}
      onMouseLeave={handleMouseLeave}>
                <i class="ri-code-line"></i>
                    Projects
                </div>
                <div className="certificates boxdez" onClick={certificatehandle} ref={certificatebuthandle} onMouseEnter={handleMouseEnter2}
      onMouseLeave={handleMouseLeave}>
                <i class="ri-medal-line"></i>
                    Certificates
                </div>
                <div className="techStack boxdez" onClick={techhandle} ref={techbuthandle} onMouseEnter={handleMouseEnter3}
      onMouseLeave={handleMouseLeave}>
                <i class="ri-color-filter-ai-fill"></i>
                    Tech Stack
                </div>
            </div>
            {/* all 3 parts handling */}

            {/* start of 1st part projects */}
            <div className="projectsbigdiv" ref={projectdiv}>
                <div className="containerpro">
                    <div className="proimg">
                    </div>
                    <h4>Project Amazon</h4>
                    <p class="paraproject"> This is my first project in msec with a group of 5 members</p>
                    <div className="divdisplay">
                        <div className="livedemo">
                            live demo <i class="ri-share-forward-2-fill"></i>
                        </div>
                        <div className="detailsdiv">
                            Details <i class="ri-arrow-right-line"></i>
                        </div>
                    </div>
                </div>

                {/* pro2 ... */}
                <div className="containerpro">
                    <div className="proimg">
                    </div>
                    <h4>Project Amazon</h4>
                    <p class="paraproject"> This is my first project in msec with a group of 5 members</p>
                    <div className="divdisplay">
                        <div className="livedemo">
                            live demo <i class="ri-share-forward-2-fill"></i>
                        </div>
                        <div className="detailsdiv">
                            Details <i class="ri-arrow-right-line"></i>
                        </div>
                    </div>
                </div>
                <div className="containerpro">
                    <div className="proimg">
                    </div>
                    <h4>Project Amazon</h4>
                    <p class="paraproject"> This is my first project in msec with a group of 5 members</p>
                    <div className="divdisplay">
                        <div className="livedemo">
                            live demo <i class="ri-share-forward-2-fill"></i>
                        </div>
                        <div className="detailsdiv">
                            Details <i class="ri-arrow-right-line"></i>
                        </div>
                    </div>
                </div>
                <div className="containerpro">
                <div className="proimg">
                    </div>
                    <h4>Project Amazon</h4>
                    <p class="paraproject"> This is my first project in msec with a group of 5 members</p>
                    <div className="divdisplay">
                        <div className="livedemo">
                            live demo <i class="ri-share-forward-2-fill"></i>
                        </div>
                        <div className="detailsdiv">
                            Details <i class="ri-arrow-right-line"></i>
                        </div>
                    </div>
                </div>
                <div className="containerpro">
                <div className="proimg">
                    </div>
                    <h4>Project Amazon</h4>
                    <p class="paraproject"> This is my first project in msec with a group of 5 members</p>
                    <div className="divdisplay">
                        <div className="livedemo">
                            live demo <i class="ri-share-forward-2-fill"></i>
                        </div>
                        <div className="detailsdiv">
                            Details <i class="ri-arrow-right-line"></i>
                        </div>
                    </div>
                </div>
                <div className="containerpro">
                <div className="proimg">
                    </div>
                    <h4>Project Amazon</h4>
                    <p class="paraproject"> This is my first project in msec with a group of 5 members</p>
                    <div className="divdisplay">
                        <div className="livedemo">
                            live demo <i class="ri-share-forward-2-fill"></i>
                        </div>
                        <div className="detailsdiv">
                            Details <i class="ri-arrow-right-line"></i>
                        </div>
                    </div>
                </div>
            </div>
            {/* certificates */}
            <div className="certificatesection" ref={certicatediv}>
                {/* certificate-1 */}
                <div className="containercertificate">
                    <div className="certificateimage">
                    </div>
                </div>
                <div className="containercertificate">
                    <div className="certificateimage">
                    </div>
                </div>
                <div className="containercertificate">
                    <div className="certificateimage">
                    </div>
                </div>
                <div className="containercertificate">
                    <div className="certificateimage">
                    </div>
                </div>
                <div className="containercertificate">
                    <div className="certificateimage">
                    </div>
                </div><div className="containercertificate">
                    <div className="certificateimage">
                    </div>
                </div>
            </div>

            {/* tech stack */}
            <div className="techstackdiv" ref={techdiv}>
                <div className="techstacksub">
                    <div className="logoskill img1"></div>
                    <h3>javaScript</h3>
                </div>
                <div className="techstacksub">
                    <div className="logoskill img2"></div>
                    <h3>nodejs</h3>
                </div>
                <div className="techstacksub">
                    <div className="logoskill img3"></div>
                    <h3>React</h3>
                </div>
                <div className="techstacksub">
                    <div className="logoskill img4"></div>
                    <h3>express</h3>
                </div>
                <div className="techstacksub">
                    <div className="logoskill img5"></div>
                    <h3>HTML</h3>
                </div>

                
                <div className="techstacksub">
                    <div className="logoskill img6"></div>
                    <h3>CSS</h3>
                </div>
                <div className="techstacksub">
                    <div className="logoskill img7"></div>
                    <h3>postgreSQL</h3>
                </div>
                <div className="techstacksub">
                    <div className="logoskill img8"></div>
                    <h3>
                        c
                    </h3>
                </div>
            </div>


        </portfolio>
    );
}
export default Portfolio;