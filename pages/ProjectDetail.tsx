import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { portfolioData } from '../data';
import { ArrowLeft, Github, ExternalLink, CheckCircle2 } from 'lucide-react';
import ProjectCover from '../components/ProjectCover';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = portfolioData.projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-3xl font-bold text-white mb-4">Proje Bulunamadı</h2>
        <p className="text-slate-400 mb-8">Aradığınız proje mevcut değil veya kaldırılmış olabilir.</p>
        <Link to="/projects" className="bg-primary px-6 py-3 rounded-lg text-white font-medium hover:bg-indigo-600 transition-colors">
          Projelere Dön
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link
        to="/projects"
        className="inline-flex items-center text-slate-400 hover:text-white mb-8 transition-colors group"
      >
        <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" size={20} aria-hidden="true" />
        Projelere Dön
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column: Image & Links */}
        <div className="space-y-8">
          <ProjectCover project={project} className="rounded-2xl border border-slate-700 shadow-2xl aspect-[16/10]" />

          
          <div className="flex gap-4">
             {project.githubUrl && (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noreferrer"
                className="flex-1 bg-slate-800 hover:bg-slate-700 text-white py-3 px-4 rounded-xl border border-slate-600 flex items-center justify-center gap-2 font-medium transition-all"
              >
                <Github size={20} />
                GitHub Repo
              </a>
             )}
             {project.liveUrl && (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noreferrer"
                className="flex-1 bg-primary hover:bg-indigo-600 text-white py-3 px-4 rounded-xl flex items-center justify-center gap-2 font-medium transition-all shadow-lg shadow-indigo-500/20"
              >
                <ExternalLink size={20} />
                Canlı Demo
              </a>
             )}
          </div>
        </div>

        {/* Right Column: Content */}
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-accent">{project.category}</span>
          <h1 className="text-4xl font-bold text-white mt-2 mb-4">{project.title}</h1>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            {project.shortDescription}
          </p>

          <div className="space-y-8">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <h3 className="text-lg font-bold text-white mb-3">Kullanılan Teknolojiler</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-3 py-1.5 rounded-lg bg-slate-700 text-slate-200 text-sm font-medium border border-slate-600">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Proje Hakkında</h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                {project.fullDescription}
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Öne Çıkan Özellikler</h3>
              <ul className="space-y-3">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-300">
                    <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={20} aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;