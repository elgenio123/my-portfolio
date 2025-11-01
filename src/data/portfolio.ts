import { Experience, Education, Project, ContactInfo } from '../types';

export const experience: Experience[] = [
  {
    company: 'AFRICA SYSTEMS',
    location: 'New York, USA',
    position: 'Machine Learning Engineer',
    period: 'Aug 2024 – Jan 2025',
    description:
      'Contributed to developing a predictive model for vehicle parking behavior, involving data analysis, feature engineering, and ML-based anomaly detection.',
  },
  {
    company: 'Technohack Edutech',
    location: 'Nashik, India',
    position: 'Machine Learning Engineer Intern',
    period: 'Dec 2023 – Jan 2024',
    description:
      'Developed regression and classification models using Decision Trees, Random Forests, and MLPs for applied ML tasks.',
  },
];

export const education: Education[] = [
  {
    institution: 'University of Dschang',
    degree: "Master's 2 in Fundamental Computer Science (AI)",
    period: '2024–2025',
    grade: 'B',
  },
  {
    institution: 'University of Dschang',
    degree: "Master's 1 in Mathematics and Computer Science (AI)",
    period: '2023–2024',
    grade: 'C',
  },
  {
    institution: 'University of Dschang',
    degree: "Bachelor's in Mathematics and Computer Science",
    period: '2019–2023',
    grade: 'C',
  },
];

export const projects: Project[] = [
  {
    title: 'Dynamic Adversarial Modeling for IDS in IoT',
    description:
      'Master\'s research project focusing on developing advanced intrusion detection systems for IoT environments using dynamic adversarial modeling techniques.',
    technologies: ['Python', 'Machine Learning', 'IoT Security', 'Deep Learning'],
  },
  {
    title: 'Vehicle Parking Pattern Prediction',
    description:
      'Predictive model analyzing vehicle parking behavior patterns using machine learning algorithms for anomaly detection and behavior prediction.',
    technologies: ['Python', 'Scikit-learn', 'Data Analysis', 'Feature Engineering'],
  },
  {
    title: 'Personal Blog',
    description:
      'A personal blog platform showcasing technical articles, research insights, and thoughts on AI and software development.',
    link: 'https://my-blog-q89q.onrender.com',
    technologies: ['Ruby', 'Jekyll', 'Web Development'],
  },
];

export const skills = {
  programming: ['Python', 'JavaScript', 'Java', 'PHP', 'Ruby'],
  frameworks: ['React', 'Spring', 'Laravel', 'Jekyll'],
  tools: ['Git', 'AWS', 'Linux', 'CI/CD'],
  databases: ['MySQL', 'PostgreSQL'],
  areas: ['Machine Learning', 'AI', 'System Security', 'Automation'],
  languages: ['English', 'French'],
};

export const contactInfo: ContactInfo = {
  location: 'Limbe, Cameroon',
  phone: '+237 691586487',
  email: 'geniekamaha@gmail.com',
  website: 'genie-tchabet.online',
  github: 'https://github.com/elgenio123',
  linkedin: 'https://www.linkedin.com/in/genie-tchabet',
};
