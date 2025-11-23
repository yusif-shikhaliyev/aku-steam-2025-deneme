
import React, { useEffect, useState } from 'react';
import { Project } from '../types';
import { X, Users, Image as ImageIcon, Video, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { language, t } = useLanguage();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (lightboxIndex !== null) {
        setLightboxIndex(null);
        return;
      }
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    if (project) document.body.style.overflow = 'hidden';
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [project, onClose, lightboxIndex]);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null || !project?.gallery) return;
    setLightboxIndex((lightboxIndex + 1) % project.gallery.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null || !project?.gallery) return;
    setLightboxIndex((lightboxIndex - 1 + project.gallery.length) % project.gallery.length);
  };

  if (!project) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div 
          className="absolute inset-0 bg-tech-bg/90 backdrop-blur-sm transition-opacity"
          onClick={onClose}
        ></div>
        
        <div className="relative bg-tech-light w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl border border-tech-accent/20 animate-fade-in-up custom-scrollbar">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-tech-slate hover:text-tech-accent transition-colors z-10 bg-tech-bg/50 p-2 rounded-full"
          >
            <X size={24} />
          </button>

          <div className="relative h-64 sm:h-96">
            <img 
              src={project.image} 
              alt={project.teamName[language]} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-tech-light to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 w-full flex items-end gap-4">
              {project.logo && (
                <div className="w-16 h-16 md:w-24 md:h-24 bg-tech-light rounded-full p-1 border-2 border-tech-accent shadow-xl flex-shrink-0">
                  <img src={project.logo} alt="Logo" className="w-full h-full object-contain rounded-full" />
                </div>
              )}
              <div>
                 <h2 className="text-3xl md:text-5xl font-bold text-tech-white mb-2">{project.teamName[language]}</h2>
                 <p className="text-tech-accent font-mono text-sm md:text-base">{project.shortDescription[language]}</p>
              </div>
            </div>
          </div>

          <div className="p-8 space-y-8">
            <div>
              <h3 className="text-xl font-bold text-tech-white mb-4 border-b border-tech-slate/20 pb-2">{t('modal_about')}</h3>
              <p className="text-tech-slate leading-relaxed whitespace-pre-line text-lg">
                {project.longDescription[language]}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Team Members */}
              <div>
                <h3 className="text-xl font-bold text-tech-white mb-4 flex items-center">
                  <Users className="mr-2 text-tech-accent" size={20} />
                  {t('modal_team')}
                </h3>
                <ul className="space-y-3">
                  {project.members.map((member, idx) => (
                    <li key={idx} className="text-tech-slate flex items-center bg-tech-bg/50 p-3 rounded border border-tech-slate/10">
                      <span className="w-2 h-2 bg-tech-accent rounded-full mr-3"></span>
                      {member}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Video Section */}
               <div>
                <h3 className="text-xl font-bold text-tech-white mb-4 flex items-center">
                  <Video className="mr-2 text-tech-accent" size={20} />
                  {t('modal_video')}
                </h3>
                {project.video ? (
                  <div className="w-full rounded overflow-hidden border border-tech-slate/20 bg-black aspect-video">
                    <video 
                      src={project.video} 
                      controls 
                      className="w-full h-full"
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>
                ) : (
                  <div className="aspect-video bg-tech-bg/50 rounded border border-tech-slate/10 flex items-center justify-center text-tech-slate/40">
                     <p className="italic">No video available</p>
                  </div>
                )}
              </div>
            </div>

            {/* Gallery */}
            <div>
              <h3 className="text-xl font-bold text-tech-white mb-4 flex items-center">
                <ImageIcon className="mr-2 text-tech-accent" size={20} />
                {t('modal_gallery')}
              </h3>
              {project.gallery && project.gallery.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {project.gallery.map((img, idx) => (
                     <div 
                      key={idx} 
                      className="relative aspect-square group overflow-hidden rounded-lg border border-tech-slate/20 cursor-zoom-in"
                      onClick={() => openLightbox(idx)}
                     >
                        <img 
                          src={img} 
                          alt={`Gallery ${idx}`} 
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                          <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity" size={24} />
                        </div>
                     </div>
                  ))}
                </div>
              ) : (
                <p className="text-tech-slate/50 italic text-sm">No additional images</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && project.gallery && (
        <div className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center backdrop-blur-md" onClick={closeLightbox}>
          <button 
            className="absolute top-4 right-4 text-white/70 hover:text-white p-2"
            onClick={closeLightbox}
          >
            <X size={32} />
          </button>

          <button 
             className="absolute left-4 text-white/70 hover:text-white p-2 hover:bg-white/10 rounded-full transition-colors"
             onClick={prevImage}
          >
            <ChevronLeft size={48} />
          </button>

          <img 
            src={project.gallery[lightboxIndex]} 
            alt="Full View" 
            className="max-w-[90vw] max-h-[90vh] object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          <button 
             className="absolute right-4 text-white/70 hover:text-white p-2 hover:bg-white/10 rounded-full transition-colors"
             onClick={nextImage}
          >
            <ChevronRight size={48} />
          </button>
          
          <div className="absolute bottom-4 text-white/50 font-mono">
            {lightboxIndex + 1} / {project.gallery.length}
          </div>
        </div>
      )}
    </>
  );
};