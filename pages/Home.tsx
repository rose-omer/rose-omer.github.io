import React from 'react';
import { ArrowRight, Database, Download, Github, Layout, Linkedin, ScanEye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../data';
import ProjectCover from '../components/ProjectCover';

const focusAreas = [
  {
    icon: ScanEye,
    color: 'text-sky-400',
    bg: 'bg-sky-500/10',
    title: 'Görüntü İşleme ve ML',
    text: 'OpenCV, YOLO ve PyTorch ile algılama, sınıflandırma ve açıklanabilir model hatları kuruyorum.',
  },
  {
    icon: Database,
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    title: 'Backend ve API',
    text: 'FastAPI, Flask ve Laravel ile testli, hız sınırı ve kimlik doğrulaması olan servisler yazıyorum.',
  },
  {
    icon: Layout,
    color: 'text-violet-400',
    bg: 'bg-violet-500/10',
    title: 'Web Arayüzü',
    text: 'React ve Next.js ile klavye ve ekran okuyucuyla da kullanılabilen arayüzler geliştiriyorum.',
  },
];

const principles = [
  {
    dot: 'bg-primary',
    ring: 'bg-primary/20',
    title: 'Ölçülebilir sonuç',
    text: 'Model sonuçlarını doğru test kümesinde ölçüyor, sınırlarını açıkça yazıyorum.',
  },
  {
    dot: 'bg-accent',
    ring: 'bg-accent/20',
    title: 'Testli ve belgeli kod',
    text: 'Projelerimde CI, otomatik test ve kurulum adımlarını anlatan README bulunur.',
  },
  {
    dot: 'bg-emerald-500',
    ring: 'bg-emerald-500/20',
    title: 'Kullanıcıya saygı',
    text: 'Onay almadan işlem yapmayan, erişilebilir ve gizliliği koruyan uygulamalar tasarlıyorum.',
  },
];

const Home: React.FC = () => {
  const stats = [
    { value: String(portfolioData.projects.length), label: 'Açık Kaynak Proje', color: 'text-primary' },
    { value: String(portfolioData.experience.length), label: 'İş Deneyimi', color: 'text-accent' },
    { value: String(portfolioData.certificates.length), label: 'Sertifika / Bootcamp', color: 'text-violet-400' },
    { value: '2', label: 'Sahada Çalışan AI Ürünü', color: 'text-orange-400' },
  ];

  return (
    <div className="flex flex-col gap-16 pb-12">
      {/* Hero */}
      <section className="relative min-h-[78vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/25 via-slate-900 to-slate-900" aria-hidden="true"></div>
        <div className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(to_right,#94a3b8_1px,transparent_1px),linear-gradient(to_bottom,#94a3b8_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" aria-hidden="true"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center py-20">
          <div className="mb-6 inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-300 px-4 py-1.5 rounded-full text-sm font-medium border border-emerald-500/20">
            <span className="w-2 h-2 rounded-full bg-emerald-400" aria-hidden="true"></span>
            {portfolioData.role}
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 text-balance">
            Merhaba, ben{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-accent">{portfolioData.name}</span>
          </h1>
          <p className="text-lg md:text-2xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            {portfolioData.tagline}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/projects" className="w-full sm:w-auto px-8 py-3.5 bg-primary hover:bg-indigo-500 text-white rounded-lg font-medium transition-colors shadow-lg shadow-indigo-500/20 flex items-center justify-center gap-2">
              Projelerimi Gör <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link to="/contact" className="w-full sm:w-auto px-8 py-3.5 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 rounded-lg font-medium transition-colors flex items-center justify-center">
              İletişime Geç
            </Link>
          </div>
          <div className="mt-10 flex items-center justify-center gap-6 text-slate-400">
            <a href={portfolioData.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
              <Github size={18} aria-hidden="true" /> GitHub
            </a>
            <a href={portfolioData.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
              <Linkedin size={18} aria-hidden="true" /> LinkedIn
            </a>
            {portfolioData.cvUrl && (
              <a href={portfolioData.cvUrl} download className="flex items-center gap-2 hover:text-white transition-colors">
                <Download size={18} aria-hidden="true" /> CV (PDF)
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Odak alanları */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full" aria-labelledby="focus-title">
        <div className="text-center mb-12">
          <h2 id="focus-title" className="text-3xl font-bold text-white mb-4">Neler Yapıyorum?</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Kameradan gelen görüntüden kullanıcının gördüğü ekrana kadar uçtan uca çalışıyorum.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {focusAreas.map(({ icon: Icon, color, bg, title, text }) => (
            <div key={title} className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-colors">
              <div className={`w-14 h-14 ${bg} rounded-xl flex items-center justify-center mb-6`}>
                <Icon className={color} size={28} aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
              <p className="text-slate-400 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Kısaca */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-6" aria-labelledby="about-title">
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 border border-slate-700 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-3xl rounded-full -mr-32 -mt-32" aria-hidden="true"></div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 id="about-title" className="text-3xl md:text-4xl font-bold text-white mb-6">Nasıl Çalışırım?</h2>
              <ul className="space-y-6">
                {principles.map((p) => (
                  <li key={p.title} className="flex gap-4">
                    <div className={`mt-1 ${p.ring} p-1.5 rounded-full h-fit`} aria-hidden="true">
                      <div className={`w-2 h-2 ${p.dot} rounded-full`}></div>
                    </div>
                    <div>
                      <h3 className="text-white font-bold mb-1">{p.title}</h3>
                      <p className="text-slate-400 text-sm">{p.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <dl className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="bg-slate-900/50 p-6 rounded-2xl border border-slate-700 text-center flex flex-col-reverse">
                  <dt className="text-xs text-slate-400 uppercase tracking-wider font-bold">{s.label}</dt>
                  <dd className={`text-3xl font-bold ${s.color} mb-1`}>{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Öne çıkan projeler */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-6" aria-labelledby="featured-title">
        <div className="flex justify-between items-center mb-8 gap-4">
          <h2 id="featured-title" className="text-3xl font-bold text-white">Öne Çıkanlar</h2>
          <Link to="/projects" className="text-indigo-300 hover:text-accent font-medium flex items-center gap-1 shrink-0">
            Tümünü Gör <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.projects.slice(0, 3).map((project) => (
            <Link to={`/project/${project.id}`} key={project.id} className="group block h-full rounded-xl">
              <div className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-lg group-hover:shadow-primary/10 h-full flex flex-col">
                <ProjectCover project={project} className="h-48" imgClassName="transition-transform duration-500 group-hover:scale-105" />
                <div className="p-6 flex-1 flex flex-col">
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">{project.category}</span>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">{project.title}</h3>
                  <p className="text-slate-400 text-sm mb-4 line-clamp-2">{project.shortDescription}</p>
                  <div className="mt-auto flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="text-xs font-medium px-2 py-1 rounded bg-slate-700 text-slate-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
