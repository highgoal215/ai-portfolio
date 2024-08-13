
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