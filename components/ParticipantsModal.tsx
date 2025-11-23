

import React, { useMemo } from 'react';
import { X, User } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { INITIAL_PROJECTS, INITIAL_MENTORS } from '../constants';

interface ParticipantsModalProps {
  onClose: () => void;
}

export const ParticipantsModal: React.FC<ParticipantsModalProps> = ({ onClose }) => {
  const { t } = useLanguage();

  const participants = useMemo(() => {
    // 1. Gather all names
    const mentorNames = INITIAL_MENTORS.map(m => m.name.trim());
    const projectMemberNames = INITIAL_PROJECTS.flatMap(p => p.members).map(m => m.trim());
    
    // 2. Remove duplicates using Set
    const uniqueNames = Array.from(new Set([...mentorNames, ...projectMemberNames]));

    // 3. Define Priority List
    const priorityList = [
      "Yusif Şıxəliyev",
      "Nəzrin Şikarlı",
      "Ülviyyə Cavadlı"
    ];

    // 4. Split into Priority and Others
    const priorityParticipants: string[] = [];
    const otherParticipants: string[] = [];

    uniqueNames.forEach(name => {
      // Check if name roughly matches priority list (case insensitive or exact)
      const isPriority = priorityList.some(p => p.toLowerCase() === name.toLowerCase());
      
      if (isPriority) {
        // We push to a temp array but will order them strictly below
      } else {
        otherParticipants.push(name);
      }
    });

    // Sort 'Others' alphabetically
    otherParticipants.sort((a, b) => a.localeCompare(b, 'az'));

    // 5. Construct Final List based on strict priority order
    // Ensure priority names exist in the dataset before adding them
    const sortedPriority = priorityList.filter(pName => 
      uniqueNames.some(uName => uName.toLowerCase() === pName.toLowerCase())
    );

    return [...sortedPriority, ...otherParticipants];
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-tech-bg/90 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>
      
      <div className="relative bg-tech-light w-full max-w-2xl max-h-[80vh] overflow-y-auto rounded-xl shadow-2xl border border-tech-accent/20 animate-fade-in-up custom-scrollbar p-6">
        <div className="flex justify-between items-center mb-6 border-b border-tech-slate/20 pb-4">
          <h2 className="text-2xl font-bold text-tech-white flex items-center gap-2">
            <User className="text-tech-accent" />
            {t('modal_participants_title')}
          </h2>
          <button 
            onClick={onClose}
            className="text-tech-slate hover:text-tech-accent transition-colors bg-tech-bg/50 p-2 rounded-full"
          >
            <X size={24} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {participants.map((name, index) => (
            <div 
              key={index} 
              className="flex items-center p-3 rounded-lg border bg-tech-bg border-tech-slate/10 hover:border-tech-accent/30 transition-colors"
            >
              <div className="w-8 h-8 rounded-full flex items-center justify-center mr-3 font-bold text-xs bg-tech-slate/10 text-tech-slate border border-tech-slate/20">
                {index + 1}
              </div>
              <span className="font-medium text-tech-slate">
                {name}
              </span>
            </div>
          ))}
        </div>
        
        <div className="mt-6 text-center text-xs text-tech-slate/40">
           Total: {participants.length}
        </div>
      </div>
    </div>
  );
};
