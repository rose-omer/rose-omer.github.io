export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  category: string;
  features: string[];
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
  category: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface Education {
  id: string;
  degree: string;
  school: string;
  period: string;
  description?: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date?: string;
}

export interface Reference {
  id: string;
  name: string;
  role: string;
  company: string;
  email?: string;
  phone?: string;
  location?: string;
}

export interface ProfileData {
  name: string;
  title: string;
  role: string;
  tagline: string;
  bio: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  medium?: string;
  cvUrl?: string;
  location: string;
  projects: Project[];
  skills: Skill[];
  experience: Experience[];
  education: Education[];
  certificates: Certificate[];
  references: Reference[];
}
