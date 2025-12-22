
import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative glass rounded-3xl overflow-hidden border border-white/5 hover:border-indigo-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10">
      <div className="h-64 overflow-hidden relative">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-80"></div>
        <div className="absolute bottom-4 left-6">
           <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map(tag => (
              <span key={tag} className="text-[10px] font-mono text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-bold text-white mb-3 uppercase tracking-tighter">{project.title}</h3>
        <p className="text-slate-400 text-sm mb-6 leading-relaxed">
          {project.description}
        </p>
        <div className="flex gap-4">
          <a href="#" className="text-xs font-mono text-indigo-400 hover:text-white transition-colors flex items-center gap-2">
            <i className="fas fa-external-link-alt"></i> VOIR LIVE
          </a>
          <a href="#" className="text-xs font-mono text-slate-500 hover:text-white transition-colors flex items-center gap-2">
            <i className="fab fa-github"></i> CODE SOURCE
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
