import CloseIcon from "../LogoComponents/CloseIcon";
import AutoIndexText from "./AutoIndexText";
import ModalLoadingAnimation from "./ModalLoadingAnimation";
import { education1, education2 } from "../../../data";

export default function Education() {

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
