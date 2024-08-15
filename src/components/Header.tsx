import { NavLink } from "react-router-dom"

const activeStyles: React.CSSProperties = {
    borderBottom: "2px solid #fea55f",
    color: "#d2d7df"
}

export default function Header() {
    const getNavLinkStyle = ({ isActive }: { isActive: boolean }): React.CSSProperties | undefined => {
        return isActive ? activeStyles : undefined;
    };

    return (
        <header>
            <NavLink className="site-logo" to="/">[your-site]</NavLink>
            <nav>
                <NavLink to="/" style={getNavLinkStyle}>_hello</NavLink>
                <NavLink to="/about" style={getNavLinkStyle}>_about-me</NavLink>
                <NavLink to="/projects" style={getNavLinkStyle}>_projects</NavLink>
                <NavLink to="/contact" className="header-email" style={getNavLinkStyle}>_contact-me</NavLink>
            </nav>
        </header>
    )
}