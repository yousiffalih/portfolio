import React from 'react';
import { PortfolioData } from '../types';

interface ResumeProps {
    data: PortfolioData;
}

const Resume: React.FC<ResumeProps> = ({ data }) => {
    return (
        <section id="cv" className="py-24 px-6 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-white uppercase italic text-center mb-16 underline decoration-indigo-500 underline-offset-8">
                Curriculum Vitae
            </h2>

            <div className="glass p-8 md:p-12 rounded-2xl border border-white/10 space-y-10 font-mono text-sm leading-relaxed text-slate-300">

                {/* HEADER */}
                <div className="text-center space-y-4 border-b border-white/10 pb-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-wider">{data.userInfo.name}</h1>
                    <div className="flex flex-wrap justify-center gap-4 text-emerald-400">
                        <span>{data.userInfo.email}</span>
                        <span>|</span>
                        <a href={data.userInfo.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-emerald-300">Linkedin</a>
                        <span>|</span>
                        <span>{data.userInfo.location}</span>
                    </div>
                </div>

                {/* PROFIL */}
                <div className="grid md:grid-cols-4 gap-6">
                    <h3 className="text-xl font-bold text-white uppercase md:col-span-1">À propos</h3>
                    <p className="md:col-span-3 text-justify">{data.userInfo.bio}</p>
                </div>

                <hr className="border-white/5" />

                {/* EDUCATION */}
                <div className="grid md:grid-cols-4 gap-6">
                    <h3 className="text-xl font-bold text-white uppercase md:col-span-1">Formation</h3>
                    <div className="md:col-span-3 space-y-6">
                        {data.education.map((edu, idx) => (
                            <div key={idx}>
                                <div className="flex justify-between items-baseline mb-1">
                                    <h4 className="text-lg font-bold text-indigo-400">{edu.school}</h4>
                                    <span className="text-xs text-slate-500">{edu.period}</span>
                                </div>
                                <p className="text-white mb-1">{edu.degree}</p>
                                {edu.location && <p className="text-slate-500 italic text-xs">{edu.location}</p>}
                            </div>
                        ))}
                    </div>
                </div>

                <hr className="border-white/5" />

                {/* EXPÉRIENCES */}
                <div className="grid md:grid-cols-4 gap-6">
                    <h3 className="text-xl font-bold text-white uppercase md:col-span-1">Expériences</h3>
                    <div className="md:col-span-3 space-y-6">
                        {data.experiences.map((exp, idx) => (
                            <div key={idx}>
                                <div className="flex justify-between items-baseline mb-1">
                                    <h4 className="text-lg font-bold text-indigo-400">{exp.role}</h4>
                                    <span className="text-xs text-slate-500">{exp.period}</span>
                                </div>
                                <p className="text-white mb-1">{exp.company}</p>
                                <p className="text-slate-400 text-xs">{exp.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <hr className="border-white/5" />

                {/* PROJETS (Summary) */}
                <div className="grid md:grid-cols-4 gap-6">
                    <h3 className="text-xl font-bold text-white uppercase md:col-span-1">Projets</h3>
                    <div className="md:col-span-3 space-y-6">
                        {data.projects.map((proj, idx) => (
                            <div key={idx}>
                                <div className="flex justify-between items-baseline mb-1">
                                    <h4
                                        className="text-lg font-bold text-indigo-400 hover:text-indigo-300 cursor-pointer underline decoration-indigo-500/30 hover:decoration-indigo-500 transition-all"
                                        onClick={() => {
                                            const element = document.getElementById(proj.id);
                                            if (element) {
                                                element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                                element.classList.add('ring-2', 'ring-indigo-500');
                                                setTimeout(() => element.classList.remove('ring-2', 'ring-indigo-500'), 2000);
                                            }
                                        }}
                                    >
                                        {proj.title} <i className="fas fa-arrow-up text-xs ml-2 opacity-50"></i>
                                    </h4>
                                </div>
                                <p className="text-slate-400 mb-2">{proj.description}</p>
                                <p className="text-emerald-500 text-xs">Technos: {proj.tags.join(', ')}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <hr className="border-white/5" />

                {/* SKILLS */}
                <div className="grid md:grid-cols-4 gap-6">
                    <h3 className="text-xl font-bold text-white uppercase md:col-span-1">Compétences</h3>
                    <div className="md:col-span-3">
                        <div className="flex flex-wrap gap-2">
                            {data.skills.map((skill, idx) => (
                                <span key={idx} className="px-2 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded text-indigo-300 text-xs">
                                    {skill.name}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <hr className="border-white/5" />

                {/* LANGUAGES & INTERESTS */}
                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-xl font-bold text-white uppercase mb-4">Langues</h3>
                        <ul className="space-y-2">
                            {data.languages.map((lang, idx) => (
                                <li key={idx} className="flex justify-between text-slate-300 border-b border-white/5 pb-1">
                                    <span>{lang.name}</span>
                                    <span className="text-emerald-400">{lang.level}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white uppercase mb-4">Intérêts</h3>
                        <div className="flex flex-wrap gap-3">
                            {data.interests.map((interest, idx) => (
                                <span key={idx} className="text-slate-300 bg-slate-800/50 px-3 py-1 rounded-full text-xs">
                                    {interest}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Resume;
