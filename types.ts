
// Skills Data type
export interface SkillType {
    name: string;
    level: number;
    icon: string;
}

export interface SkillsCategoryType {
    category: string;
    skills: SkillType[];
}

// auto index text type
export interface AutoIndexTextProps {
    text: string;
    title: string;
}

// modal loading animation type
export interface ModalLoadingAnimationProps {
    children: React.ReactNode;
    duration: string; // e.g., '2s', '1.5s'
    direction: 'loadingBTT' | 'loadingTTB' | 'loadingLTR' | 'loadingRTL'
}

// AI message
export interface Message {
    type: 'user' | 'system';
    content: string;
}

// Gpt text props
export interface GptTextProps {
    response?: React.ReactNode;
    isDefault: boolean;
    handleSelectQuestion?: (question: string) => void;
}

// Home page brief info props
export interface BriefInfoProps {
    name: string;
    role: string;
}

// type writer props
export interface TypeWriterProps {
    text: string;
    speed?: number;
}

// experience
export interface ExperienceType {
    role: string;
    company: string;
    time: string;
    description: string[];
}

// contact form type
export interface FormData {
    name: string;
    email: string;
    subject: string;
    content: string;
}

// projects data type
export interface Project {
    id: number;
    name: string;
    link: string;
    desc: string;
    imgSrc: string;
    tags: string[];
    type: string[];
    detailDesc: {
      title: string;
      desc: string[];
    }[];
    demoLink: string;
    githubLink: string;
    video: {
      title: string;
      desc: string;
      videoId: string;
    };
}

// image card type
export interface ImageCardProps {
    imgSrc: string;
    title: string;
    hoverText?: string;
    tags: string[];
    notice?: string;
    link?: string; 
    state?: {
        search: string;
        type: string | null;
    };
}

// projects interfaces
export interface ProjectDetailDesc {
    title: string;
    desc: string[];
  }
  
export interface ProjectVideo {
    title: string;
    desc: string;
    videoId: string;
}
  
export interface ProjectInfo {
    id: number;
    name: string;
    imgSrc: string;
    tags: string[];
    detailDesc: ProjectDetailDesc[];
    demoLink: string;
    githubLink: string;
    video: ProjectVideo;
}