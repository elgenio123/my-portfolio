import { Experience, Education, Project, ContactInfo } from '../types';

export const experience: Experience[] = [
  {
    company: 'AIMS Research and Innovation Centre (RIC)',
    location: 'Kigali, Rwanda',
    position: 'Software Engineer Intern',
    period: 'Jul 2026 – Present',
    arrangement: 'On-site',
    description:
      "Internship phase of the AIMS cooperative Master's in Data Science, building and maintaining software for research and innovation projects.",
  },
  {
    company: 'AFRICA SYSTEMS',
    location: 'New York, USA',
    position: 'Machine Learning Engineer',
    period: 'Aug 2024 – Jan 2025',
    arrangement: 'Remote',
    description:
      'Contributed to developing a predictive model for vehicle parking behavior, involving data analysis, feature engineering, and ML-based anomaly detection.',
  },
  {
    company: 'Technohack Edutech',
    location: 'Nashik, India',
    position: 'Machine Learning Engineer Intern',
    period: 'Dec 2023 – Jan 2024',
    arrangement: 'Remote',
    description:
      'Developed regression and classification models using Decision Trees, Random Forests, and MLPs for applied ML tasks.',
  }, 
  {
    company : 'KekotTech',
    location: 'Dschang, Cameroon',
    position : 'Machine learning Trainer',
    period : 'Dec 2024 – Aug 2025',
    arrangement: 'On-site',
    description :
      'Conducted training sessions on machine learning concepts, algorithms, and practical applications for aspiring data scientists and developers.',
  },
];

export const education: Education[] = [
  {
    institution: 'AIMS Cameroon',
    degree: "Cooperative Master's program in Data Science",
    period: '2025–2026',
    grade: 'in progress',
    thesis:
      'Towards Agentic and Statistically Grounded Automated Debugging of Machine Learning Models',
  },
  {
    institution: 'University of Dschang',
    degree: "Master's 2 in Fundamental Computer Science (AI)",
    period: '2024–2025',
    grade: 'B',
    thesis:
      'Dynamic Adversarial Modeling for Intrusion Detection in IoT Environments',
  
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
    title: 'AIMS Cameroon RAG Assistant',
    description:
      'A retrieval-augmented generation system that answers questions about AIMS Cameroon, built on data scraped from the institute\'s official website.',
    technologies: ['Python', 'RAG', 'LLMs', 'Web Scraping'],
  },
  {
    title: 'Agentic Automated Debugging of ML Models',
    description:
      "Master's thesis at AIMS Cameroon: Towards Agentic and Statistically Grounded Automated Debugging of Machine Learning Models - pairing agentic workflows with statistical grounding to locate and explain model failures automatically.",
    technologies: ['Python', 'Machine Learning', 'Agentic AI', 'Model Debugging'],
  },
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
  {
    title: 'Financial Market Prediction',
    description:
      'A platform that predicts stock market trends using historical data and machine learning techniques to assist investors in decision-making.',
    technologies: ['Python', 'Machine Learning', 'Data Analysis', 'Web Development'],
  },
  {
    title: 'Trashcan Management System',
    description:
      'A platform for monitoring and managing trashcan levels in urban areas to optimize waste collection routes and schedules.',
    technologies: ['Laravel', 'React', 'Data Analysis', 'Web Development'],
  },
  {
    title: 'Opportunity Organizer',
    description:
      "A mobile app that helps users organize and track various opportunities such as scholarships, internships, and job openings.",
    technologies: ['Kotlin', 'Mobile Development'],
  }
];

export const skills = {
  programming: ['Python', 'JavaScript', 'Java', 'PHP', 'Ruby', 'Kotlin', 'R', 'C++', 'C', 'TypeScript', 'SQL'],
  frameworks: ['NextJS', 'React', 'Spring', 'Laravel','React Native', 'Flask','Jekyll', 'NodeJS', 'TailwindCSS'],
  tools: ['Git/GitHub', 'AWS', 'Linux', 'CI/CD'],
  databases: ['MySQL', 'PostgreSQL', 'MongoDB', 'Firebase'],
  areas: ['Agentic AI', 'LLMs', 'RAG', 'Machine Learning', "Software Engineering", 'Data Analysis'],
  languages: ['English', 'French'],
};

export const contactInfo: ContactInfo = {
  location: 'Kigali, Rwanda',
  phones: [
    { region: 'Rwanda', number: '+250 780189217' },
    { region: 'Cameroon', number: '+237 691586487' },
  ],
  email: 'genie.kamaha@aims-cameroon.org',
  website: 'genie-tchabet.online',
  github: 'https://github.com/elgenio123',
  linkedin: 'https://www.linkedin.com/in/genie-tchabet',
};
