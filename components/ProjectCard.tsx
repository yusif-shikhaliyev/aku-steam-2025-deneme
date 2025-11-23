
import React from 'react';
import { Project } from '../types';
import { ExternalLink, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick, index }) => {
  const { language, t } = useLanguage();

  return (
    <div 
      className="group relative bg-tech-light rounded-lg overflow-hidden shadow-xl border border-transparent hover:border-tech-accent/50 transition-all duration-300 cursor-pointer hover:-translate-y-2 animate-fade-in-up"
      style={{ animationDelay: `${index * 0.1}s` }}
      onClick={() => onClick(project)}
    >
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-tech-bg/20 group-hover:bg-transparent transition-colors z-10"></div>
        <img 
          src={project.image} 
          alt={project.teamName[language]} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        {/* Team Logo Overlay */}
        {project.logo && (
          <div className="absolute top-2 right-2 z-20 w-12 h-12 bg-tech-light/80 backdrop-blur-sm rounded-full p-1 border border-tech-accent/30 shadow-lg">
            <img 
              src={project.logo} 
              alt="Team Logo" 
              className="w-full h-full object-contain rounded-full"
            />
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-bold text-tech-white group-hover:text-tech-accent transition-colors">
            {project.teamName[language]}
          </h3>
          <ExternalLink size={16} className="text-tech-slate opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <p className="text-tech-slate text-sm line-clamp-2 mb-4">
          {project.shortDescription[language]}
        </p>
        
        <div className="flex items-center text-xs text-tech-accent font-mono">
          <Users size={12} className="mr-2" />
          {project.members.length} {t('card_members')}
        </div>
      </div>
    </div>
  );
};
