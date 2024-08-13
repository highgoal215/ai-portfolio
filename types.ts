
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