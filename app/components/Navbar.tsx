import Link from 'next/link';
import { Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <Link href="#home" className="navbar__logo">
          SHASHANK
        </Link>
        
        <div className="navbar__content">
          <ul className="navbar__menu">
            {[
              ['HOME', '#home'],
              ['PROFILE', '#profile'],
              ['QUESTS', '#quests'],
              ['STATS', '#stats'],
              ['EVOLUTION', '#evolution'],
              ['GATE', '#contact'],
            ].map(([name, href]) => (
              <li key={name}>
                <Link href={href} className="navbar__link">
                  {name}
                </Link>
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