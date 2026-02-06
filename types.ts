
export interface Project {
  id: string;
  title: string;
  description: string[];
  tags: string[];
  award?: string;
  images: string[];
  link?: string;
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  period: string;
  description: string[];
}

export interface Publication {
  id: string;
  title: string;
  authors: string;
  journal: string;
  year: string;
  status?: string;
  link?: string;
}

export interface Award {
  id: string;
  title: string;
  issuer: string;
  year: string;
  description: string[];
  type: 'gold' | 'silver' | 'bronze' | 'scholarship' | 'honor' | 'default';
}

export interface SkillCategory {
  title: string;
  skills: string[];
}
