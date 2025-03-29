import React from "react";
import './styles/portfolio.css'
function Portfolio(){
    return (
        <portfolio>
            <div className="portheaddiv">
                <h1 id="portheadsent">Portfolio Showcase</h1>
                <p id="portthough">Explore my journey through projects, certificates and technical expertise.</p><p id="portthough">Each section  represents a milestone in my continuous learning path.</p>
            </div>
            {/* 3 parts  */}
            <div className="portdivider">
                <div className="projectsbut boxdez">
                <i class="ri-code-line"></i>
                    Projects
                </div>
                <div className="certificates boxdez">
                <i class="ri-medal-line"></i>
                    Certificates
                </div>
                <div className="techStack boxdez">
                <i class="ri-color-filter-ai-fill"></i>
                    Tech Stack
                </div>
            </div>
            {/* all 3 parts handling */}

            {/* start of 1st part projects */}
            <div className="projectsbigdiv">
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
            <div className="certificatesection">
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
            <div className="techstackdiv">
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
                    <h3>javaScript</h3>
                </div>
            </div>


        </portfolio>
    );
}
export default Portfolio;