import CloseIcon from "../LogoComponents/CloseIcon";
import AutoIndexText from "./AutoIndexText";
import ModalLoadingAnimation from "./ModalLoadingAnimation";

export default function Education() {
    const education1 = `
    **Year:** Jan 2023 - Aug 2024

    **Field:** Interactive Media Design

    **School:** Algonquin College, Ottawa, Ontario, Canada

    **Credential:** College Diploma

    **GPA:** 3.97/4

    **Dean's List:** 2023 - 2024

    **--Main Courses--**

    Web Development

    UX/UI Design

    Graphic Design

    Content Management System

    Media Project Planning

    Photography

    Video Production
    `;

    const education2 = `
    **Year:** Start date - End date

    **Field:** Your Program

    **School:** Your School Information

    **Credential:** Degree

    **--Main Courses--**

    Course 1

    Course 2

    Course 3

    Course 4

    Course 5

    Course 6

    Course 7

    Course 8

    Course 9
    `;

    return (
        <div className="bio-wrapper">
            <div className="bio-text">
                <div className="bio-sub-title">
                    <p>
                        interactive-media-design <CloseIcon color={"var(--text-gray)"} />
                    </p>
                </div>
                <div className="bio-content">
                    <ModalLoadingAnimation duration="0.5s" direction="loadingBTT">
                        <AutoIndexText text={education1} title="--Basic Info--" />
                    </ModalLoadingAnimation>
                </div>
            </div>
            <div className="bio-text">
                <div className="bio-sub-title">
                    <p>
                        computer-science-and-technology <CloseIcon color={"var(--text-gray)"} />
                    </p>
                </div>
                <div className="bio-content">
                    <ModalLoadingAnimation duration="0.5s" direction="loadingTTB">
                        <AutoIndexText text={education2} title="--Basic Info--" />
                    </ModalLoadingAnimation>
                </div>
            </div>
        </div>
    );
}
