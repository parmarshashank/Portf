import Link from 'next/link';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <a 
          href="#hero" 
          className="navbar__logo"
          onClick={(e) => handleClick(e, '#hero')}
        >
          SHASHANK
        </a>
        
        <div className="navbar__content">
          <ul className="navbar__menu">
            {[
              ['HOME', '#hero'],
              ['PROFILE', '#profile'],
              ['PROJECTS', '#projects'],
              ['CONTACT', '#contact'],
            ].map(([name, href]) => (
              <li key={name}>
                <a 
                  href={href} 
                  className="navbar__link"
                  onClick={(e) => handleClick(e, href)}
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
          
          <button
            type="button"
            className="navbar__mobile-toggle"
            aria-label="Open menu"
          >
            <Menu />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 