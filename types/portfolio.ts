export type CategoryType = 'all' | 'fullstack' | 'ai' | 'frontend' | 'backend' | 'cloud';

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: CategoryType;
  image: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
  highlights: string[];
  architecture?: string[];
  date: string;
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'AI & Data' | 'Cloud & DevOps';
  icon: string;
  popular?: boolean;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  certificateUrl: string;
  period: string;
  location: string;
  summary: string;
  accomplishments: string[];
  techStack: string[];
  current?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  title: string;
  company: string;
  avatar: string;
  quote: string;
  rating: number;
}

export interface CodeSnippet {
  id: string;
  title: string;
  language: string;
  code: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  topic: string;
  message: string;
}
