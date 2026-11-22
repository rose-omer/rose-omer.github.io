import React, { useState } from 'react';
import { Menu, X, Code2, Github, Download } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { portfolioData } from '../data';

const navLinks = [
  { name: 'Ana Sayfa', path: '/' },
  { name: 'Hakkımda', path: '/about' },
  { name: 'Projeler', path: '/projects' },
  { name: 'İletişim', path: '/contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Proje detayı da "Projeler" altında sayılır.
  const isActive = (path: string) =>
    location.pathname === path || (path === '/projects' && location.pathname.startsWith('/project/'));

  const linkClass = (path: string, base: string) =>
    `${base} rounded-md font-medium transition-colors ${
      isActive(path) ? 'bg-primary text-white' : 'text-slate-300 hover:bg-slate-700 hover:text-white'
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-secondary/90 backdrop-blur-md border-b border-slate-700/80" aria-label="Ana menü">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 text-primary hover:text-accent transition-colors rounded-md">
            <Code2 className="h-8 w-8" aria-hidden="true" />
            <span className="font-bold text-xl text-white">OmerKSoft</span>
          </Link>

          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                aria-current={isActive(link.path) ? 'page' : undefined}
                className={linkClass(link.path, 'px-3 py-2 text-sm')}
              >
                {link.name}
              </Link>
            ))}
            <a
              href={portfolioData.github}
              target="_blank"
              rel="noreferrer"
              className="ml-2 flex items-center gap-1.5 text-slate-300 hover:bg-slate-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              <Github size={16} aria-hidden="true" />
              GitHub
            </a>
            {portfolioData.cvUrl && (
              <a
                href={portfolioData.cvUrl}
                download
                className="flex items-center gap-1.5 bg-slate-700 hover:bg-slate-600 text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                <Download size={16} aria-hidden="true" />
                CV İndir
              </a>
            )}
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              onClick={() => setIsOpen((open) => !open)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? 'Menüyü kapat' : 'Menüyü aç'}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-700"
            >
              {isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div id="mobile-menu" className="md:hidden bg-secondary border-b border-slate-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                aria-current={isActive(link.path) ? 'page' : undefined}
                className={linkClass(link.path, 'block px-3 py-2 text-base')}
              >
                {link.name}
              </Link>
            ))}
            <a
              href={portfolioData.github}
              target="_blank"
              rel="noreferrer"
              className="flex w-full items-center gap-2 mt-4 bg-slate-700 hover:bg-slate-600 text-white px-3 py-2 rounded-md text-base font-medium"
            >
              <Github size={18} aria-hidden="true" />
              GitHub
            </a>
            {portfolioData.cvUrl && (
              <a
                href={portfolioData.cvUrl}
                download
                className="flex w-full items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-3 py-2 rounded-md text-base font-medium"
              >
                <Download size={18} aria-hidden="true" />
                CV İndir
              </a>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
