
import React, { useState } from 'react';
import { Cpu, Zap, Battery, MonitorPlay, RotateCw, Wifi, X, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface RobotBuilderProps {
  onClose: () => void;
}

type ComponentType = 'brain' | 'power' | 'actuator' | 'sensor';

interface Component {
  id: string;
  name: string;
  type: ComponentType;
  icon: React.ReactNode;
}

const COMPONENTS: Component[] = [
  { id: 'arduino', name: 'Arduino Uno', type: 'brain', icon: <Cpu size={32} /> },
  { id: 'motor', name: 'DC Motor', type: 'actuator', icon: <RotateCw size={32} /> },
  { id: 'sensor', name: 'Ultrasonic', type: 'sensor', icon: <Wifi size={32} /> },
  { id: 'battery', name: '9V Battery', type: 'power', icon: <Battery size={32} /> },
];

export const RobotBuilder: React.FC<RobotBuilderProps> = ({ onClose }) => {
  const { t } = useLanguage();
  const [workspace, setWorkspace] = useState<Component[]>([]);
  const [result, setResult] = useState<'success' | 'fail' | null>(null);

  const addToWorkspace = (component: Component) => {
    setResult(null);
    // Limit to unique types for simplicity
    if (!workspace.some(c => c.id === component.id)) {
      setWorkspace([...workspace, component]);
    }
  };

  const removeFromWorkspace = (id: string) => {
    setResult(null);
    setWorkspace(workspace.filter(c => c.id !== id));
  };

  const checkSystem = () => {
    const hasBrain = workspace.some(c => c.type === 'brain');
    const hasPower = workspace.some(c => c.type === 'power');
    const hasActuator = workspace.some(c => c.type === 'actuator');
    // Basic logic: Needs brain + power + (actuator OR sensor)
    if (hasBrain && hasPower && (hasActuator || workspace.some(c => c.type === 'sensor'))) {
      setResult('success');
    } else {
      setResult('fail');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-tech-bg/90 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative bg-tech-light w-full max-w-3xl rounded-xl shadow-2xl border border-tech-accent/20 p-6 animate-fade-in-up">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-tech-white flex items-center gap-2">
            <Zap className="text-tech-accent" />
            {t('game_title')}
          </h2>
          <button onClick={onClose} className="text-tech-slate hover:text-tech-white">
            <X size={24} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 min-h-[400px]">
          {/* Component Palette */}
          <div className="bg-tech-bg/50 p-4 rounded-lg border border-tech-slate/10">
            <h3 className="text-tech-slate font-bold mb-4 text-sm uppercase tracking-wider">{t('game_components')}</h3>
            <div className="space-y-3">
              {COMPONENTS.map(comp => (
                <button
                  key={comp.id}
                  onClick={() => addToWorkspace(comp)}
                  disabled={workspace.some(c => c.id === comp.id)}
                  className={`w-full flex items-center p-3 rounded border transition-all ${
                    workspace.some(c => c.id === comp.id)
                      ? 'bg-tech-accent/5 border-tech-accent/20 opacity-50 cursor-not-allowed'
                      : 'bg-tech-light hover:bg-tech-accent/10 border-tech-slate/20 hover:border-tech-accent/50'
                  }`}
                >
                  <span className="text-tech-accent mr-3">{comp.icon}</span>
                  <span className="text-tech-white font-medium">{t(`comp_${comp.id}`)}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Workspace */}
          <div className="md:col-span-2 flex flex-col">
            <div className="flex-1 bg-tech-bg rounded-lg border-2 border-dashed border-tech-slate/20 p-4 relative flex items-center justify-center overflow-hidden">
               <div className="absolute inset-0 grid grid-cols-6 gap-4 p-4 opacity-10 pointer-events-none">
                  {Array.from({ length: 24 }).map((_, i) => (
                    <div key={i} className="w-full h-full border border-tech-accent"></div>
                  ))}
               </div>

               {workspace.length === 0 ? (
                 <div className="text-center text-tech-slate/40">
                   <MonitorPlay size={48} className="mx-auto mb-2 opacity-50" />
                   <p>{t('game_instruction')}</p>
                 </div>
               ) : (
                 <div className="flex flex-wrap justify-center gap-4 z-10">
                    {workspace.map(comp => (
                      <div key={comp.id} className="relative bg-tech-light p-4 rounded-lg border border-tech-accent/50 shadow-[0_0_15px_rgba(100,255,218,0.1)] flex flex-col items-center group">
                        <button 
                          onClick={() => removeFromWorkspace(comp.id)}
                          className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <X size={12} />
                        </button>
                        <div className="text-tech-accent mb-2">{comp.icon}</div>
                        <span className="text-xs text-tech-slate font-mono">{t(`comp_${comp.id}`)}</span>
                        {/* Connection Lines Logic (Visual only) */}
                        <div className="w-2 h-2 bg-tech-accent rounded-full mt-2 animate-pulse"></div>
                      </div>
                    ))}
                 </div>
               )}
            </div>

            {/* Controls */}
            <div className="mt-4 flex justify-between items-center">
               <div className="text-sm font-mono">
                  {result === 'success' && <span className="text-green-400 flex items-center"><CheckCircle size={16} className="mr-1"/> {t('game_result_success')}</span>}
                  {result === 'fail' && <span className="text-red-400 flex items-center"><X size={16} className="mr-1"/> {t('game_result_fail')}</span>}
               </div>
               <div className="flex gap-2">
                 <button 
                   onClick={() => { setWorkspace([]); setResult(null); }}
                   className="px-4 py-2 text-tech-slate hover:text-tech-white text-sm"
                 >
                   {t('game_reset')}
                 </button>
                 <button 
                   onClick={checkSystem}
                   className="bg-tech-accent text-tech-bg font-bold px-6 py-2 rounded hover:bg-tech-accent/80 transition-colors shadow-lg shadow-tech-accent/20"
                 >
                   {t('game_check')}
                 </button>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};