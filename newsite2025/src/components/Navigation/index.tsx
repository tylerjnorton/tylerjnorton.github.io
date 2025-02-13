import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link to="/" className="relative font-bold text-2xl">
      {/* Animated blob background */}
      <div className="absolute -inset-2 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-lg opacity-75 animate-pulse" />
      </div>
      {/* Logo text */}
      <span className="relative">TJN</span>
    </Link>
  );
}

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNav = () => setIsOpen(!isOpen);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 backdrop-blur-sm border-b border-black/10 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Logo />
          <button onClick={toggleNav} className="relative">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Overlay Navigation */}
      <div 
        className={`fixed inset-0 bg-black transition-all duration-500 ease-in-out z-50 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="container mx-auto px-4 h-full flex items-center">
          <nav className="w-full">
            <ul className="space-y-8">
              <li>
                <NavLink href="/" onClick={toggleNav}>HOME</NavLink>
              </li>
              <li>
                <NavLink href="/case-study/rocketreach" onClick={toggleNav}>ROCKETREACH</NavLink>
              </li>
              <li>
                <NavLink href="/case-study/unqork" onClick={toggleNav}>UNQORK</NavLink>
              </li>
              <li>
                <NavLink href="mailto:tyler.j.norton@gmail.com" onClick={toggleNav}>CONTACT</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

function NavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) {
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