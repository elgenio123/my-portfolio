/** LinkedIn's vocabulary, so the site matches the profile. */
export type WorkArrangement = 'On-site' | 'Remote' | 'Hybrid';

export interface Experience {
  company: string;
  location: string;
  position: string;
  period: string;
  arrangement: WorkArrangement;
  description: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  grade: string;
  /** Thesis title, shown as a highlighted line on the card when present. */
  thesis?: string;
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
