import CloseIcon from "../LogoComponents/CloseIcon";
import AutoIndexText from "./AutoIndexText";
import ModalLoadingAnimation from "./ModalLoadingAnimation";
import heroImg from "../../../public/hero.jpg";

export default function Bio() {
    const introduction = `

    I bring a unique blend of creativity and technical expertise from my background in **XXXX** **XXXX** and **XXXX** **XXXX**. 

    
    It would appear that we have reached the limits of what it is possible to achieve with computer technology, although one should be careful with such statements, as they tend to sound pretty silly in 5 years. (John Von Neumann, circa 1949)`;

    return (
        <div className="bio-wrapper">
            <div className="bio-text">
                <div className="bio-sub-title">
                    <p>personal-info <CloseIcon color={"var(--text-gray)"} /></p>
                </div>
                <div className="bio-content">
                    <ModalLoadingAnimation duration="0.5s" direction="loadingBTT">
                        <AutoIndexText text={introduction} title={"--About me--"} />
                    </ModalLoadingAnimation>
                </div>
            </div>
            <div className="bio-img">
                <div className="bio-sub-title">
                </div>
                <div className="bio-img-content">
                    <img src={heroImg} alt="Hero image"/>
                </div>
            </div>
        </div>
    );
}
