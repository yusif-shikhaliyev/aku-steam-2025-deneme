
export type Language = 'AZE' | 'ENG' | 'TR' | 'RU';

export interface LocalizedText {
  AZE: string;
  ENG: string;
  TR: string;
  RU: string;
}

export interface StyledText {
  content: LocalizedText;
  color: string;
  fontSize: string;
}

export interface SiteSettings {
  heroTitle: StyledText;
  heroSubtitle: StyledText;
  logoTop: StyledText;
  logoMiddle: StyledText;
  logoBottom: StyledText;
  showGame: boolean;
}

export interface Project {
  id: number;
  teamName: LocalizedText;
  logo?: string;
  image: string;
  shortDescription: LocalizedText;
  longDescription: LocalizedText;
  members: string[];
  projectLink: string;
  gallery?: string[];
  video?: string;
}

export interface SocialLinks {
  linkedin?: string;
  facebook?: string;
  instagram?: string;
  x?: string;
}

export interface Mentor {
  id: number;
  name: string;
  role: LocalizedText;
  image: string;
  social: SocialLinks;
}

export interface AdminState {
  isAuthenticated: boolean;
}