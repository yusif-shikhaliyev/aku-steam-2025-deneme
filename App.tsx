

import React, { useState, useEffect, useRef } from 'react';
import { Hero } from './components/Hero';
import { ProjectCard } from './components/ProjectCard';
import { ProjectModal } from './components/ProjectModal';
import { Mentors } from './components/Mentors';
import { RobotBuilder } from './components/RobotBuilder';
import { ParticipantsModal } from './components/ParticipantsModal';
import { GeneralGallery } from './components/GeneralGallery';
import { Project, Language, SiteSettings } from './types';
import { getProjects, getSiteSettings } from './services/dataService';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import { Sun, Moon, ArrowUp, Gamepad2, Menu, X, Search } from 'lucide-react';

// Main Content Component
const AppContent: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isGameOpen, setIsGameOpen] = useState(false);
  const [isParticipantsOpen, setIsParticipantsOpen] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [settings, setSettings] = useState<SiteSettings | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  const projectsSectionRef = useRef<HTMLElement>(null);
  
  const { language, setLanguage, t } = useLanguage();
  const languages: Language[] = ['AZE', 'ENG', 'TR', 'RU'];

  // Theme Handling
  useEffect(() => {
    if (isLightMode) {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
  }, [isLightMode]);

  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
  };

  // Load Data (Static)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [fetchedProjects, fetchedSettings] = await Promise.all([
          getProjects(),
          getSiteSettings()
        ]);
        setProjects(fetchedProjects);
        setSettings(fetchedSettings);
      } catch (e) {
        console.error("Error loading data:", e);
      }
    };
    fetchData();
  }, []);

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToProjects = () => {
    projectsSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Filter projects based on search query
  const filteredProjects = projects.filter(project => 
    project.teamName[language].toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-tech-bg text-tech-slate selection:bg-tech-accent selection:text-tech-bg transition-colors duration-300">
      {/* Nav */}
      <nav className="fixed top-0 left-0 w-full flex justify-between items-center p-4 md:p-6 z-40 pointer-events-none">
        <div className={`flex items-center gap-3 md:gap-4 pointer-events-auto select-none transition-all duration-500 ease-in-out ${isScrolled ? 'opacity-0 -translate-y-4 pointer-events-none' : 'opacity-100 translate-y-0'}`}>
          <img 
            src="https://upload.wikimedia.org/wikipedia/az/7/78/Az%C9%99rbaycan_Kooperasiya_Universiteti_logo.png" 
            alt="AKU Logo" 
            className="h-12 md:h-16 w-auto object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
            onError={(e) => {
              e.currentTarget.style.display = 'none'; 
            }}
          />
          <div className="flex flex-col justify-center text-tech-white leading-none tracking-wider uppercase font-medium">
            {settings ? (
              <>
                <span style={{ color: settings.logoTop.color, fontSize: settings.logoTop.fontSize }} className="opacity-90 text-[10px] md:text-xs">{settings.logoTop.content[language]}</span>
                <span style={{ color: settings.logoMiddle.color, fontSize: settings.logoMiddle.fontSize }} className="font-bold my-0.5 tracking-widest text-base md:text-2xl">{settings.logoMiddle.content[language]}</span>
                <span style={{ color: settings.logoBottom.color, fontSize: settings.logoBottom.fontSize }} className="opacity-90 tracking-[0.2em] text-[10px] md:text-xs">{settings.logoBottom.content[language]}</span>
              </>
            ) : (
              <>
                <span className="text-[10px] sm:text-xs opacity-90">AZƏRBAYCAN</span>
                <span className="text-lg sm:text-2xl font-bold text-tech-white my-0.5 tracking-widest">KOOPERASİYA</span>
                <span className="text-[10px] sm:text-xs opacity-90 tracking-[0.2em]">UNİVERSİTETİ</span>
              </>
            )}
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4 md:gap-6 pointer-events-auto">
          {/* Game Button */}
          {settings?.showGame && (
            <button 
              onClick={() => setIsGameOpen(true)}
              className="flex items-center gap-2 bg-tech-accent/10 hover:bg-tech-accent/20 text-tech-accent px-3 py-1 rounded border border-tech-accent/20 transition-all"
            >
              <Gamepad2 size={18} />
              <span className="text-xs font-bold">{t('hero_game_btn')}</span>
            </button>
          )}

          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme} 
            className="p-2 bg-tech-light/50 backdrop-blur rounded-full border border-tech-slate/20 text-tech-slate hover:text-tech-white transition-colors"
          >
             {isLightMode ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          {/* Language Switcher */}
          <div className="flex gap-1 bg-tech-light/50 backdrop-blur p-1 rounded border border-tech-slate/20">
            {languages.map(lang => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`px-3 py-1 text-xs font-bold rounded transition-colors ${
                  language === lang 
                  ? 'bg-tech-accent text-tech-bg' 
                  : 'text-tech-slate hover:text-tech-white'
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden pointer-events-auto">
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 text-tech-white bg-tech-light/50 backdrop-blur-md rounded-lg border border-tech-slate/20 hover:bg-tech-light/80 transition-colors"
            >
               <Menu size={24} />
            </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-tech-bg/95 backdrop-blur-xl flex flex-col p-6 animate-fade-in-up">
           <div className="flex justify-end">
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-tech-slate hover:text-tech-white bg-tech-light/50 rounded-full border border-tech-slate/20">
                 <X size={24} />
              </button>
           </div>
           
           <div className="flex flex-col items-center justify-center flex-1 gap-8 w-full max-w-xs mx-auto">
              {/* Mobile Menu Content */}
              
              <div className="text-2xl font-bold text-tech-white tracking-widest border-b border-tech-accent/50 pb-2 mb-4">MENU</div>

              {settings?.showGame && (
                <button 
                  onClick={() => { setIsGameOpen(true); setIsMobileMenuOpen(false); }}
                  className="w-full flex items-center justify-center gap-3 bg-tech-accent text-tech-bg px-6 py-4 rounded-xl font-bold text-lg shadow-lg shadow-tech-accent/20"
                >
                  <Gamepad2 size={24} />
                  {t('hero_game_btn')}
                </button>
              )}

              <div className="w-full bg-tech-light/30 rounded-xl p-4 border border-tech-slate/10">
                <p className="text-center text-tech-slate mb-3 text-sm uppercase tracking-wider">{t('label_color')}</p>
                <div className="flex justify-center">
                   <button 
                      onClick={toggleTheme} 
                      className="flex items-center gap-2 px-6 py-2 bg-tech-bg rounded-full border border-tech-slate/20 text-tech-white"
                    >
                      {isLightMode ? <Moon size={20} /> : <Sun size={20} />}
                      <span>{isLightMode ? 'Dark Mode' : 'Light Mode'}</span>
                   </button>
                </div>
              </div>

              <div className="w-full bg-tech-light/30 rounded-xl p-4 border border-tech-slate/10">
                 <p className="text-center text-tech-slate mb-3 text-sm uppercase tracking-wider">Language</p>
                 <div className="grid grid-cols-2 gap-3">
                    {languages.map(lang => (
                      <button
                        key={lang}
                        onClick={() => setLanguage(lang)}
                        className={`px-4 py-2 text-sm font-bold rounded-lg transition-colors ${
                          language === lang 
                          ? 'bg-tech-accent text-tech-bg' 
                          : 'bg-tech-bg text-tech-slate border border-tech-slate/20'
                        }`}
                      >
                        {lang}
                      </button>
                    ))}
                 </div>
              </div>
           </div>
        </div>
      )}

      {/* Hero */}
      <Hero 
        onScrollClick={scrollToProjects} 
        onParticipantsClick={() => setIsParticipantsOpen(true)}
      />
      
      {/* Mobile Game Button (Below hero for quick access) */}
      {settings?.showGame && (
        <div className="md:hidden text-center py-8 bg-tech-bg border-b border-tech-slate/10">
           <button 
              onClick={() => setIsGameOpen(true)}
              className="inline-flex items-center gap-2 bg-tech-accent/10 hover:bg-tech-accent/20 text-tech-accent px-8 py-3 rounded-full border border-tech-accent/20 transition-all animate-pulse"
            >
              <Gamepad2 size={20} />
              <span className="font-bold">{t('hero_game_btn')}</span>
            </button>
        </div>
      )}

      {/* Mentors Section */}
      <Mentors />

      {/* Projects Grid */}
      <section ref={projectsSectionRef} className="py-20 px-4 md:px-8 max-w-7xl mx-auto min-h-[80vh]">
        <div className="flex flex-col md:flex-row items-end justify-between mb-8 border-b border-tech-slate/20 pb-4 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-tech-white flex items-center gap-2">
              {t('section_exhibits')}
            </h2>
          </div>
          
          <div className="flex items-center gap-4 w-full md:w-auto">
             {/* Search Bar */}
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-tech-slate" size={18} />
              <input 
                type="text" 
                placeholder={t('search_placeholder')} 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-tech-light rounded-full border border-tech-slate/20 focus:border-tech-accent outline-none text-sm text-tech-white transition-all focus:ring-1 focus:ring-tech-accent"
              />
            </div>
            
            <span className="hidden md:block font-mono text-sm text-tech-accent whitespace-nowrap">
              // {t('scroll_explore')}
            </span>
          </div>
        </div>

        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index}
                onClick={setSelectedProject} 
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
             <div className="inline-flex justify-center items-center w-20 h-20 rounded-full bg-tech-light mb-4 text-tech-slate">
                <Search size={32} />
             </div>
             <p className="text-tech-slate text-lg">{t('no_results')}</p>
          </div>
        )}
      </section>

      {/* General Gallery Section */}
      <GeneralGallery />

      {/* Footer */}
      <footer className="py-8 text-center text-sm font-mono text-tech-slate/50 border-t border-tech-slate/10 mt-12">
        <p>{t('footer_designed')}</p>
      </footer>

      {/* Scroll To Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 bg-tech-accent text-tech-bg p-3 rounded-full shadow-lg hover:bg-tech-accent/80 transition-all duration-300 z-40 ${
          isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        <ArrowUp size={24} />
      </button>

      {/* Modals */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
      
      {isGameOpen && <RobotBuilder onClose={() => setIsGameOpen(false)} />}
      
      {isParticipantsOpen && <ParticipantsModal onClose={() => setIsParticipantsOpen(false)} />}
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};
