export interface Experience {
  company: string;
  location: string;
  position: string;
  period: string;
  description: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  grade: string;
}

export interface Project {
  title: string;
  description: string;
  link?: string;
  technologies: string[];
}

export interface ContactInfo {
  location: string;
  phone: string;
  email: string;
  website: string;
  github: string;
  linkedin: string;
}
