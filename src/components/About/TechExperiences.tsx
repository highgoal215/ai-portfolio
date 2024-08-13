import CloseIcon from "../LogoComponents/CloseIcon";
import Experience from "./Experience";
import { experience1, experience2 } from "../../../data";
import ModalLoadingAnimation from "./ModalLoadingAnimation";
import "../../../css/experience.css";

export default function TechExperiences() {
    return (
        <div className="bio-wrapper">
            <div className="bio-text">
                <div className="bio-sub-title">
                    <p>technical-experience <CloseIcon color={"var(--text-gray)"} /></p>
                </div>
                <div className="skills-content">
                    <ModalLoadingAnimation duration="0.5s" direction="loadingRTL">
                        <div className="skills-wrapper">
                            {experience1.map((exp, index) => (
                                <Experience key={index} experience={exp} />
                            ))}
                        </div>
                    </ModalLoadingAnimation>
                </div>
            </div>
            <div className="bio-text">
                <div className="bio-sub-title">
                    <p>other-experience <CloseIcon color={"var(--text-gray)"} /></p>
                </div>
                <div className="skills-content">
                    <ModalLoadingAnimation duration="0.5s" direction="loadingLTR">
                        <div className="skills-wrapper">
                            {experience2.map((exp, index) => (
                                <Experience key={index} experience={exp} />
                            ))}
                        </div>
                    </ModalLoadingAnimation>
                </div>
            </div>
        </div>
    );
}