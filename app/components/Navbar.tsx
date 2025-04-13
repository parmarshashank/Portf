import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-sm z-50 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-1 flex justify-end">
            <div className="hidden sm:flex items-center space-x-8">
              {[
                ['Home', '#home'],
                ['Profile', '#profile'],
                ['Quests', '#quests'],
                ['Stats', '#stats'],
                ['Evolution', '#evolution'],
                ['Gate', '#contact'],
              ].map(([name, href]) => (
                <Link
                  key={name}
                  href={href}
                  className="nav-link text-sm font-medium tracking-wider"
                >
                  {name}
                </Link>
              ))}
            </div>
            
            {/* Mobile menu button */}
            <div className="sm:hidden">
              <button
                type="button"
                className="text-slate-400 hover:text-white"
                aria-label="Open menu"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 