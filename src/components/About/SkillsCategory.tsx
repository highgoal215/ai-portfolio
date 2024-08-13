import Skill from "./Skill";
import { SkillsCategoryType } from '../../../types.ts'

interface SkillsCategoryProps {
    category: SkillsCategoryType;
}

export default function SkillsCategory({ category }: SkillsCategoryProps) {
    return (
        <div className="skill-category">
            <h3>{category.category}</h3>
            <div className="skills-list">
                {category.skills.map((skill, index) => (
                    <Skill key={index} skill={skill} />
                ))}
            </div>
        </div>
    );
}
