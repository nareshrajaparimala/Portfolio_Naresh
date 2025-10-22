import { useState } from "react";
import './styles/portfolio.css'

const projectsData = [
  {
    id: 1,
    title: "MytechZ.in Platform",
    category: "Full Stack Web Development",
    date: "2024",
    shortDesc: "Complete career guidance platform for students with job portals and resume tools",
    image: "/images/mytechz-project.jpg",
    details: {
      description: "MytechZ.in is a comprehensive platform I founded and developed to guide students through their entire career journey. Built from scratch as both CEO and CTO, this platform integrates multiple career development tools in one seamless experience.",
      keyFeatures: [
        "Job Portal Integration with real-time listings",
        "Interactive Portfolio Builder with templates",
        "AI-powered Resume Creation tool",
        "Government Exam Notification system",
        "Personalized Career Roadmap Generator"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express", "JWT", "Stripe API"],
      challenges: [
        "Integrating multiple third-party APIs",
        "Building scalable user authentication",
        "Creating responsive design for all devices",
        "Implementing real-time notifications"
      ],
      impact: "Helping 500+ students navigate their career paths effectively",
      liveLink: "https://mytechz.in",
      githubLink: "https://github.com/nareshrajaparimala/Job_Application_Website",
      duration: "6 months",
      teamSize: "Solo Project"
    }
  },
  {
    id: 2,
    title: "Amazon ML Challenge Solution",
    category: "Machine Learning",
    date: "January 2025",
    shortDesc: "ML solution that ranked 1048/82,802 teams in Amazon's national hackathon",
    image: "/images/amazon-ml-project.jpg",
    details: {
      description: "Developed a machine learning solution for Amazon ML Challenge 2025 that achieved top 1.3% ranking globally. The project involved solving real-world ML problems using advanced algorithms and data analysis techniques.",
      keyFeatures: [
        "Advanced data preprocessing pipeline",
        "Custom ML algorithm implementation",
        "Real-time prediction system",
        "Performance optimization techniques",
        "Comprehensive model evaluation"
      ],
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "AWS ML"],
      challenges: [
        "Handling large-scale datasets",
        "Feature engineering optimization",
        "Model performance tuning",
        "Time constraint management"
      ],
      impact: "Ranked 1048 out of 82,802 teams worldwide",
      githubLink: "https://github.com/naresh/amazon-ml-challenge",
      duration: "3 days",
      teamSize: "4 members"
    }
  },
  {
    id: 3,
    title: "Portfolio Website",
    category: "Frontend Development",
    date: "2024",
    shortDesc: "Personal portfolio showcasing projects, achievements, and professional journey",
    image: "/images/Portfolio_demo_img.png",
    details: {
      description: "A modern, responsive portfolio website built with React to showcase my professional journey, projects, and achievements. Features interactive animations, detailed project views, and optimized performance.",
      keyFeatures: [
        "Responsive design for all devices",
        "Interactive animations and transitions",
        "Detailed project showcase system",
        "Contact form with validation",
        "SEO optimized structure"
      ],
      technologies: ["React", "CSS3", "JavaScript", "Remix Icons", "Vite"],
      challenges: [
        "Creating smooth animations",
        "Optimizing for mobile devices",
        "Implementing detailed view navigation",
        "Performance optimization"
      ],
      impact: "Professional online presence showcasing technical skills",
      liveLink: "https://naresh-portfolio.com",
      githubLink: "https://github.com/naresh/portfolio",
      duration: "2 months",
      teamSize: "Solo Project"
    }
  },
  {
    id: 4,
    title: "IBM ML Datathon - Smart Loan System",
    category: "Machine Learning",
    date: "2024",
    shortDesc: "Full-stack ML system with React, Node.js, FastAPI, and MongoDB for intelligent loan decisions",
    image: "/images/ibm-datathon.jpg",
    details: {
      description: "Developed a comprehensive Smart Loan System for IBM ML Datathon featuring microservices architecture with React frontend, Node.js backend, FastAPI ML service, and MongoDB. The system provides real-time loan approval predictions using Random Forest ML model trained on 17 features.",
      keyFeatures: [
        "Microservices architecture with 4 separate services",
        "JWT Authentication with bcrypt security",
        "Real-time ML predictions with confidence scores",
        "Risk assessment visualization (0-1 probability scale)",
        "Complete loan application management system"
      ],
      technologies: ["React", "Node.js", "FastAPI", "scikit-learn", "MongoDB", "JWT", "Vite"],
      challenges: [
        "Integrating multiple microservices seamlessly",
        "Real-time ML prediction pipeline",
        "Secure authentication across services",
        "Training ML model on 17-feature dataset"
      ],
      impact: "Built complete end-to-end ML system for intelligent loan decision making",
      githubLink: "https://github.com/nareshrajaparimala/IBM_ML_Datathon",
      duration: "1 month",
      teamSize: "Solo Project"
    }
  
  
  }
];

function Portfolio({portfolioRef}){
    const [activeTab, setActiveTab] = useState('projects');
    const [selectedProject, setSelectedProject] = useState(null);

    const openProjectDetails = (project) => {
        setSelectedProject(project);
    };

    const closeProjectDetails = () => {
        setSelectedProject(null);
    };

    if (selectedProject) {
        return (
            <div className="project-detail-page">
                <div className="detail-header">
                    <button className="back-btn" onClick={closeProjectDetails}>
                        <i className="ri-arrow-left-line"></i> Back
                    </button>
                    <button className="home-btn" onClick={closeProjectDetails}>
                        <i className="ri-home-line"></i> Home
                    </button>
                </div>
                
                <div className="detail-content">
                    <div className="detail-hero">
                        <img src={selectedProject.image} alt={selectedProject.title} />
                        <div className="detail-info">
                            <span className="detail-category">{selectedProject.category}</span>
                            <h1>{selectedProject.title}</h1>
                            <p className="detail-date">{selectedProject.date}</p>
                        </div>
                    </div>

                    <div className="detail-body">
                        <section className="description-section">
                            <h2>Project Overview</h2>
                            <p>{selectedProject.details.description}</p>
                        </section>

                        <section className="features-section">
                            <h2>Key Features</h2>
                            <ul>
                                {selectedProject.details.keyFeatures.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        </section>

                        <section className="tech-section">
                            <h2>Technologies Used</h2>
                            <div className="tech-tags">
                                {selectedProject.details.technologies.map((tech, index) => (
                                    <span key={index} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                        </section>

                        <section className="challenges-section">
                            <h2>Challenges & Solutions</h2>
                            <ul>
                                {selectedProject.details.challenges.map((challenge, index) => (
                                    <li key={index}>{challenge}</li>
                                ))}
                            </ul>
                        </section>

                        <section className="project-info-section">
                            <h2>Project Information</h2>
                            <div className="project-info-grid">
                                <div className="info-item">
                                    <i className="ri-time-line"></i>
                                    <span>Duration: {selectedProject.details.duration}</span>
                                </div>
                                <div className="info-item">
                                    <i className="ri-team-line"></i>
                                    <span>Team: {selectedProject.details.teamSize}</span>
                                </div>
                            </div>
                        </section>

                        <section className="impact-section">
                            <h2>Impact & Results</h2>
                            <p>{selectedProject.details.impact}</p>
                        </section>

                        <section className="project-links-section">
                            <h2>Project Links</h2>
                            <div className="project-links">
                                {selectedProject.details.liveLink && (
                                    <a href={selectedProject.details.liveLink} target="_blank" rel="noopener noreferrer" className="project-link live-link">
                                        <i className="ri-external-link-line"></i>
                                        Live Demo
                                    </a>
                                )}
                                {selectedProject.details.githubLink && (
                                    <a href={selectedProject.details.githubLink} target="_blank" rel="noopener noreferrer" className="project-link github-link">
                                        <i className="ri-github-line"></i>
                                        View Code
                                    </a>
                                )}
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <portfolio ref={portfolioRef}>
            <div className="portheaddiv">
                <h1 id="portheadsent">Portfolio Showcase</h1>
                <p id="portthough">Explore my journey through projects, certificates and technical expertise.</p>
            </div>

            <div className="portdivider">
                <div className={`projectsbut boxdez ${activeTab === 'projects' ? 'active' : ''}`} onClick={() => setActiveTab('projects')}>
                    <i className="ri-code-line"></i>
                    Projects
                </div>
                <div className={`certificates boxdez ${activeTab === 'certificates' ? 'active' : ''}`} onClick={() => setActiveTab('certificates')}>
                    <i className="ri-medal-line"></i>
                    Certificates
                </div>
                <div className={`techStack boxdez ${activeTab === 'techstack' ? 'active' : ''}`} onClick={() => setActiveTab('techstack')}>
                    <i className="ri-color-filter-ai-fill"></i>
                    Tech Stack
                </div>
            </div>

            {activeTab === 'projects' && (
                <div className="projects-grid">
                    {projectsData.map((project, index) => (
                        <div 
                            key={project.id} 
                            className="project-card"
                            style={{ animationDelay: `${index * 0.1}s` }}
                            onClick={() => openProjectDetails(project)}
                        >
                            <div className="card-image">
                                <img src={project.image} alt={project.title} />
                                <div className="card-overlay">
                                    <i className="ri-eye-line"></i>
                                </div>
                            </div>
                            <div className="card-content">
                                <span className="card-category">{project.category}</span>
                                <h3>{project.title}</h3>
                                <p>{project.shortDesc}</p>
                                <div className="card-footer">
                                    <span className="card-date">{project.date}</span>
                                    <i className="ri-arrow-right-line"></i>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {activeTab === 'certificates' && (
                <div className="certificatesection">
                    <div className="containercertificate">
                        <div className="certificateimage img11"></div>
                    </div>
                    <div className="containercertificate">
                        <div className="certificateimage img22"></div>
                    </div>
                    <div className="containercertificate">
                        <div className="certificateimage img33"></div>
                    </div>
                    <div className="containercertificate">
                        <div className="certificateimage img44"></div>
                    </div>
                </div>
            )}

            {activeTab === 'techstack' && (
                <div className="techstackdiv">
                    <div className="techstacksub">
                        <div className="logoskill img1"></div>
                        <h3>JavaScript</h3>
                    </div>
                    <div className="techstacksub">
                        <div className="logoskill img2"></div>
                        <h3>Node.js</h3>
                    </div>
                    <div className="techstacksub">
                        <div className="logoskill img3"></div>
                        <h3>React</h3>
                    </div>
                    <div className="techstacksub">
                        <div className="logoskill img4"></div>
                        <h3>Express</h3>
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
                        <h3>PostgreSQL</h3>
                    </div>
                    <div className="techstacksub">
                        <div className="logoskill img8"></div>
                        <h3>C</h3>
                    </div>
                </div>
            )}
        </portfolio>
    );
}
export default Portfolio;