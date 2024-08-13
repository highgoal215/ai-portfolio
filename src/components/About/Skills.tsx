import CloseIcon from "../LogoComponents/CloseIcon";
import { webDevSkillsData, otherSkillsData } from "../../../data";
import SkillsCategory from "./SkillsCategory";
import ModalLoadingAnimation from "./ModalLoadingAnimation";
import "../../../css/skills.css";

export default function Skills() {
    return (
        <div className="bio-wrapper">
            {/* Web Development Skills Section */}
            <div className="bio-text">
                <div className="bio-sub-title">
                    <p>web-development-skills <CloseIcon color={"var(--text-gray)"} /></p>
                </div>
                <div className="skills-content">
                    <ModalLoadingAnimation duration="0.5s" direction="loadingLTR">
                        <div className="skills-wrapper">
                            {webDevSkillsData.map((category, index) => (
                                <SkillsCategory key={index} category={category} />
                            ))}
                        </div>
                    </ModalLoadingAnimation>
                </div>
            </div>

            {/* Other Skills Section */}
            <div className="bio-text">
                <div className="bio-sub-title">
                    <p>other-skills <CloseIcon color={"var(--text-gray)"} /></p>
                </div>
                <div className="skills-content">
                    <ModalLoadingAnimation duration="0.5s" direction="loadingRTL">
                        <div className="skills-wrapper">
                            {otherSkillsData.map((category, index) => (
                                <SkillsCategory key={index} category={category} />
                            ))}
                        </div>
                    </ModalLoadingAnimation>
                </div>
            </div>
        </div>
    );
}
