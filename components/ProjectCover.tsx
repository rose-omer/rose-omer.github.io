import React from 'react';
import { Eye } from 'lucide-react';
import { Project } from '../types';

interface ProjectCoverProps {
  project: Project;
  className?: string;
  imgClassName?: string;
}

// Proje görseli; görsel yoksa başlıklı, sade bir kapak çizer.
const ProjectCover: React.FC<ProjectCoverProps> = ({ project, className = '', imgClassName = '' }) => {
  if (project.imageUrl) {
    return (
      <div className={`overflow-hidden bg-slate-950 ${className}`}>
        <img
          src={project.imageUrl}
          alt={`${project.title} ekran görüntüsü`}
          loading="lazy"
          className={`w-full h-full object-cover object-top ${imgClassName}`}
        />
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-indigo-950 via-slate-900 to-sky-950 ${className}`}
    >
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:32px_32px]" aria-hidden="true"></div>
      <div className="relative w-16 h-16 rounded-2xl bg-primary/15 border border-primary/30 flex items-center justify-center">
        <Eye className="text-accent" size={32} aria-hidden="true" />
      </div>
      <span className="relative text-slate-200 font-semibold tracking-tight">{project.title}</span>
    </div>
  );
};

export default ProjectCover;
