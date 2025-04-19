import { FiGithub, FiMail, FiCode } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__info">
          <div className="footer__brand">
            <FiCode className="footer__icon" />
            <span>Shashank Parmar</span>
          </div>
          <p className="footer__text">Building digital experiences with code</p>
        </div>
        
        <div className="footer__links">
          <a 
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="footer__link"
          >
            <FiGithub />
            <span>GitHub</span>
          </a>
          <a 
            href="mailto:your.email@example.com" 
            className="footer__link"
          >
            <FiMail />
            <span>Email</span>
          </a>
        </div>
      </div>
      
      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} Shashank Parmar. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 