import React from "react";
import "./styles/aboutme.css";

function Aboutme({ aboutRef }){
    return(
        <section className="about-section" ref={aboutRef}>
            <div className="about-header">
                <h1 className="about-title">About me</h1>
                <p className="about-subtitle">
                    <i className="ri-bard-fill"></i>
                    Transforming my Ideas into Digital Experience
                    <i className="ri-bard-fill"></i>
                </p>
            </div>
            
            <div className="about-content">
                <div className="about-text">
                    <h2 className="greeting">Hello, I'm</h2>
                    <h2 className="name">Naresh.R</h2>
                    <p className="description">
                        "Passionate about web development, I love building efficient and user-friendly solutions. 
                        Skilled in React, Node.js, and Express, I aim to create seamless digital experiences. 
                        Constantly learning and innovating, I strive to push boundaries in tech."
                    </p>
                    <div className="action-buttons">
                        <button className="btn-primary">
                            Download CV <i className="ri-file-text-fill"></i>
                        </button>
                        <button className="btn-secondary">
                            View Projects <i className="ri-code-line"></i>
                        </button>
                    </div>
                </div>
                
                <div className="about-image">
                    <div className="profile-photo"></div>
                </div>
            </div>
            
            <div className="stats-grid">
                <div className="stat-card">
                    <div className="stat-content">
                        <div className="stat-icon">
                            <i className="ri-code-line"></i>
                        </div>
                        <h4>Total Projects</h4>
                        <p className="stat-description">Source available on GitHub</p>
                    </div>
                    <div className="stat-number">
                        <span className="number">10</span>
                        <i className="ri-arrow-right-up-line"></i>
                    </div>
                </div>
                
                <div className="stat-card">
                    <div className="stat-content">
                        <div className="stat-icon">
                            <i className="ri-medal-line"></i>
                        </div>
                        <h4>Certificates</h4>
                        <p className="stat-description">Professional skills added</p>
                    </div>
                    <div className="stat-number">
                        <span className="number">5</span>
                        <i className="ri-arrow-right-up-line"></i>
                    </div>
                </div>
                
                <div className="stat-card">
                    <div className="stat-content">
                        <div className="stat-icon">
                            <i className="ri-global-line"></i>
                        </div>
                        <h4>Years of Experience</h4>
                        <p className="stat-description">Experience as a student (project)</p>
                    </div>
                    <div className="stat-number">
                        <span className="number">1</span>
                        <i className="ri-arrow-right-up-line"></i>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Aboutme;