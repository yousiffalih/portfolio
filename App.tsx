
import React, { useState, useEffect } from 'react';
import { INITIAL_DATA } from './public/assets/constants';
import { PortfolioData } from './types';
import ProjectCard from './components/ProjectCard';
import Button from './components/Button';
import AIAssistant from './components/AIAssistant';
import SkillChart from './components/SkillChart';
import Resume from './components/Resume';

const App: React.FC = () => {
  const [data, setData] = useState<PortfolioData>(() => {
    const saved = localStorage.getItem('yousif_portfolio_data');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // Ensure new fields exist
        if (parsed.education && parsed.languages && parsed.interests) {
          return parsed;
        }
      } catch (e) {
        console.error("Error parsing saved data", e);
      }
    }
    return INITIAL_DATA;
  });
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative selection:bg-indigo-500/30">
      {/* Orbes de lumière décoratifs */}
      <div className="fixed top-0 -left-20 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="fixed bottom-0 -right-20 w-96 h-96 bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <nav className={`fixed top-0 w-full z-40 transition-all duration-500 ${scrolled ? 'py-3 glass border-b border-white/10' : 'py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center font-mono font-bold text-white shadow-lg">Y</div>
            <div className="font-mono text-xl font-bold tracking-tighter uppercase">
              YOUSIF<span className="text-emerald-500">.</span>DEV
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest">
            <a href="#about" className="text-slate-400 hover:text-white transition-colors">Profil</a>
            <a href="#projects" className="text-slate-400 hover:text-white transition-colors">Projets</a>
            <a href="#skills" className="text-slate-400 hover:text-white transition-colors">Skills</a>
            <Button variant="outline" className="text-[10px]" onClick={() => window.location.href = `mailto:${data.userInfo.email}`}>Me Contacter</Button>
          </div>
        </div>
      </nav>

      <main className="relative z-10 pt-32 pb-20">
        {/* HERO SECTION */}
        <section id="about" className="px-6 mb-32 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 space-y-8">
              <div className="inline-block px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 font-mono text-xs uppercase tracking-tighter">
                Disponible pour alternance - Sept 2025
              </div>
              <h1 className="text-6xl md:text-8xl font-black text-white leading-none tracking-tighter uppercase italic">
                CRAFTING <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400">DIGITAL</span> SOLUTIONS
              </h1>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                {data.userInfo.name}
              </h1>
              <h2 className="text-2xl md:text-3xl text-slate-400 font-mono">
                {data.userInfo.title}
              </h2>
              <div className="pt-4">
                <a
                  href={data.userInfo.cvUrl}
                  download
                  className="inline-block px-6 py-2 rounded-xl font-mono text-sm border border-indigo-500/50 text-indigo-400 hover:bg-indigo-500/10 transition-colors"
                >
                  Télécharger mon CV
                </a>
              </div>
              <p className="text-slate-400 text-xl font-light max-w-xl leading-relaxed">
                {data.userInfo.bio}
              </p>
              <div className="flex gap-4">
                <Button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>VOIR MES PROJETS</Button>
                <Button
                  variant="outline"
                  as="a"
                  href={data.userInfo.cvUrl}
                  download="CV_Yousif_SABTI.pdf" // هنا تگدر تنطي أي اسم يعجبك للملف لما ينزل
                >
                  TÉLÉCHARGER CV
                </Button>              </div>
            </div>

            <div className="w-full lg:w-5/12 relative group">
              <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-600 to-emerald-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative glass rounded-3xl p-2 border border-white/10">
                <img
                  src={data.userInfo.photoUrl}
                  alt={data.userInfo.name}
                  className="rounded-2xl w-full aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  onError={(e) => { e.currentTarget.src = "https://avatars.githubusercontent.com/u/193010070?v=4"; }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="py-24 px-6 bg-slate-900/30 border-y border-white/5">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-4xl font-bold text-white uppercase italic">Compétences Techniques</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {data.skills.map(s => (
                  <div key={s.name} className="glass p-4 rounded-xl border border-white/5 hover:border-indigo-500/30 transition-colors">
                    <div className="flex justify-between text-xs font-mono mb-2">
                      <span className="text-slate-300">{s.name}</span>
                      <span className="text-emerald-500">{s.level}%</span>
                    </div>
                    <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-indigo-500 to-emerald-500" style={{ width: `${s.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 w-full flex justify-center">
              <SkillChart skills={data.skills} />
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-32 px-6 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
              <h2 className="text-5xl font-black text-white italic uppercase tracking-tighter">Projets_Récents</h2>
              <p className="text-slate-500 font-mono text-sm mt-2">// Quelques travaux réalisés à l'UHA 4.0 et personnels</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.projects.map(project => <ProjectCard key={project.id} project={project} />)}
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section className="py-24 px-6 max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white uppercase italic text-center mb-16 underline decoration-indigo-500 underline-offset-8">Parcours</h2>
          <div className="space-y-8">
            {data.experiences.map((exp, i) => (
              <div key={i} className="glass p-8 rounded-2xl border-l-4 border-l-indigo-600 hover:translate-x-2 transition-transform">
                <div className="font-mono text-xs text-indigo-400 mb-2">{exp.period}</div>
                <h3 className="text-2xl font-bold text-white uppercase tracking-tight">{exp.role}</h3>
                <p className="text-emerald-400 font-mono text-sm mb-4">{exp.company}</p>
                <p className="text-slate-400 leading-relaxed text-sm">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* RESUME SECTION */}
        <Resume data={data} />
      </main>

      <footer className="py-12 border-t border-white/5 bg-slate-950/80">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-mono text-xs text-slate-500 uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Yousif Sabti • Built with React & Gemini
          </div>
          <div className="flex gap-6 text-xl">
            <a href={data.userInfo.socials.github} target="_blank" className="text-slate-400 hover:text-white"><i className="fab fa-github"></i></a>
            <a href={data.userInfo.socials.linkedin} target="_blank" className="text-slate-400 hover:text-white"><i className="fab fa-linkedin"></i></a>
            <a href={`mailto:${data.userInfo.email}`} className="text-slate-400 hover:text-white"><i className="fas fa-envelope"></i></a>
          </div>
        </div>
      </footer>

      <AIAssistant data={data} />
    </div>
  );
};

export default App;
