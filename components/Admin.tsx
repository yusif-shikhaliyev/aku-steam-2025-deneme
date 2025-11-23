
import React, { useState, useEffect } from 'react';
import { Project, Mentor, Language, SocialLinks, SiteSettings, StyledText } from '../types';
import { 
  getProjects, addProject, updateProject, deleteProject, deleteAllProjects,
  getMentors, addMentor, updateMentor, deleteMentor, deleteAllMentors, 
  getSiteSettings, saveSiteSettings, exportDatabase 
} from '../services/dataService';
import { isFirebaseConfigured, saveFirebaseConfig, resetFirebaseConfig } from '../firebaseConfig';
import { Lock, Plus, Edit, Trash2, Save, X, Download, Image as ImageIcon, AlertTriangle, Upload, XCircle, Video, CheckCircle, Users, Briefcase, Instagram, Facebook, Linkedin, Twitter, Settings, Palette, Type, ToggleLeft, ToggleRight, Loader2, Database, WifiOff } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Admin: React.FC = () => {
  const { t } = useLanguage();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  
  // State for toggling views
  const [viewMode, setViewMode] = useState<'projects' | 'mentors' | 'settings'>('projects');

  // Project State
  const [projects, setProjects] = useState<Project[]>([]);
  const [editingProject, setEditingProject] = useState<Partial<Project> | null>(null);
  
  // Mentor State
  const [mentors, setMentors] = useState<Mentor[]>([]);
  const [editingMentor, setEditingMentor] = useState<Partial<Mentor> | null>(null);

  // Settings State
  const [siteSettings, setSiteSettings] = useState<SiteSettings | null>(null);

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<Language>('AZE');
  const [isLoading, setIsLoading] = useState(false);
  
  // Custom Modal States
  const [alertState, setAlertState] = useState<{ show: boolean; message: string }>({ show: false, message: '' });
  const [confirmState, setConfirmState] = useState<{ show: boolean; message: string; onConfirm: () => void }>({ show: false, message: '', onConfirm: () => {} });
  const [isDbSetupOpen, setIsDbSetupOpen] = useState(false);
  const [dbConfig, setDbConfig] = useState({
    apiKey: '',
    authDomain: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: ''
  });

  const languages: Language[] = ['AZE', 'ENG', 'TR', 'RU'];

  // Available Social Platforms
  const availableSocialPlatforms = ['instagram', 'facebook', 'linkedin', 'x'];

  useEffect(() => {
    if (isAuthenticated) {
      refreshData();
    }
  }, [isAuthenticated, viewMode]);

  const refreshData = async () => {
    setIsLoading(true);
    try {
      if (viewMode === 'projects') {
        const data = await getProjects();
        setProjects(Array.isArray(data) ? data : []);
      } else if (viewMode === 'mentors') {
        const data = await getMentors();
        setMentors(Array.isArray(data) ? data : []);
      } else if (viewMode === 'settings') {
        const data = await getSiteSettings();
        setSiteSettings(data);
      }
    } catch (e) {
      console.error("Error refreshing data", e);
    } finally {
      setIsLoading(false);
    }
  };

  // Helper for Custom Alerts
  const triggerAlert = (message: string) => {
    setAlertState({ show: true, message });
  };

  // Helper for Custom Confirms
  const triggerConfirm = (message: string, onConfirm: () => void) => {
    setConfirmState({ show: true, message, onConfirm });
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'Yusif200619') {
      setIsAuthenticated(true);
    } else {
      triggerAlert(t('admin_alert_password'));
    }
  };

  // --- General Handlers ---

  const handleExport = async () => {
    setIsLoading(true);
    const json = await exportDatabase();
    navigator.clipboard.writeText(json).then(() => {
      triggerAlert(t('admin_alert_copied'));
    }).catch(() => {
       console.log("Clipboard failed");
    }).finally(() => setIsLoading(false));
  };

  const handleDbSave = (e: React.FormEvent) => {
    e.preventDefault();
    saveFirebaseConfig(dbConfig);
  };

  // File to Base64 Helper
  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    });
  };

  // --- Project Handlers ---

  const handleDeleteProject = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    triggerConfirm(t('admin_alert_delete'), async () => {
      setIsLoading(true);
      await deleteProject(id);
      await refreshData();
    });
  };

  const handleDeleteAllProjects = () => {
    triggerConfirm(t('admin_alert_delete_all'), async () => {
      setIsLoading(true);
      await deleteAllProjects();
      await refreshData();
    });
  };

  const handleEditProject = (project: Project) => {
    setEditingProject({ ...project });
    setIsFormOpen(true);
    setActiveTab('AZE');
  };

  const handleAddNewProject = () => {
    setEditingProject({
      teamName: { AZE: '', ENG: '', TR: '', RU: '' },
      logo: '',
      image: 'https://picsum.photos/800/600',
      shortDescription: { AZE: '', ENG: '', TR: '', RU: '' },
      longDescription: { AZE: '', ENG: '', TR: '', RU: '' },
      members: [''],
      projectLink: '',
      gallery: [],
      video: ''
    });
    setIsFormOpen(true);
    setActiveTab('AZE');
  };

  const handleProjectTextChange = (field: 'teamName' | 'shortDescription' | 'longDescription', value: string) => {
    setEditingProject(prev => {
      if (!prev) return prev;
      return {
        ...prev,
        [field]: {
          ...prev[field],
          [activeTab]: value
        }
      };
    });
  };

  const handleAddMember = () => {
    setEditingProject(prev => {
      if (!prev) return prev;
      const currentMembers = Array.isArray(prev.members) ? prev.members : [];
      return { ...prev, members: [...currentMembers, ''] };
    });
  };

  const handleMemberChange = (index: number, value: string) => {
    setEditingProject(prev => {
      if (!prev) return prev;
      const currentMembers = [...(prev.members as string[] || [])];
      currentMembers[index] = value;
      return { ...prev, members: currentMembers };
    });
  };

  const handleRemoveMember = (index: number) => {
    setEditingProject(prev => {
      if (!prev) return prev;
      const currentMembers = [...(prev.members as string[] || [])];
      const newMembers = currentMembers.filter((_, i) => i !== index);
      return { ...prev, members: newMembers };
    });
  };

  const handleProjectImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      try {
        const base64 = await fileToBase64(e.target.files[0]);
        setEditingProject(prev => prev ? { ...prev, image: base64 } : null);
      } catch (error) {
        console.error("Error converting file", error);
      }
    }
  };

  const handleProjectLogoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      try {
        const base64 = await fileToBase64(e.target.files[0]);
        setEditingProject(prev => prev ? { ...prev, logo: base64 } : null);
      } catch (error) {
        console.error("Error converting logo", error);
      }
    }
  };

  const handleProjectVideoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      try {
         if (e.target.files[0].size > 10 * 1024 * 1024) {
            triggerAlert("Video file is too large for DB (Max 10MB). Use a link or compress.");
            return;
         }
        const base64 = await fileToBase64(e.target.files[0]);
        setEditingProject(prev => prev ? { ...prev, video: base64 } : null);
      } catch (error) {
        console.error("Error converting video", error);
      }
    }
  };

  const handleProjectGalleryUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      try {
        const files = Array.from(e.target.files) as File[];
        const promises = files.map(file => fileToBase64(file));
        const newImages = await Promise.all(promises);
        setEditingProject(prev => {
          if (!prev) return null;
          return {
            ...prev,
            gallery: [...(prev.gallery || []), ...newImages]
          };
        });
      } catch (error) {
        console.error("Error converting files", error);
      }
    }
  };

  const removeGalleryImage = (index: number) => {
    setEditingProject(prev => {
      if (!prev) return null;
      const newGallery = [...(prev.gallery || [])];
      newGallery.splice(index, 1);
      return { ...prev, gallery: newGallery };
    });
  };

  const handleSaveProject = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProject) return;

    if (!editingProject.teamName?.['AZE']) {
       triggerAlert("AZE Team Name is required");
       return;
    }
    const members = (editingProject.members as string[] || []).map(m => m.trim()).filter(m => m.length > 0);
    const projectData = { ...editingProject, members } as Project;

    setIsLoading(true);
    if (projectData.id) {
      await updateProject(projectData);
    } else {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { id, ...rest } = projectData; 
      await addProject(rest);
    }
    setIsFormOpen(false);
    setEditingProject(null);
    await refreshData();
  };


  // --- Mentor Handlers ---

  const handleDeleteMentor = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    triggerConfirm(t('admin_alert_delete'), async () => {
      setIsLoading(true);
      await deleteMentor(id);
      await refreshData();
    });
  };

  const handleDeleteAllMentors = () => {
    triggerConfirm(t('admin_alert_delete_all'), async () => {
      setIsLoading(true);
      await deleteAllMentors();
      await refreshData();
    });
  };

  const handleEditMentor = (mentor: Mentor) => {
    setEditingMentor({ ...mentor });
    setIsFormOpen(true);
    setActiveTab('AZE');
  };

  const handleAddNewMentor = () => {
    setEditingMentor({
      name: '',
      role: { AZE: '', ENG: '', TR: '', RU: '' },
      image: 'https://picsum.photos/400/400',
      social: {} // Initialize empty
    });
    setIsFormOpen(true);
    setActiveTab('AZE');
  };

  const handleMentorRoleChange = (value: string) => {
    setEditingMentor(prev => {
      if (!prev) return prev;
      return {
        ...prev,
        role: {
          ...prev.role,
          [activeTab]: value
        }
      };
    });
  };

  const handleMentorImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
     if (e.target.files && e.target.files[0]) {
      try {
        const base64 = await fileToBase64(e.target.files[0]);
        setEditingMentor(prev => prev ? { ...prev, image: base64 } : null);
      } catch (error) {
        console.error("Error converting file", error);
      }
    }
  };

  const handleMentorSocialChange = (key: keyof SocialLinks, value: string) => {
    setEditingMentor(prev => {
      if (!prev) return prev;
      return {
        ...prev,
        social: {
          ...(prev.social || {}),
          [key]: value
        }
      };
    });
  };

  const handleAddSocial = (platform: string) => {
    if (!platform) return;
    setEditingMentor(prev => {
      if (!prev) return prev;
      return {
        ...prev,
        social: {
          ...(prev.social || {}),
          [platform]: ''
        }
      };
    });
  };

  const handleRemoveSocial = (platform: string) => {
    setEditingMentor(prev => {
      if (!prev) return prev;
      const newSocial = { ...(prev.social || {}) };
      delete newSocial[platform as keyof SocialLinks];
      return {
        ...prev,
        social: newSocial
      };
    });
  };

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'instagram': return <Instagram className="text-pink-500" size={20} />;
      case 'facebook': return <Facebook className="text-blue-500" size={20} />;
      case 'linkedin': return <Linkedin className="text-blue-400" size={20} />;
      case 'x': return <Twitter className="text-white" size={20} />;
      default: return null;
    }
  };

  const handleSaveMentor = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingMentor) return;

    if (!editingMentor.name) {
      triggerAlert("Name is required");
      return;
    }
    const mentorData = { ...editingMentor } as Mentor;
    setIsLoading(true);
    if (mentorData.id) {
      await updateMentor(mentorData);
    } else {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { id, ...rest } = mentorData; 
      await addMentor(rest);
    }
    setIsFormOpen(false);
    setEditingMentor(null);
    await refreshData();
  };

  // --- Settings Handlers ---
  
  // Define strict keys to avoid TS errors mixing boolean and StyledText
  type TextSettingKeys = Exclude<keyof SiteSettings, 'showGame'>;

  const handleSettingsChange = (section: TextSettingKeys, field: keyof StyledText, value: any) => {
    setSiteSettings(prev => {
      if (!prev) return prev;
      return {
        ...prev,
        [section]: {
          ...(prev[section] as StyledText),
          [field]: value
        }
      } as SiteSettings; 
    });
  };

  const handleSettingsTextChange = (section: TextSettingKeys, lang: Language, value: string) => {
    setSiteSettings(prev => {
      if (!prev) return prev;
      return {
        ...prev,
        [section]: {
          ...(prev[section] as StyledText),
          content: {
            ...(prev[section] as StyledText).content,
            [lang]: value
          }
        }
      } as SiteSettings;
    });
  };
  
  const handleBooleanSettingChange = (key: keyof SiteSettings, value: boolean) => {
    setSiteSettings(prev => {
      if (!prev) return prev;
      return {
        ...prev,
        [key]: value
      };
    });
  };

  const handleSaveSettings = async () => {
    if (siteSettings) {
      setIsLoading(true);
      await saveSiteSettings(siteSettings);
      setIsLoading(false);
      triggerAlert(t('admin_settings_saved'));
    }
  };


  // --- UI Components ---

  const AlertModal = () => (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-tech-light p-6 rounded-lg shadow-xl border border-tech-accent/20 max-w-sm w-full text-center animate-fade-in-up">
        <div className="flex justify-center mb-4 text-tech-accent">
          <CheckCircle size={48} />
        </div>
        <p className="text-tech-white mb-6 font-medium">{alertState.message}</p>
        <button 
          onClick={() => setAlertState({ ...alertState, show: false })}
          className="w-full bg-tech-accent text-tech-bg px-6 py-2 rounded font-bold hover:bg-tech-accent/80 transition-colors"
        >
          OK
        </button>
      </div>
    </div>
  );

  const ConfirmModal = () => (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-tech-light p-6 rounded-lg shadow-xl border border-red-500/30 max-w-sm w-full text-center animate-fade-in-up">
        <div className="flex justify-center mb-4 text-red-400">
          <AlertTriangle size={48} />
        </div>
        <p className="text-tech-white mb-6 font-medium">{confirmState.message}</p>
        <div className="flex gap-4">
          <button 
            onClick={() => setConfirmState({ ...confirmState, show: false })}
            className="flex-1 px-4 py-2 rounded border border-tech-slate/30 text-tech-slate hover:bg-tech-slate/10 transition-colors"
          >
            {t('admin_cancel')}
          </button>
          <button 
            onClick={() => {
              confirmState.onConfirm();
              setConfirmState({ ...confirmState, show: false });
            }}
            className="flex-1 bg-red-500 text-white px-4 py-2 rounded font-bold hover:bg-red-600 transition-colors"
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );

  const DbSetupModal = () => (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
       <div className="bg-tech-light w-full max-w-md rounded-lg shadow-2xl p-6 border border-tech-accent/20 custom-scrollbar max-h-[90vh] overflow-y-auto">
         <div className="flex justify-between items-center mb-4 border-b border-tech-slate/20 pb-4">
            <h2 className="text-xl font-bold text-tech-white flex items-center gap-2">
               <Database className="text-tech-accent" />
               {t('db_setup_title')}
            </h2>
            <button onClick={() => setIsDbSetupOpen(false)} className="hover:text-tech-accent transition-colors"><X size={20}/></button>
         </div>
         <p className="text-sm text-tech-slate mb-4 bg-tech-bg p-3 rounded border border-tech-slate/10">
            {t('db_help_text')}
         </p>
         <form onSubmit={handleDbSave} className="space-y-4">
            {Object.keys(dbConfig).map(key => (
               <div key={key}>
                  <label className="block text-xs font-bold mb-1 text-tech-slate uppercase">{t(`db_label_${key.toLowerCase().replace('appid','appid').replace('id','id')}`)}</label>
                  <input 
                    required
                    className="w-full p-2 rounded bg-tech-bg border border-tech-slate/30 focus:border-tech-accent outline-none text-sm font-mono text-tech-white"
                    value={dbConfig[key as keyof typeof dbConfig]}
                    onChange={e => setDbConfig({...dbConfig, [key]: e.target.value})}
                  />
               </div>
            ))}
            <div className="pt-4">
               <button type="submit" className="w-full bg-tech-accent text-tech-bg font-bold py-3 rounded hover:bg-tech-accent/80 transition-colors">
                  {t('admin_save')} & Reload
               </button>
            </div>
         </form>
       </div>
    </div>
  );

  const SettingSection = ({ 
    sectionKey, 
    title 
  }: { 
    sectionKey: TextSettingKeys; 
    title: string; 
  }) => {
    if (!siteSettings) return null;
    // Type guard to ensure we are working with StyledText
    const setting = siteSettings[sectionKey] as StyledText;
    
    if (!setting || !setting.content) return null;

    return (
      <div className="bg-tech-light p-6 rounded-lg border border-tech-slate/10 mb-6">
        <h3 className="text-xl font-bold text-tech-white mb-4 flex items-center gap-2">
          <Type size={20} className="text-tech-accent" />
          {title}
        </h3>
        
        <div className="space-y-4">
          {/* Text Inputs per Language */}
          <div>
             <label className="block text-sm font-bold mb-2 text-tech-slate">{t('label_text')} ({activeTab})</label>
             <input
               className="w-full p-3 rounded bg-tech-bg border border-tech-slate/30 focus:border-tech-accent outline-none text-tech-white"
               value={setting.content[activeTab]}
               onChange={(e) => handleSettingsTextChange(sectionKey, activeTab, e.target.value)}
             />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             {/* Color Picker */}
             <div>
                <label className="block text-sm font-bold mb-2 text-tech-slate flex items-center gap-2">
                  <Palette size={16} /> {t('label_color')}
                </label>
                <div className="flex gap-2">
                  <input 
                    type="color"
                    value={setting.color}
                    onChange={(e) => handleSettingsChange(sectionKey, 'color', e.target.value)}
                    className="h-10 w-10 rounded cursor-pointer border-none bg-transparent"
                  />
                  <input 
                    type="text"
                    value={setting.color}
                    onChange={(e) => handleSettingsChange(sectionKey, 'color', e.target.value)}
                    className="flex-1 p-2 rounded bg-tech-bg border border-tech-slate/30 focus:border-tech-accent outline-none text-tech-white font-mono uppercase"
                  />
                </div>
             </div>
             {/* Font Size */}
             <div>
                <label className="block text-sm font-bold mb-2 text-tech-slate">{t('label_size')}</label>
                <input 
                  type="text"
                  value={setting.fontSize}
                  onChange={(e) => handleSettingsChange(sectionKey, 'fontSize', e.target.value)}
                  placeholder="e.g. 24px, 2rem"
                  className="w-full p-2 rounded bg-tech-bg border border-tech-slate/30 focus:border-tech-accent outline-none text-tech-white"
                />
             </div>
          </div>
        </div>
      </div>
    );
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-tech-bg p-4">
        <div className="w-full max-w-md">
          {/* Database Status Banner on Login */}
          {!isFirebaseConfigured && (
            <div className="mb-6 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg text-yellow-200 text-center">
              <div className="flex justify-center mb-2"><WifiOff size={24} /></div>
              <p className="text-sm font-bold mb-3">{t('db_status_disconnected')}</p>
              <button 
                onClick={() => setIsDbSetupOpen(true)}
                className="bg-yellow-500/20 hover:bg-yellow-500/30 text-yellow-200 px-4 py-2 rounded text-sm border border-yellow-500/30 transition-colors"
              >
                {t('db_btn_connect')}
              </button>
            </div>
          )}

          <form onSubmit={handleLogin} className="bg-tech-light p-8 rounded-lg shadow-xl border border-tech-accent/20 mb-4">
            <div className="flex justify-center mb-6 text-tech-accent">
              <Lock size={48} />
            </div>
            <h2 className="text-2xl font-bold text-center text-tech-white mb-6">{t('admin_login_title')}</h2>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full p-3 bg-tech-bg border border-tech-slate/30 rounded text-tech-white mb-4 focus:border-tech-accent outline-none"
            />
            <button type="submit" className="w-full bg-tech-accent/20 text-tech-accent py-3 rounded hover:bg-tech-accent/30 transition-colors font-bold">
              {t('admin_login_btn')}
            </button>
          </form>
        </div>
        {alertState.show && <AlertModal />}
        {isDbSetupOpen && <DbSetupModal />}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-tech-bg text-tech-slate p-4 md:p-8 relative">
      {alertState.show && <AlertModal />}
      {confirmState.show && <ConfirmModal />}
      {isDbSetupOpen && <DbSetupModal />}
      
      {isLoading && (
        <div className="fixed inset-0 z-[200] bg-black/50 backdrop-blur-sm flex items-center justify-center">
          <Loader2 size={48} className="text-tech-accent animate-spin" />
        </div>
      )}

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold text-tech-white">{t('admin_dashboard')}</h1>
            
             {/* DB Status Indicator */}
             <div className="flex items-center gap-2 text-xs">
                {isFirebaseConfigured ? (
                  <span className="flex items-center text-green-400 gap-1 bg-green-500/10 px-2 py-1 rounded border border-green-500/20">
                    <Database size={12} /> {t('db_status_connected')}
                  </span>
                ) : (
                  <button onClick={() => setIsDbSetupOpen(true)} className="flex items-center text-yellow-400 gap-1 bg-yellow-500/10 px-2 py-1 rounded border border-yellow-500/20 hover:bg-yellow-500/20 cursor-pointer">
                    <WifiOff size={12} /> {t('db_status_disconnected')} - {t('db_btn_connect')}
                  </button>
                )}
             </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4">
            {/* View Switcher */}
            <div className="flex bg-tech-light rounded-lg p-1 border border-tech-slate/20 overflow-x-auto w-full md:w-auto">
              <button
                onClick={() => setViewMode('projects')}
                className={`flex-1 md:flex-none px-4 py-2 rounded font-bold text-sm flex items-center justify-center gap-2 transition-colors whitespace-nowrap ${
                  viewMode === 'projects' ? 'bg-tech-accent text-tech-bg' : 'text-tech-slate hover:text-tech-white'
                }`}
              >
                <Briefcase size={16} />
                {t('admin_view_projects')}
              </button>
              <button
                onClick={() => setViewMode('mentors')}
                className={`flex-1 md:flex-none px-4 py-2 rounded font-bold text-sm flex items-center justify-center gap-2 transition-colors whitespace-nowrap ${
                  viewMode === 'mentors' ? 'bg-tech-accent text-tech-bg' : 'text-tech-slate hover:text-tech-white'
                }`}
              >
                <Users size={16} />
                {t('admin_view_mentors')}
              </button>
              <button
                onClick={() => setViewMode('settings')}
                className={`flex-1 md:flex-none px-4 py-2 rounded font-bold text-sm flex items-center justify-center gap-2 transition-colors whitespace-nowrap ${
                  viewMode === 'settings' ? 'bg-tech-accent text-tech-bg' : 'text-tech-slate hover:text-tech-white'
                }`}
              >
                <Settings size={16} />
                {t('admin_view_settings')}
              </button>
            </div>

            <div className="flex gap-2 flex-wrap justify-center md:justify-end">
              {viewMode !== 'settings' && (
                <button 
                  onClick={viewMode === 'projects' ? handleDeleteAllProjects : handleDeleteAllMentors}
                  className="flex items-center px-4 py-2 border border-red-500/50 text-red-400 rounded hover:bg-red-500/10 transition-colors"
                >
                  <Trash2 size={18} className="mr-2" />
                  {t('admin_delete_all')}
                </button>
              )}
              <button 
                onClick={handleExport}
                className="flex items-center px-4 py-2 border border-tech-slate/50 rounded hover:bg-tech-light transition-colors"
              >
                <Download size={18} className="mr-2" />
                {t('admin_copy_json')}
              </button>
              {viewMode !== 'settings' && (
                <button 
                  onClick={viewMode === 'projects' ? handleAddNewProject : handleAddNewMentor}
                  className="flex items-center px-4 py-2 bg-tech-accent text-tech-bg font-bold rounded hover:bg-tech-accent/80 transition-colors"
                >
                  <Plus size={18} className="mr-2" />
                  {viewMode === 'projects' ? t('admin_add_project') : t('admin_add_mentor')}
                </button>
              )}
            </div>
          </div>
        </div>

        {/* PROJECTS LIST */}
        {viewMode === 'projects' && (
          <div className="grid gap-4">
            {projects.length === 0 && !isLoading && (
              <div className="text-center py-12 bg-tech-light/50 rounded border border-dashed border-tech-slate/20">
                <AlertTriangle size={48} className="mx-auto mb-4 text-tech-slate/50" />
                <p>{t('admin_no_projects_msg')}</p>
              </div>
            )}
            
            {projects.map((project) => (
              <div key={project.id} className="bg-tech-light p-4 rounded border border-tech-slate/10 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-4 flex-1">
                  <img src={project.image} alt="" className="w-16 h-16 object-cover rounded" />
                  {project.logo && <img src={project.logo} alt="" className="w-10 h-10 object-contain rounded-full border border-tech-slate/30" />}
                  <div>
                    <h3 className="font-bold text-tech-white">{project.teamName['AZE']}</h3>
                    <p className="text-sm text-tech-slate/70 truncate max-w-md">{project.shortDescription['AZE']}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => handleEditProject(project)} className="p-2 hover:text-tech-accent transition-colors">
                    <Edit size={18} />
                  </button>
                  <button onClick={(e) => handleDeleteProject(project.id, e)} className="p-2 hover:text-red-400 transition-colors">
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* MENTORS LIST */}
        {viewMode === 'mentors' && (
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
             {mentors.length === 0 && !isLoading && (
               <div className="col-span-full text-center py-12 bg-tech-light/50 rounded border border-dashed border-tech-slate/20">
                 <Users size={48} className="mx-auto mb-4 text-tech-slate/50" />
                 <p>No mentors found.</p>
               </div>
             )}

             {mentors.map((mentor) => (
                <div key={mentor.id} className="bg-tech-light p-4 rounded border border-tech-slate/10 flex flex-col gap-4 relative group">
                   <div className="flex items-center gap-4">
                      <img src={mentor.image} alt="" className="w-16 h-16 object-cover rounded-full border border-tech-accent/30" />
                      <div>
                         <h3 className="font-bold text-tech-white">{mentor.name}</h3>
                         <p className="text-sm text-tech-slate/70">{mentor.role['AZE']}</p>
                      </div>
                   </div>
                   <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity bg-tech-bg/80 rounded p-1">
                      <button onClick={() => handleEditMentor(mentor)} className="p-1 hover:text-tech-accent transition-colors">
                        <Edit size={16} />
                      </button>
                      <button onClick={(e) => handleDeleteMentor(mentor.id, e)} className="p-1 hover:text-red-400 transition-colors">
                        <Trash2 size={16} />
                      </button>
                   </div>
                   <div className="flex gap-3 text-tech-slate/50 mt-2 border-t border-tech-slate/10 pt-2 justify-center">
                      {mentor.social.instagram && <Instagram size={16} className="text-pink-500" />}
                      {mentor.social.facebook && <Facebook size={16} className="text-blue-500" />}
                      {mentor.social.linkedin && <Linkedin size={16} className="text-blue-400" />}
                      {mentor.social.x && <Twitter size={16} className="text-white" />}
                   </div>
                </div>
             ))}
           </div>
        )}

        {/* SETTINGS FORM */}
        {viewMode === 'settings' && siteSettings && (
          <div className="animate-fade-in-up">
             <div className="flex justify-between items-center mb-6">
               <h2 className="text-2xl font-bold text-tech-white">{t('admin_settings_title')}</h2>
               <div className="flex gap-2">
                  {languages.map(lang => (
                    <button
                      key={lang}
                      onClick={() => setActiveTab(lang)}
                      className={`px-4 py-2 rounded font-bold transition-colors ${
                        activeTab === lang 
                          ? 'bg-tech-accent text-tech-bg' 
                          : 'bg-tech-light text-tech-slate border border-tech-slate/20'
                      }`}
                    >
                      {lang}
                    </button>
                  ))}
               </div>
             </div>

             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                 {/* Connection Status */}
                 <div className="col-span-full bg-tech-light p-6 rounded-lg border border-tech-slate/10 mb-6 flex justify-between items-center">
                    <div>
                        <h3 className="text-lg text-tech-accent font-bold mb-1">Database Status</h3>
                        <p className={`text-sm ${isFirebaseConfigured ? 'text-green-400' : 'text-yellow-400'}`}>
                           {isFirebaseConfigured ? t('db_status_connected') : t('db_status_disconnected')}
                        </p>
                    </div>
                    {isFirebaseConfigured ? (
                       <button onClick={resetFirebaseConfig} className="bg-red-500/10 hover:bg-red-500/20 text-red-400 px-4 py-2 rounded text-sm border border-red-500/30">
                          {t('db_btn_disconnect')}
                       </button>
                    ) : (
                       <button onClick={() => setIsDbSetupOpen(true)} className="bg-tech-accent text-tech-bg px-4 py-2 rounded font-bold hover:bg-tech-accent/80">
                          {t('db_btn_connect')}
                       </button>
                    )}
                 </div>

                {/* General Settings */}
                 <div className="col-span-full bg-tech-light p-6 rounded-lg border border-tech-slate/10 mb-6">
                     <h3 className="text-lg text-tech-accent border-b border-tech-accent/20 pb-2 uppercase tracking-wider font-bold mb-4">General Features</h3>
                     <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                           <span className="text-tech-white font-bold">{t('label_show_game')}</span>
                        </div>
                        <button 
                           onClick={() => handleBooleanSettingChange('showGame', !siteSettings.showGame)}
                           className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${siteSettings.showGame ? 'bg-tech-accent' : 'bg-tech-bg border border-tech-slate/30'}`}
                        >
                           <div className={`absolute top-1 left-1 w-5 h-5 rounded-full bg-white transition-transform duration-300 ${siteSettings.showGame ? 'translate-x-7' : 'translate-x-0'}`}></div>
                        </button>
                     </div>
                 </div>

                {/* Hero Settings */}
                <div className="space-y-6">
                   <h3 className="text-lg text-tech-accent border-b border-tech-accent/20 pb-2 uppercase tracking-wider font-bold">Hero Section</h3>
                   <SettingSection sectionKey="heroTitle" title={t('label_hero_title')} />
                   <SettingSection sectionKey="heroSubtitle" title={t('label_hero_subtitle')} />
                </div>

                {/* Logo Settings */}
                <div className="space-y-6">
                   <h3 className="text-lg text-tech-accent border-b border-tech-accent/20 pb-2 uppercase tracking-wider font-bold">Navbar Logo</h3>
                   <SettingSection sectionKey="logoTop" title={t('label_logo_top')} />
                   <SettingSection sectionKey="logoMiddle" title={t('label_logo_middle')} />
                   <SettingSection sectionKey="logoBottom" title={t('label_logo_bottom')} />
                </div>
             </div>

             <div className="mt-8 flex justify-end">
               <button 
                 onClick={handleSaveSettings}
                 className="px-8 py-3 bg-tech-accent text-tech-bg font-bold rounded hover:bg-tech-accent/80 flex items-center shadow-lg shadow-tech-accent/20 transition-all"
               >
                 <Save size={20} className="mr-2" />
                 {t('admin_save')}
               </button>
             </div>
          </div>
        )}

        {/* PROJECT FORM MODAL */}
        {isFormOpen && viewMode === 'projects' && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="bg-tech-light w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-lg shadow-2xl p-6 border border-tech-accent/20 custom-scrollbar">
              <div className="flex justify-between items-center mb-6 border-b border-tech-slate/20 pb-4">
                <h2 className="text-2xl font-bold text-tech-white">
                  {editingProject?.id ? t('admin_edit_project') : t('admin_new_project')}
                </h2>
                <button onClick={() => setIsFormOpen(false)} className="hover:text-tech-accent transition-colors">
                  <X size={24} />
                </button>
              </div>
              
              <form onSubmit={handleSaveProject} className="space-y-6">
                <div className="flex gap-2 border-b border-tech-slate/20 pb-2 mb-4">
                  {languages.map(lang => (
                    <button
                      type="button"
                      key={lang}
                      onClick={() => setActiveTab(lang)}
                      className={`px-4 py-2 rounded-t font-bold transition-colors ${
                        activeTab === lang 
                          ? 'bg-tech-accent text-tech-bg' 
                          : 'bg-tech-bg text-tech-slate hover:text-tech-white'
                      }`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-bold mb-2 text-tech-white">
                        {t('label_team_name')} ({activeTab})
                      </label>
                      <input 
                        required
                        className="w-full p-3 rounded bg-tech-bg border border-tech-slate/30 focus:border-tech-accent outline-none transition-colors focus:ring-1 focus:ring-tech-accent"
                        value={editingProject?.teamName?.[activeTab] || ''}
                        onChange={e => handleProjectTextChange('teamName', e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold mb-2 text-tech-white">
                        {t('label_short_desc')} ({activeTab})
                      </label>
                      <input 
                        required
                        className="w-full p-3 rounded bg-tech-bg border border-tech-slate/30 focus:border-tech-accent outline-none transition-colors focus:ring-1 focus:ring-tech-accent"
                        value={editingProject?.shortDescription?.[activeTab] || ''}
                        onChange={e => handleProjectTextChange('shortDescription', e.target.value)}
                      />
                    </div>
                     <div>
                      <label className="block text-sm font-bold mb-2 text-tech-slate/50 text-xs">{t('label_link')} (Optional)</label>
                      <input 
                        className="w-full p-2 rounded bg-tech-bg border border-tech-slate/20 focus:border-tech-accent outline-none transition-colors font-mono text-xs text-tech-slate"
                        value={editingProject?.projectLink || ''}
                        onChange={e => setEditingProject(prev => (prev ? {...prev, projectLink: e.target.value} : null))}
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    {/* Image Upload */}
                    <div>
                      <label className="block text-sm font-bold mb-2 text-tech-white">{t('label_image')}</label>
                      <div className="flex gap-2">
                         <div className="relative w-full h-32 bg-tech-bg rounded border border-tech-slate/30 overflow-hidden flex items-center justify-center">
                          {editingProject?.image ? (
                            <img src={editingProject.image} alt="Preview" className="w-full h-full object-cover" />
                          ) : (
                            <ImageIcon size={32} className="text-tech-slate/40" />
                          )}
                        </div>
                        <div className="flex flex-col justify-center">
                           <input 
                            type="file" 
                            accept="image/*"
                            onChange={handleProjectImageUpload}
                            className="hidden"
                            id="main-image-upload"
                          />
                          <label 
                            htmlFor="main-image-upload"
                            className="flex items-center justify-center p-3 bg-tech-bg border border-dashed border-tech-accent/50 rounded cursor-pointer hover:bg-tech-accent/10 transition-colors"
                          >
                            <Upload size={18} className="text-tech-accent" />
                          </label>
                        </div>
                      </div>
                    </div>

                     {/* Logo Upload */}
                     <div>
                      <label className="block text-sm font-bold mb-2 text-tech-white">{t('label_logo')}</label>
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-tech-bg rounded-full border border-tech-slate/30 overflow-hidden flex items-center justify-center">
                          {editingProject?.logo ? (
                            <img src={editingProject.logo} alt="Logo" className="w-full h-full object-contain" />
                          ) : (
                            <span className="text-xs text-tech-slate/50">No Logo</span>
                          )}
                        </div>
                        <input 
                            type="file" 
                            accept="image/*"
                            onChange={handleProjectLogoUpload}
                            className="hidden"
                            id="logo-upload"
                          />
                          <label 
                            htmlFor="logo-upload"
                            className="px-4 py-2 bg-tech-bg border border-dashed border-tech-accent/50 rounded cursor-pointer hover:bg-tech-accent/10 transition-colors text-sm font-bold text-tech-accent"
                          >
                            {t('btn_upload')}
                          </label>
                      </div>
                     </div>

                    {/* Video Upload */}
                    <div>
                       <label className="block text-sm font-bold mb-2 text-tech-white">{t('label_video')}</label>
                       <div className="relative">
                        <input 
                          type="file" 
                          accept="video/*"
                          onChange={handleProjectVideoUpload}
                          className="hidden"
                          id="video-upload"
                        />
                        <label 
                          htmlFor="video-upload"
                          className="flex items-center justify-center w-full p-2 bg-tech-bg border border-dashed border-tech-accent/50 rounded cursor-pointer hover:bg-tech-accent/10 transition-colors"
                        >
                          <Video size={18} className="mr-2 text-tech-accent" />
                          <span className="text-sm font-bold text-tech-accent">{t('btn_upload_video')}</span>
                        </label>
                      </div>
                      {editingProject?.video && (
                         <div className="mt-2 p-2 bg-tech-bg border border-green-500/30 rounded text-green-400 text-xs flex items-center justify-center">
                            <Video size={14} className="mr-2" />
                            {t('video_preview')}
                         </div>
                      )}
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2 text-tech-white">
                    {t('label_long_desc')} ({activeTab})
                  </label>
                  <textarea 
                    required
                    rows={4}
                    className="w-full p-3 rounded bg-tech-bg border border-tech-slate/30 focus:border-tech-accent outline-none transition-colors focus:ring-1 focus:ring-tech-accent"
                    value={editingProject?.longDescription?.[activeTab] || ''}
                    onChange={e => handleProjectTextChange('longDescription', e.target.value)}
                  />
                </div>

                <div className="border-t border-tech-slate/10 pt-4">
                   <label className="block text-sm font-bold mb-2 text-tech-white">{t('label_gallery')}</label>
                   <div className="mb-4">
                      <input 
                          type="file" 
                          accept="image/*"
                          multiple
                          onChange={handleProjectGalleryUpload}
                          className="hidden"
                          id="gallery-upload"
                        />
                        <label 
                          htmlFor="gallery-upload"
                          className="inline-flex items-center px-4 py-2 bg-tech-bg border border-dashed border-tech-accent/50 rounded cursor-pointer hover:bg-tech-accent/10 transition-colors"
                        >
                          <Upload size={18} className="mr-2 text-tech-accent" />
                          <span className="text-sm font-bold text-tech-accent">{t('btn_upload_multi')}</span>
                        </label>
                   </div>
                   {editingProject?.gallery && editingProject.gallery.length > 0 && (
                     <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
                       {editingProject.gallery.map((img, idx) => (
                         <div key={idx} className="relative group aspect-square bg-tech-bg rounded overflow-hidden border border-tech-slate/20">
                            <img src={img} alt="Gallery" className="w-full h-full object-cover" />
                            <button
                              type="button"
                              onClick={() => removeGalleryImage(idx)}
                              className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <XCircle size={14} />
                            </button>
                         </div>
                       ))}
                     </div>
                   )}
                </div>

                <div className="border-t border-tech-slate/10 pt-4">
                  <label className="block text-sm font-bold mb-2 text-tech-white">{t('label_members')}</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {(editingProject?.members as string[] || []).map((member, idx) => (
                      <div key={idx} className="flex gap-2">
                        <input
                          className="flex-1 p-2 rounded bg-tech-bg border border-tech-slate/30 focus:border-tech-accent outline-none text-sm"
                          value={member}
                          onChange={(e) => handleMemberChange(idx, e.target.value)}
                          placeholder={t('admin_member_placeholder')}
                        />
                        <button 
                          type="button" 
                          onClick={() => handleRemoveMember(idx)}
                          className="p-2 text-red-400 hover:bg-red-400/10 rounded border border-tech-slate/30 transition-colors"
                        >
                          <X size={18} />
                        </button>
                      </div>
                    ))}
                    <button 
                      type="button"
                      onClick={handleAddMember}
                      className="flex items-center justify-center p-2 border border-dashed border-tech-accent/50 text-tech-accent rounded hover:bg-tech-accent/10 transition-colors text-sm font-bold"
                    >
                      <Plus size={16} className="mr-2" /> {t('add_member')}
                    </button>
                  </div>
                </div>

                <div className="pt-6 flex justify-end gap-4 border-t border-tech-slate/20 mt-6">
                  <button type="button" onClick={() => setIsFormOpen(false)} className="px-6 py-2 hover:text-white transition-colors">{t('admin_cancel')}</button>
                  <button type="submit" className="px-8 py-2 bg-tech-accent text-tech-bg font-bold rounded hover:bg-tech-accent/80 flex items-center shadow-lg shadow-tech-accent/20 transition-all">
                    <Save size={18} className="mr-2" />
                    {t('admin_save')}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* MENTOR FORM MODAL */}
        {isFormOpen && viewMode === 'mentors' && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="bg-tech-light w-full max-w-lg rounded-lg shadow-2xl p-6 border border-tech-accent/20">
              <div className="flex justify-between items-center mb-6 border-b border-tech-slate/20 pb-4">
                <h2 className="text-2xl font-bold text-tech-white">
                  {editingMentor?.id ? t('admin_edit_mentor') : t('admin_add_mentor')}
                </h2>
                <button onClick={() => setIsFormOpen(false)} className="hover:text-tech-accent transition-colors">
                  <X size={24} />
                </button>
              </div>

              <form onSubmit={handleSaveMentor} className="space-y-4">
                 {/* Image Upload */}
                 <div className="flex items-center gap-4 mb-6">
                     <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-tech-accent/50 bg-tech-bg group">
                        <img src={editingMentor?.image} alt="Avatar" className="w-full h-full object-cover" />
                         <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                           <Upload size={20} className="text-white" />
                         </div>
                         <input 
                          type="file" 
                          accept="image/*"
                          onChange={handleMentorImageUpload}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                     </div>
                     <div className="flex-1">
                        <label className="block text-sm font-bold mb-1 text-tech-white">{t('label_name')}</label>
                        <input 
                          required
                          className="w-full p-2 rounded bg-tech-bg border border-tech-slate/30 focus:border-tech-accent outline-none"
                          value={editingMentor?.name || ''}
                          onChange={e => setEditingMentor(prev => prev ? {...prev, name: e.target.value} : null)}
                        />
                     </div>
                 </div>

                 {/* Roles Tabs */}
                 <div>
                   <div className="flex gap-2 mb-2">
                      {languages.map(lang => (
                        <button
                          type="button"
                          key={lang}
                          onClick={() => setActiveTab(lang)}
                          className={`text-xs px-3 py-1 rounded transition-colors ${
                            activeTab === lang 
                              ? 'bg-tech-accent text-tech-bg font-bold' 
                              : 'bg-tech-bg text-tech-slate border border-tech-slate/20'
                          }`}
                        >
                          {lang}
                        </button>
                      ))}
                   </div>
                   <label className="block text-sm font-bold mb-1 text-tech-white">{t('label_role')} ({activeTab})</label>
                   <input 
                      required
                      className="w-full p-2 rounded bg-tech-bg border border-tech-slate/30 focus:border-tech-accent outline-none"
                      value={editingMentor?.role?.[activeTab] || ''}
                      onChange={e => handleMentorRoleChange(e.target.value)}
                   />
                 </div>

                 {/* Dynamic Socials */}
                 <div className="pt-4 border-t border-tech-slate/10">
                    <label className="block text-sm font-bold mb-3 text-tech-white">{t('label_socials')}</label>
                    
                    <div className="space-y-3">
                      {Object.entries(editingMentor?.social || {}).map(([platform, url]) => (
                        <div key={platform} className="flex items-center gap-3">
                          <div className="w-6 flex justify-center">
                            {getSocialIcon(platform)}
                          </div>
                          <input 
                            className="flex-1 p-2 rounded bg-tech-bg border border-tech-slate/20 text-sm focus:border-tech-accent outline-none"
                            placeholder={`${platform.charAt(0).toUpperCase() + platform.slice(1)} URL`}
                            value={url}
                            onChange={e => handleMentorSocialChange(platform as keyof SocialLinks, e.target.value)}
                          />
                          <button 
                            type="button"
                            onClick={() => handleRemoveSocial(platform)}
                            className="p-2 text-red-400 hover:bg-red-400/10 rounded transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      ))}
                    </div>

                    {/* Add Social Button */}
                    {availableSocialPlatforms.filter(p => !Object.keys(editingMentor?.social || {}).includes(p)).length > 0 && (
                      <div className="mt-4 flex gap-2">
                         <select 
                            className="p-2 rounded bg-tech-bg border border-tech-slate/30 text-sm focus:border-tech-accent outline-none"
                            value=""
                            onChange={(e) => handleAddSocial(e.target.value)}
                         >
                            <option value="" disabled>{t('admin_add_social_link')}</option>
                            {availableSocialPlatforms
                               .filter(p => !Object.keys(editingMentor?.social || {}).includes(p))
                               .map(p => (
                                 <option key={p} value={p}>{p.charAt(0).toUpperCase() + p.slice(1)}</option>
                               ))
                            }
                         </select>
                      </div>
                    )}
                 </div>

                 <div className="pt-6 flex justify-end gap-4 mt-6">
                  <button type="button" onClick={() => setIsFormOpen(false)} className="px-4 py-2 hover:text-white transition-colors">{t('admin_cancel')}</button>
                  <button type="submit" className="px-6 py-2 bg-tech-accent text-tech-bg font-bold rounded hover:bg-tech-accent/80 flex items-center shadow-lg shadow-tech-accent/20 transition-all">
                    <Save size={18} className="mr-2" />
                    {t('admin_save')}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
