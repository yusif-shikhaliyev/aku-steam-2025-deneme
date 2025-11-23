
import React, { useEffect, useState } from 'react';
import { Image as ImageIcon, Video, X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { getGeneralGallery, getGeneralVideos } from '../services/dataService';

export const GeneralGallery: React.FC = () => {
  const { t } = useLanguage();
  const [images, setImages] = useState<string[]>([]);
  const [videos, setVideos] = useState<string[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    const loadData = async () => {
      const galleryData = await getGeneralGallery();
      const videosData = await getGeneralVideos();
      setImages(galleryData);
      setVideos(videosData);
    };
    loadData();
  }, []);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + images.length) % images.length);
  };

  // Helper to check if file exists (visual feedback for broken placeholders)
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.style.display = 'none';
  };

  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
       <div className="flex items-center justify-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-tech-white text-center border-b-4 border-tech-accent pb-2 inline-block">
            {t('section_gallery')}
          </h2>
        </div>

        {/* Videos Section */}
        {videos.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-6 text-tech-white font-bold text-xl">
               <Video className="text-tech-accent" />
               <span>Videos</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {videos.map((vid, idx) => (
                <div key={idx} className="w-full aspect-video bg-black rounded-lg overflow-hidden border border-tech-slate/20 shadow-lg">
                   <video 
                      src={vid} 
                      controls 
                      className="w-full h-full object-cover"
                      onError={(e) => e.currentTarget.parentElement!.style.display = 'none'} // Hide if missing
                    >
                      Your browser does not support the video tag.
                    </video>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Images Section */}
        <div>
            <div className="flex items-center gap-2 mb-6 text-tech-white font-bold text-xl">
               <ImageIcon className="text-tech-accent" />
               <span>Photos</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {images.map((img, idx) => (
                <div 
                  key={idx} 
                  className="relative group aspect-square overflow-hidden rounded-lg border border-tech-slate/20 cursor-zoom-in bg-tech-light/20"
                  onClick={() => openLightbox(idx)}
                >
                   <img 
                     src={img} 
                     alt={`Gallery ${idx + 1}`} 
                     className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                     onError={handleImageError}
                   />
                   <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                     <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity" size={24} />
                   </div>
                </div>
              ))}
            </div>
        </div>

        {/* Lightbox */}
        {lightboxIndex !== null && (
          <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center backdrop-blur-md" onClick={closeLightbox}>
            <button className="absolute top-4 right-4 text-white/70 hover:text-white p-2" onClick={closeLightbox}>
              <X size={32} />
            </button>

            <button className="absolute left-4 text-white/70 hover:text-white p-2 hover:bg-white/10 rounded-full transition-colors" onClick={prevImage}>
              <ChevronLeft size={48} />
            </button>

            <img 
              src={images[lightboxIndex]} 
              alt="Full View" 
              className="max-w-[90vw] max-h-[90vh] object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            <button className="absolute right-4 text-white/70 hover:text-white p-2 hover:bg-white/10 rounded-full transition-colors" onClick={nextImage}>
              <ChevronRight size={48} />
            </button>
            
            <div className="absolute bottom-4 text-white/50 font-mono">
              {lightboxIndex + 1} / {images.length}
            </div>
          </div>
        )}
    </section>
  );
};
