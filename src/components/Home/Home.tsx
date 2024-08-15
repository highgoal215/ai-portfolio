import AIAssistant from './AI/AIAssistant'
import BriefInfo from './BriefInfo'
import ModalLoadingAnimation from "../About/ModalLoadingAnimation";

export default function Home() {

    return(
        <div className="hello-wrapper">
            <ModalLoadingAnimation duration="0.5s" direction="loadingBTT">
                <BriefInfo name={"Your Name"} role={"Web Developer"}/>
            </ModalLoadingAnimation>
            <ModalLoadingAnimation duration="0.5s" direction="loadingTTB">
                <AIAssistant />
            </ModalLoadingAnimation>
        </div>
    )
}