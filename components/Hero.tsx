
import React, { useEffect, useState } from 'react';
import { ChevronDown, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { SiteSettings } from '../types';
import { getSiteSettings } from '../services/dataService';

interface HeroProps {
  onScrollClick: () => void;
  onParticipantsClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollClick, onParticipantsClick }) => {
  const { t, language } = useLanguage();
  const [settings, setSettings] = useState<SiteSettings | null>(null);

  useEffect(() => {
    // Load settings asynchronously
    const load = async () => {
      try {
        const data = await getSiteSettings();
        setSettings(data);
      } catch (e) {
        console.error("Failed to load site settings", e);
      }
    };
    load();
  }, []);

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-tech-bg">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-tech-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="text-tech-accent font-mono mb-4 animate-fade-in-up">
          {t('hero_welcome')}
        </p>
        
        {/* Dynamic Title */}
        {settings ? (
          <h1 
            className="font-bold mb-4 tracking-tight animate-fade-in-up leading-tight" 
            style={{ 
              animationDelay: '0.1s',
              color: settings.heroTitle.color,
              fontSize: settings.heroTitle.fontSize
            }}
          >
            {settings.heroTitle.content[language]}
          </h1>
        ) : (
          <h1 className="text-5xl md:text-7xl font-bold text-tech-white mb-4 tracking-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            {t('hero_title_prefix')} <span className="text-tech-accent">2025</span>
          </h1>
        )}
        
        <p className="text-tech-white/80 text-sm md:text-base font-medium max-w-3xl mx-auto mb-8 animate-fade-in-up px-4 py-2 rounded bg-tech-light/30 border border-tech-accent/10 backdrop-blur-sm" style={{ animationDelay: '0.15s' }}>
          {t('hero_organizer')}
        </p>

        {/* Dynamic Subtitle */}
        {settings ? (
          <p 
            className="max-w-2xl mx-auto mb-12 animate-fade-in-up" 
            style={{ 
              animationDelay: '0.2s',
              color: settings.heroSubtitle.color,
              fontSize: settings.heroSubtitle.fontSize
            }}
          >
            {settings.heroSubtitle.content[language]}
          </p>
        ) : (
           <p className="text-tech-slate text-lg md:text-xl max-w-2xl mx-auto mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
             {t('hero_subtitle')}
           </p>
        )}
        
        <div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
          style={{ animationDelay: '0.3s' }}
        >
          <button 
            onClick={onScrollClick}
            className="border border-tech-accent text-tech-accent px-8 py-3 rounded hover:bg-tech-accent/10 transition-all duration-300 min-w-[200px]"
          >
            {t('hero_cta')}
          </button>
          
          <button 
            onClick={onParticipantsClick}
            className="flex items-center justify-center gap-2 bg-tech-light border border-tech-slate/30 text-tech-white px-8 py-3 rounded hover:bg-tech-light/80 hover:border-tech-accent/50 transition-all duration-300 min-w-[200px]"
          >
            <Users size={18} />
            {t('hero_participants_btn')}
          </button>
        </div>
      </div>

      <div 
        onClick={onScrollClick}
        className="absolute bottom-10 cursor-pointer animate-bounce text-tech-slate hover:text-tech-accent transition-colors"
      >
        <ChevronDown size={32} />
      </div>
    </section>
  );
};
