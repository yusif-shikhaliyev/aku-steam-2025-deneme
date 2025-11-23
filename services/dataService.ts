import { Project, Mentor, SiteSettings } from '../types';
import { INITIAL_PROJECTS, INITIAL_MENTORS, INITIAL_SITE_SETTINGS, INITIAL_GALLERY, INITIAL_VIDEOS } from '../constants';

// --- Projects ---

export const getProjects = async (): Promise<Project[]> => {
  return Promise.resolve(INITIAL_PROJECTS);
};

export const addProject = async (projectData: Omit<Project, 'id'>): Promise<Project> => {
  console.warn("Static Mode: addProject does nothing persistent.");
  return Promise.resolve({ ...projectData, id: Date.now() });
};

export const updateProject = async (updatedProject: Project): Promise<void> => {
  console.warn("Static Mode: updateProject does nothing persistent.");
  return Promise.resolve();
};

export const deleteProject = async (id: number): Promise<void> => {
  console.warn("Static Mode: deleteProject does nothing persistent.");
  return Promise.resolve();
};

export const deleteAllProjects = async (): Promise<void> => {
  return Promise.resolve();
};

// --- Mentors ---

export const getMentors = async (): Promise<Mentor[]> => {
  return Promise.resolve(INITIAL_MENTORS);
};

export const addMentor = async (mentorData: Omit<Mentor, 'id'>): Promise<Mentor> => {
  return Promise.resolve({ ...mentorData, id: Date.now() });
};

export const updateMentor = async (updatedMentor: Mentor): Promise<void> => {
  return Promise.resolve();
};

export const deleteMentor = async (id: number): Promise<void> => {
  return Promise.resolve();
};

export const deleteAllMentors = async (): Promise<void> => {
  return Promise.resolve();
};

// --- Site Settings ---

export const getSiteSettings = async (): Promise<SiteSettings> => {
  return Promise.resolve(INITIAL_SITE_SETTINGS);
};

export const saveSiteSettings = async (settings: SiteSettings): Promise<void> => {
  console.warn("Static Mode: saveSiteSettings does nothing persistent.");
  return Promise.resolve();
};

// --- Gallery & Videos ---

export const getGeneralGallery = async (): Promise<string[]> => {
  return Promise.resolve(INITIAL_GALLERY);
};

export const getGeneralVideos = async (): Promise<string[]> => {
  return Promise.resolve(INITIAL_VIDEOS);
};

// Export Helper
export const exportDatabase = async (): Promise<string> => {
  return JSON.stringify({
    projects: INITIAL_PROJECTS,
    mentors: INITIAL_MENTORS,
    settings: INITIAL_SITE_SETTINGS,
    gallery: INITIAL_GALLERY,
    videos: INITIAL_VIDEOS
  }, null, 2);
};
