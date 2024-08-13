import { ExperienceType } from "../../../types";

interface ExperienceProps {
    experience: ExperienceType;
}

export default function Experience({ experience }: ExperienceProps) {
    return (
        <div className="experience-unit">
            <h3>/** {experience.role} **/</h3>
            <p className="comment-line">// {experience.time}</p>
            <p className="comment-line">// {experience.company}</p>
            <ul>
                {experience.description.map((desc, index) => (
                    <li key={index}><span className="desc-index">*</span> {desc}</li>
                ))}
            </ul>
        </div>
    );
}