import GitHubLogo from "./LogoComponents/GithubLogo"
import LinkedInLogo from "./LogoComponents/LinkedInLogo"
import YouTubeLogo from "./LogoComponents/YouTubeLogo"

export default function Footer() {

    return (
        <footer>
            <div className="footer-left">
                <p>find me in:</p>
                <a href="https://www.linkedin.com/in/qingjie-shen-094724228/" target='_blank'><LinkedInLogo color="#607b96" /></a>
                <a href="https://www.youtube.com/channel/UC6o5r8-ptDdCTiBJuv1_rGw" target='_blank'><YouTubeLogo color="#607b96" /></a>
            </div>
            <div className="footer-right">
                <a href="https://github.com/QingjieShen" target='_blank'><span>@QingjieShen</span> <GitHubLogo color="#607b96"/></a>
            </div>
        </footer>
    )
}