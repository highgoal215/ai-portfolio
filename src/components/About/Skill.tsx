import { SkillType } from '../../../types.ts'

interface SkillProps {
    skill: SkillType;
}

export default function Skill({ skill }: SkillProps) {
    // console.log(skill.name)

    return (
        <div className="skill">
            <img src={skill.icon} alt={`${skill.name} icon`} className="skill-icon" />
            <div className="skill-info">
                <h4>{skill.name}</h4>
                <div className="progress-bar">
                    <div className="progress" style={{ width: `${skill.level}%` }}></div>
                </div>
            </div>
        </div>
    );
}
