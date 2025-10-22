import { useState } from "react";
import "./styles/achievements.css";

const achievementsData = [
  {
    id: 1,
    title: "Founder & CEO of MytechZ.in",
    category: "Entrepreneurship",
    date: "2024 - Present",
    shortDesc: "Founded startup guiding students with roadmaps, job portals, and career development",
    image: "/images/mytechz-logo.jpg",
    details: {
      description: "Founded MytechZ.in, a comprehensive platform dedicated to guiding students from start to finish in their career journey. As both CEO and CTO, I built and manage this website that serves as a one-stop solution for student career development.",
      keyTakeaways: [
        "Built complete platform from scratch",
        "Serves as CEO and CTO simultaneously", 
        "Guides students end-to-end career roadmaps",
        "Integrated multiple services in one platform"
      ],
      features: [
        "Job Portal Integration",
        "Portfolio Creation Tools", 
        "Resume Builder",
        "Government Exam Notifications",
        "Career Roadmap Guidance"
      ],
      impact: "Helping hundreds of students navigate their career paths effectively",
      projectLink: "https://mytechz.in",
      technologies: ["React", "Node.js", "MongoDB", "Express"]
    }
  },
  {
    id: 2,
    title: "Amazon ML Challenge 2025",
    category: "Hackathon",
    date: "January 2025",
    shortDesc: "Ranked 1048 out of 82,802 teams worldwide in Amazon's national ML hackathon",
    image: "/images/amazon-ml.jpg",
    details: {
      description: "Participated in Amazon ML Challenge 2025, a national-level online hackathon. After 3 days of continuous effort, dedication, and teamwork, secured an impressive rank of 1048 out of 82,802 teams nationwide.",
      keyTakeaways: [
        "Gained hands-on experience in real-world ML problems",
        "Strengthened teamwork and collaboration skills",
        "Enhanced knowledge in Python and ML algorithms", 
        "Practical exposure to Amazon ML technologies"
      ],
      achievements: [
        "Rank 1048 out of 82,802 teams",
        "National level competition",
        "3 days intensive hackathon",
        "Real-world ML problem solving"
      ],
      impact: "Top 1.3% performance among global participants",
      technologies: ["Python", "Machine Learning", "Data Analysis", "AWS ML"],
      teamSize: "Team of 4 members"
    }
  },
  {
    id: 3,
    title: "MSEC Competition Winner",
    category: "Competitions",
    date: "2024",
    shortDesc: "Multiple wins: 1st in Bug Bounty, 2nd in Algocode, 1st in Poster Making",
    image: "/images/msec-competition.jpg",
    details: {
      description: "Achieved multiple victories at MSEC competitions, demonstrating versatility across different technical and creative domains. Successfully organized and hosted major college events as Chef Host & Event Manager.",
      keyTakeaways: [
        "Excellence in cybersecurity (Bug Bounty)",
        "Strong algorithmic problem-solving skills",
        "Creative design and presentation abilities",
        "Leadership and event management experience"
      ],
      achievements: [
        "1st Place - Bug Bounty (50 participants)",
        "2nd Place - Algocode (50 participants)", 
        "1st Place - Poster Making (9 teams)",
        "Event Manager - Farewell & Project Exhibition"
      ],
      impact: "Demonstrated technical excellence and leadership capabilities",
      skills: ["Cybersecurity", "Algorithm Design", "Graphic Design", "Event Management"],
      eventManagement: ["Farewell Event", "Project Exhibition"]
    }
  },
  {
    id: 4,
    title: "Team RRD Principal Meeting",
    category: "Leadership",
    date: "2024",
    shortDesc: "Milestone meeting with Principal after 3 years of dedication at MSEC",
    image: "/images/team-rrd-meeting.jpg",
    details: {
      description: "One of the most memorable moments in our journey. After 3 years of hard work, dedication, and countless hours of effort at MSEC, our team RRD had the privilege to sit down with our respected Principal Sir. This meeting wasn't just a discussion – it was a milestone where we expressed our future goals, vision, and passion.",
      keyTakeaways: [
        "Expressed future goals and vision to leadership",
        "Demonstrated 3 years of consistent hard work",
        "Strengthened team collaboration and unity",
        "Gained valuable mentorship and guidance"
      ],
      achievements: [
        "3 years of dedicated effort at MSEC",
        "Team RRD leadership recognition",
        "Principal meeting milestone",
        "Future vision presentation"
      ],
      impact: "A turning point in life history that motivates to aim higher and work smarter",
      teamDetails: {
        teamName: "Team RRD 🚀",
        duration: "3 Years",
        institution: "MSEC"
      },
      hashtags: ["#TeamRRD", "#MSEC", "#FutureGoals", "#Milestone"]
    }
  },
  {
    id: 5,
    title: "IBM ML Datathon Participant",
    category: "Machine Learning Competition",
    date: "2024",
    shortDesc: "Built Smart Loan System with microservices architecture and ML integration",
    image: "/images/ibm-datathon.jpg",
    details: {
      description: "Participated in IBM ML Datathon and developed a comprehensive Smart Loan System featuring microservices architecture. Built a full-stack application with React frontend, Node.js backend, FastAPI ML service, and MongoDB for intelligent loan approval predictions using Random Forest model.",
      keyTakeaways: [
        "Mastered microservices architecture design",
        "Implemented real-time ML prediction pipeline",
        "Built secure JWT authentication system",
        "Gained experience with FastAPI and scikit-learn"
      ],
      achievements: [
        "Complete microservices system (4 services)",
        "Real-time ML predictions with 85% confidence",
        "17-feature Random Forest model training",
        "Full-stack integration with security"
      ],
      impact: "Demonstrated ability to build enterprise-level ML systems with modern architecture",
      technologies: ["React", "Node.js", "FastAPI", "scikit-learn", "MongoDB", "JWT"],
      projectLink: "https://github.com/nareshrajaparimala/IBM_ML_Datathon"
    }
  },
  {
    id: 6,
    title: "Industry Meetups & Workshops",
    category: "Professional Development",
    date: "2024 - Present",
    shortDesc: "Attended exclusive meetups and workshops at Amazon, RedHat, and other tech giants",
    image: "/images/meetups.jpg",
    details: {
      description: "Actively participated in industry meetups and workshops hosted by leading technology companies including Amazon and RedHat. These experiences provided valuable insights into industry trends and networking opportunities.",
      keyTakeaways: [
        "Direct exposure to industry best practices",
        "Networking with industry professionals",
        "Latest technology trends and innovations",
        "Career guidance from industry experts"
      ],
      companies: [
        "Amazon Web Services",
        "RedHat Technologies",
        "Various Tech Startups",
        "Industry Conferences"
      ],
      impact: "Enhanced industry knowledge and professional network",
      skills: ["Networking", "Industry Awareness", "Professional Communication"],
      workshops: ["Cloud Computing", "Open Source Technologies", "Career Development"]
    }
  }
];

function Achievements({ achievementsRef }) {
  const [selectedAchievement, setSelectedAchievement] = useState(null);

  const openDetails = (achievement) => {
    setSelectedAchievement(achievement);
  };

  const closeDetails = () => {
    setSelectedAchievement(null);
  };

  if (selectedAchievement) {
    return (
      <div className="achievement-detail-page">
        <div className="detail-header">
          <button className="back-btn" onClick={closeDetails}>
            <i className="ri-arrow-left-line"></i> Back
          </button>
          <button className="home-btn" onClick={closeDetails}>
            <i className="ri-home-line"></i> Home
          </button>
        </div>
        
        <div className="detail-content">
          <div className="detail-hero">
            <img src={selectedAchievement.image} alt={selectedAchievement.title} />
            <div className="detail-info">
              <span className="detail-category">{selectedAchievement.category}</span>
              <h1>{selectedAchievement.title}</h1>
              <p className="detail-date">{selectedAchievement.date}</p>
            </div>
          </div>

          <div className="detail-body">
            <section className="description-section">
              <h2>Overview</h2>
              <p>{selectedAchievement.details.description}</p>
            </section>

            <section className="takeaways-section">
              <h2>Key Takeaways</h2>
              <ul>
                {selectedAchievement.details.keyTakeaways.map((takeaway, index) => (
                  <li key={index}>{takeaway}</li>
                ))}
              </ul>
            </section>

            {selectedAchievement.details.achievements && (
              <section className="achievements-section">
                <h2>Achievements</h2>
                <div className="achievement-grid">
                  {selectedAchievement.details.achievements.map((achievement, index) => (
                    <div key={index} className="achievement-item">
                      <i className="ri-trophy-line"></i>
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {selectedAchievement.details.technologies && (
              <section className="tech-section">
                <h2>Technologies Used</h2>
                <div className="tech-tags">
                  {selectedAchievement.details.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </section>
            )}

            <section className="impact-section">
              <h2>Impact</h2>
              <p>{selectedAchievement.details.impact}</p>
            </section>

            {selectedAchievement.details.teamDetails && (
              <section className="team-section">
                <h2>Team Details</h2>
                <div className="team-info">
                  <div className="team-item">
                    <i className="ri-team-line"></i>
                    <span>{selectedAchievement.details.teamDetails.teamName}</span>
                  </div>
                  <div className="team-item">
                    <i className="ri-time-line"></i>
                    <span>{selectedAchievement.details.teamDetails.duration}</span>
                  </div>
                  <div className="team-item">
                    <i className="ri-building-line"></i>
                    <span>{selectedAchievement.details.teamDetails.institution}</span>
                  </div>
                </div>
              </section>
            )}

            {selectedAchievement.details.hashtags && (
              <section className="hashtags-section">
                <h2>Tags</h2>
                <div className="hashtags">
                  {selectedAchievement.details.hashtags.map((tag, index) => (
                    <span key={index} className="hashtag">{tag}</span>
                  ))}
                </div>
              </section>
            )}

            {selectedAchievement.details.projectLink && (
              <section className="project-section">
                <h2>View Project</h2>
                <a href={selectedAchievement.details.projectLink} target="_blank" rel="noopener noreferrer" className="project-link">
                  <i className="ri-external-link-line"></i>
                  Visit Project
                </a>
              </section>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="achievements-section" ref={achievementsRef}>
      <div className="achievements-header">
        <h1>My Achievements</h1>
        <p>Milestones that shaped my journey</p>
      </div>

      <div className="achievements-grid">
        {achievementsData.map((achievement, index) => (
          <div 
            key={achievement.id} 
            className="achievement-card"
            style={{ animationDelay: `${index * 0.1}s` }}
            onClick={() => openDetails(achievement)}
          >
            <div className="card-image">
              <img src={achievement.image} alt={achievement.title} />
              <div className="card-overlay">
                <i className="ri-eye-line"></i>
              </div>
            </div>
            <div className="card-content">
              <span className="card-category">{achievement.category}</span>
              <h3>{achievement.title}</h3>
              <p>{achievement.shortDesc}</p>
              <div className="card-footer">
                <span className="card-date">{achievement.date}</span>
                <i className="ri-arrow-right-line"></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Achievements;