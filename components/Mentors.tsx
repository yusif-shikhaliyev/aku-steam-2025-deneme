
import React, { useEffect, useState } from 'react';
import { Instagram, Facebook, Linkedin, Twitter } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Mentor } from '../types';
import { getMentors } from '../services/dataService';

export const Mentors: React.FC = () => {
  const { t, language } = useLanguage();
  const [mentors, setMentors] = useState<Mentor[]>([]);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await getMentors();
        setMentors(data || []);
      } catch (e) {
        console.error("Failed to load mentors", e);
      }
    };
    load();
  }, []);

  return (
    <section className="py-20 px-4 bg-tech-bg relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-tech-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex items-center justify-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-tech-white text-center">
            {t('section_mentors')}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {mentors.map((mentor, index) => (
            <div 
              key={mentor.id}
              className="group bg-tech-light/30 backdrop-blur-sm rounded-xl p-6 border border-tech-slate/10 hover:border-tech-accent/40 transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative w-32 h-32 mx-auto mb-6">
                <div className="absolute inset-0 bg-tech-accent/20 rounded-full blur-lg group-hover:bg-tech-accent/40 transition-colors"></div>
                <img 
                  src={mentor.image} 
                  alt={mentor.name} 
                  className="relative w-full h-full object-cover rounded-full border-2 border-tech-slate/20 group-hover:border-tech-accent transition-colors"
                />
              </div>

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-tech-white mb-2">{mentor.name}</h3>
                <p className="text-tech-accent text-sm font-mono">{mentor.role[language]}</p>
              </div>

              <div className="flex justify-center gap-4 pt-4 border-t border-tech-slate/10">
                {mentor.social.instagram && (
                  <a href={mentor.social.instagram} className="text-tech-slate hover:text-[#E1306C] transition-colors transform hover:scale-110">
                    <Instagram size={20} />
                  </a>
                )}
                {mentor.social.facebook && (
                  <a href={mentor.social.facebook} className="text-tech-slate hover:text-[#1877F2] transition-colors transform hover:scale-110">
                    <Facebook size={20} />
                  </a>
                )}
                {mentor.social.linkedin && (
                  <a href={mentor.social.linkedin} className="text-tech-slate hover:text-[#0077B5] transition-colors transform hover:scale-110">
                    <Linkedin size={20} />
                  </a>
                )}
                {mentor.social.x && (
                  <a href={mentor.social.x} className="text-tech-slate hover:text-white transition-colors transform hover:scale-110" aria-label="X (Twitter)">
                    <Twitter size={20} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
