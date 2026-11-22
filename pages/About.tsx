import React from 'react';
import { portfolioData } from '../data';
import { Briefcase, GraduationCap, Code2, Award, Users, Download } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">Hakkımda</h1>
        <div className="h-1 w-20 bg-primary rounded-full mb-6"></div>
        <p className="text-lg text-slate-300 leading-relaxed">
          {portfolioData.bio}
        </p>
        {portfolioData.cvUrl && (
          <a
            href={portfolioData.cvUrl}
            download
            className="mt-6 inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-lg font-medium border border-slate-600 transition-colors"
          >
            <Download size={20} aria-hidden="true" />
            CV'yi İndir (PDF)
          </a>
        )}
      </div>

      {/* Experience Section */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-primary/20 p-2 rounded-lg">
            <Briefcase className="text-primary" size={24} />
          </div>
          <h2 className="text-2xl font-bold text-white">İş Deneyimi</h2>
        </div>
        <div className="space-y-8">
          {portfolioData.experience.map((exp) => (
            <div key={exp.id} className="relative pl-8 border-l-2 border-slate-700">
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-primary border-2 border-slate-900" aria-hidden="true"></div>
              <h3 className="text-xl font-bold text-white">{exp.role}</h3>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <span className="text-primary font-medium">{exp.company}</span>
                <span className="text-sm text-slate-500 bg-slate-800/50 px-2 py-0.5 rounded">{exp.period}</span>
              </div>
              <p className="text-slate-400 whitespace-pre-line">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Education Section */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-primary/20 p-2 rounded-lg">
            <GraduationCap className="text-primary" size={24} />
          </div>
          <h2 className="text-2xl font-bold text-white">Eğitim</h2>
        </div>
        <div className="space-y-6">
          {portfolioData.education.map((edu) => (
            <div key={edu.id} className="bg-slate-800/30 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
              <p className="text-primary mt-1">{edu.school}</p>
              <p className="text-sm text-slate-500 mt-1">{edu.period}</p>
              {edu.description && (
                <p className="text-slate-400 mt-3">{edu.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Certificates Section */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-primary/20 p-2 rounded-lg">
            <Award className="text-primary" size={24} />
          </div>
          <h2 className="text-2xl font-bold text-white">Sertifikalar</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {portfolioData.certificates.map((cert) => (
            <div key={cert.id} className="bg-slate-800/30 p-4 rounded-xl border border-slate-700 flex items-start gap-3">
              <Award className="text-accent shrink-0 mt-1" size={18} />
              <div>
                <h4 className="text-white font-medium">{cert.title}</h4>
                <p className="text-sm text-slate-500">{cert.issuer} {cert.date && `• ${cert.date}`}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* References Section */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-primary/20 p-2 rounded-lg">
            <Users className="text-primary" size={24} />
          </div>
          <h2 className="text-2xl font-bold text-white">Referanslar</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {portfolioData.references.map((ref) => (
            <div key={ref.id} className="bg-slate-800/30 p-6 rounded-xl border border-slate-700">
              <h3 className="text-lg font-bold text-white">{ref.name}</h3>
              <p className="text-primary text-sm">{ref.role} @ {ref.company}</p>
              <div className="mt-4 space-y-1 text-sm text-slate-400">
                {ref.email && <p>Email: {ref.email}</p>}
                {ref.phone && <p>Tel: {ref.phone}</p>}
                {ref.location && <p>Konum: {ref.location}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Section */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-primary/20 p-2 rounded-lg">
            <Code2 className="text-primary" size={24} />
          </div>
          <h2 className="text-2xl font-bold text-white">Yetenekler</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
          {portfolioData.skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-slate-200 font-medium">{skill.name}</span>
                  <span className="text-[10px] uppercase tracking-wider text-slate-500 bg-slate-800 px-1.5 py-0.5 rounded">{skill.category}</span>
                </div>
                <span className="text-slate-500 text-sm">{skill.level}%</span>
              </div>
              <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default About;
