import CloseIcon from "../LogoComponents/CloseIcon";
import AutoIndexText from "./AutoIndexText";
import ModalLoadingAnimation from "./ModalLoadingAnimation";
import heroImg from "../../../public/hero.jpg";
import { bioIntroduction } from "../../../data";

export default function Bio() {

    return (
        <div className="bio-wrapper">
            <div className="bio-text">
                <div className="bio-sub-title">
                    <p>personal-info <CloseIcon color={"var(--text-gray)"} /></p>
                </div>
                <div className="bio-content">
                    <ModalLoadingAnimation duration="0.5s" direction="loadingBTT">
                        <AutoIndexText text={bioIntroduction} title={"--About me--"} />
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
