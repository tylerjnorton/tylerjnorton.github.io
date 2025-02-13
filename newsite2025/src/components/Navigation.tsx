import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

function AnimatedLogo() {
  return (
    <Link to="/" className="relative font-bold text-2xl">
      <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-x bg-clip-text text-transparent">TJN</span>
      <span className="absolute inset-0 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 animate-gradient-y bg-clip-text text-transparent mix-blend-difference">TJN</span>
      <span className="opacity-0">TJN</span>
    </Link>
  );
}

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => setIsOpen(!isOpen);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-white border-b border-black z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <AnimatedLogo />
          <button onClick={toggleNav} className="z-50 relative">
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </header>

      {/* Overlay Navigation */}
      <div 
        className={`fixed inset-0 bg-black transition-transform duration-500 ease-in-out z-40 ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="container mx-auto px-4 h-full flex items-center">
          <nav className="w-full">
            <ul className="space-y-8">
              <li>
                <NavLink href="/" onClick={toggleNav}>
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink href="/case-study/rocketreach" onClick={toggleNav}>
                  ROCKETREACH
                </NavLink>
              </li>
              <li>
                <NavLink href="/case-study/unqork" onClick={toggleNav}>
                  UNQORK
                </NavLink>
              </li>
              <li>
                <NavLink href="mailto:tyler.j.norton@gmail.com" onClick={toggleNav}>
                  CONTACT
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

function NavLink({ 
  href, 
  children, 
  onClick 
}: { 
  href: string; 
  children: React.ReactNode; 
  onClick: () => void;
}) {
  const isExternal = href.startsWith('mailto:') || href.startsWith('http');
  const Component = isExternal ? 'a' : Link;
  const props = isExternal ? { href } : { to: href };

  return (
    <Component
      {...props}
      onClick={onClick}
      className="group relative block text-6xl md:text-8xl font-bold text-white overflow-hidden"
    >
      <span className="block transition-transform duration-300 group-hover:-translate-y-full">
        {children}
      </span>
      <span className="absolute inset-0 block translate-y-full transition-transform duration-300 text-yellow-400 group-hover:translate-y-0">
        {children}
      </span>
    </Component>
  );
}

export default Navigation;