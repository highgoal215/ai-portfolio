import AIAssistant from './AI/AIAssistant'
import BriefInfo from './BriefInfo'

export default function Home() {

    return(
        <div className="hello-wrapper">
            <BriefInfo name={"Your Name"} role={"Web Developer"}/>
            <AIAssistant />
        </div>
    )
}