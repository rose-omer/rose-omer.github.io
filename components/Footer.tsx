import React from 'react';
import { Github, Linkedin, Mail, BookOpen } from 'lucide-react';
import { portfolioData } from '../data';

const Footer: React.FC = () => {
  const links = [
    { href: portfolioData.github, label: 'GitHub', icon: Github, external: true },
    { href: portfolioData.linkedin, label: 'LinkedIn', icon: Linkedin, external: true },
    ...(portfolioData.medium ? [{ href: portfolioData.medium, label: 'Medium', icon: BookOpen, external: true }] : []),
    { href: `mailto:${portfolioData.email}`, label: 'E-posta', icon: Mail, external: false },
  ];

  return (
    <footer className="bg-secondary border-t border-slate-700 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-400 text-sm">
          © {new Date().getFullYear()} {portfolioData.name}
        </p>
        <ul className="flex gap-6">
          {links.map(({ href, label, icon: Icon, external }) => (
            <li key={label}>
              <a
                href={href}
                aria-label={label}
                {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Icon size={20} aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
