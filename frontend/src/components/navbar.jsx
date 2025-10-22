import {useState} from "react";
import "./styles/navbar.css";

function Navbar({scrollToPageone, scrollToAbout, scrollToPortfolio, scrollToAchievements, scrollToContact}){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const handleNavClick = (scrollFunction) => {
        scrollFunction();
        setIsMenuOpen(false);
    }

    return(
        <nav className="navbar">
            <div className="nav-brand">Naresh.R</div>
            
            <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                <li className="nav-item">
                    <a className="nav-link" onClick={() => handleNavClick(scrollToPageone)}>Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" onClick={() => handleNavClick(scrollToAbout)}>About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" onClick={() => handleNavClick(scrollToPortfolio)}>Portfolio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" onClick={() => handleNavClick(scrollToAchievements)}>Achievements</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" onClick={() => handleNavClick(scrollToContact)}>Contact</a>
                </li>
            </ul>
            
            <div className="hamburger" onClick={toggleMenu}>
                <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
                <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
                <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
            </div>
        </nav>
    );
}
export default Navbar;