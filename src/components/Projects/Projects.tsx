import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { projectsData } from "../../../data";
import { Project } from "../../../types";
import ImageCard from "./ImageCard";
import ModalLoadingAnimation from "../About/ModalLoadingAnimation";
import ArrowDownLogo from "../LogoComponents/ArrowDownLogo";
import "../../../css/projects.css"
import reactLogo from "../../../public/development-icons/react.svg";
import aiLogo from "../../../public/development-icons/openai.png";
import jsLogo from "../../../public/development-icons/javascript.svg";
import figmaLogo from "../../../public/development-icons/figma.svg";
import allLogo from "../../../public/development-icons/adaptability.svg";
import cmsLogo from "../../../public/development-icons/wordpress.png";
import vueLogo from "../../../public/development-icons/vuejs.svg";

export default function Projects() {
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");
  const [activeBtn, setActiveBtn] = useState<string>(typeFilter ? typeFilter : "all");

  function handleFilterChange(key: string, value: string | null) {
    setSearchParams(prevParams => {
      if (!value) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  const displayProjects: Project[] = typeFilter
    ? projectsData.filter(project => typeFilter.toLowerCase() === "all" || project.type.includes(typeFilter.toLowerCase()))
    : projectsData;

    return (
        <div className="projects-home">
            <div className="project-sidebar">
                <p className="project-sidebar-title">
                    <ArrowDownLogo color={"#e5e9f0"} direction={0} />tech
                </p>
                <nav>
                    <button
                        onClick={() => {
                            handleFilterChange('type', '');
                            setActiveBtn('all');
                        }}
                        className={`projects-type-btn ${activeBtn === 'all' ? 'activeBtn' : ''}`}
                    >
                        <img src={allLogo} alt="All" />All
                    </button>
                    <button
                        onClick={() => {
                            handleFilterChange('type', 'react');
                            setActiveBtn('react');
                        }}
                        className={`projects-type-btn ${activeBtn === 'react' ? 'activeBtn' : ''}`}
                    >
                        <img src={reactLogo} alt="React" />React.js
                    </button>
                    <button
                        onClick={() => {
                            handleFilterChange('type', 'vue');
                            setActiveBtn('vue');
                        }}
                        className={`projects-type-btn ${activeBtn === 'vue' ? 'activeBtn' : ''}`}
                    >
                        <img src={vueLogo} alt="Vue" />Vue.js
                    </button>
                    <button
                        onClick={() => {
                            handleFilterChange('type', 'ai');
                            setActiveBtn('ai');
                        }}
                        className={`projects-type-btn ${activeBtn === 'ai' ? 'activeBtn' : ''}`}
                    >
                        <img src={aiLogo} alt="AI" />AI
                    </button>
                    <button
                        onClick={() => {
                            handleFilterChange('type', 'javascript');
                            setActiveBtn('javascript');
                        }}
                        className={`projects-type-btn ${activeBtn === 'javascript' ? 'activeBtn' : ''}`}
                    >
                        <img src={jsLogo} alt="JavaScript" />JavaScript
                    </button>
                    <button
                        onClick={() => {
                            handleFilterChange('type', 'cms');
                            setActiveBtn('cms');
                        }}
                        className={`projects-type-btn ${activeBtn === 'cms' ? 'activeBtn' : ''}`}
                    >
                        <img src={cmsLogo} alt="CMS" />CMS
                    </button>
                    <button
                        onClick={() => {
                            handleFilterChange('type', 'ux');
                            setActiveBtn('ux');
                        }}
                        className={`projects-type-btn ${activeBtn === 'ux' ? 'activeBtn' : ''}`}
                    >
                        <img src={figmaLogo} alt="UX/UI" />UX/UI
                    </button>
                </nav>
            </div>
            <div className="projects-wrapper">
                {displayProjects.length > 0 ?
                    displayProjects.map((project, index) => (
                        <ModalLoadingAnimation
                            key={project.id}
                            duration={`${0.5 + 0.5 * index}s`}
                            direction="loadingBTT"
                        >
                            <Link to={`/projects/${project.id}`} state={{
                                search: `${searchParams.toString()}`,
                                type: typeFilter
                            }}>
                                <ImageCard
                                    imgSrc={project.imgSrc}
                                    title={project.name}
                                    hoverText={project.desc}
                                    tags={project.tags}
                                    notice="click to see more"
                                    link={`./${project.id}`}
                                    state={{
                                        search: `${searchParams.toString()}`,
                                        type: typeFilter
                                    }}
                                    
                                />
                            </Link>
                        </ModalLoadingAnimation>
                    )) : <h1>No {typeFilter} projects.</h1>
                }
            </div>
        </div>
    );
}