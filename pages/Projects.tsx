import React, { useState } from 'react';
import { portfolioData } from '../data';
import { Link } from 'react-router-dom';
import { Github, ExternalLink } from 'lucide-react';
import ProjectCover from '../components/ProjectCover';

const ALL = 'Tümü';
const categories = [ALL, ...Array.from(new Set(portfolioData.projects.map((p) => p.category)))];

const Projects: React.FC = () => {
  const [active, setActive] = useState(ALL);
  const projects = active === ALL ? portfolioData.projects : portfolioData.projects.filter((p) => p.category === active);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Projelerim</h1>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Görüntü işleme, makine öğrenmesi ve web üzerine geliştirdiğim projeler. Hepsinin kodu GitHub'da açık.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-10" role="group" aria-label="Kategoriye göre süz">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setActive(c)}
            aria-pressed={active === c}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
              active === c
                ? 'bg-primary border-primary text-white'
                : 'bg-slate-800 border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <article key={project.id} className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 flex flex-col hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5 group">
            <Link to={`/project/${project.id}`} tabIndex={-1} aria-hidden="true">
              <ProjectCover project={project} className="h-56" imgClassName="transition-transform duration-700 group-hover:scale-105" />
            </Link>

            <div className="p-6 flex-1 flex flex-col">
              <span className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">{project.category}</span>
              <h2 className="text-xl font-bold text-white mb-2">
                <Link to={`/project/${project.id}`} className="hover:text-indigo-300 transition-colors">
                  {project.title}
                </Link>
              </h2>
              <p className="text-slate-400 mb-4 flex-1 line-clamp-3">
                {project.shortDescription}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.slice(0, 4).map((tech) => (
                  <span key={tech} className="text-xs font-medium px-2 py-1 rounded bg-slate-700/50 text-slate-300 border border-slate-600">
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="text-xs font-medium px-2 py-1 rounded bg-slate-700/50 text-slate-300 border border-slate-600">+{project.technologies.length - 4}</span>
                )}
              </div>

              <div className="mt-auto flex items-center justify-between border-t border-slate-700 pt-4">
                <div className="flex gap-4">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label={`${project.title} GitHub kodu`}>
                      <Github size={20} aria-hidden="true" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label={`${project.title} canlı demo`}>
                      <ExternalLink size={20} aria-hidden="true" />
                    </a>
                  )}
                </div>
                <Link to={`/project/${project.id}`} className="text-indigo-300 hover:text-accent text-sm font-semibold" aria-label={`${project.title} projesini incele`}>
                  İncele &rarr;
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Projects;
