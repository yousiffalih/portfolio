
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link?: string;
  github?: string;
  category: 'web' | 'mobile' | 'ai' | 'design';
}

export interface Skill {
  name: string;
  level: number;
  category: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface PortfolioData {
  userInfo: {
    name: string;
    title: string;
    bio: string;
    location: string;
    email: string;
    photoUrl: string;
    cvUrl: string;
    socials: {
      github: string;
      linkedin: string;
      twitter: string;
    };
  };
  projects: Project[];
  skills: Skill[];
  experiences: Experience[];
}
