import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";
import InfoLogo from "../LogoComponents/InfoLogo";
import EmailLogo from "../LogoComponents/EmailLogo";
import ArrowDownLogo from "../LogoComponents/ArrowDownLogo";
import CameraLogo from "../LogoComponents/CameraLogo";
import EducationLogo from "../LogoComponents/EducationLogo";
import SkillsLogo from "../LogoComponents/SkillsLogo";
import ExperienceLogo from "../LogoComponents/ExperienceLogo";
import VolunteerLogo from "../LogoComponents/VolunteerLogo";
import "../../../css/about.css";

export default function AboutLayout() {
    return (
        <div className="about-wrapper">
            <div className="about-sidebar">
                <p><ArrowDownLogo color={"#e5e9f0"} direction={0} />personal-info</p>
                <nav>
                    <NavLink className={({ isActive }) => isActive ? "link-actived" : undefined} to="." end><InfoLogo />bio</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "link-actived" : undefined} to="interests"><CameraLogo />interests</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "link-actived" : undefined} to="education"><EducationLogo />education</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "link-actived" : undefined} to="skills"><SkillsLogo />skills</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "link-actived" : undefined} to="experience"><ExperienceLogo />experience</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "link-actived" : undefined} to="volunteer"><VolunteerLogo />volunteer</NavLink>
                </nav>
                <p className="about-contact-title"><ArrowDownLogo color={"#e5e9f0"} direction={0} />contact</p>
                <div className="about-contact-info">
                    <a href="mailto:qingj.shen@gmail.com"><EmailLogo color={"#607b96"} />qingj.shen@gmail.com</a>
                </div>
            </div>
            <Outlet />
        </div>
    );
};
