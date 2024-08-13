import { useEffect, useState } from 'react';
import { Link, useParams, useLocation, useNavigate } from 'react-router-dom';
import { projectsData } from '../../../data';
import "../../../css/projects.css"

import { ProjectInfo } from '../../../types'


export default function ProjectDetail() {
    const { projectId } = useParams<{ projectId: string }>();
    const location = useLocation();
    const navigate = useNavigate();
  
    const [currentProject, setCurrentProject] = useState<ProjectInfo | null>(null);
  
    useEffect(() => {
      const foundProject = projectsData.find(project => project.id.toString() === projectId);
      if (!foundProject) {
        navigate('/404', { replace: true });
      } else {
        setCurrentProject(foundProject);
      }
    }, [projectId, navigate]);
  
    if (!currentProject) return null;
  
    const { name, imgSrc, tags, detailDesc, demoLink, githubLink, video } = currentProject;
    const search = location.state?.search || '';
    const type = location.state?.type || 'all';
  
    return (
      <div className="project-details-container">
        <div className="project-detail-content-wrapper">
          <div className="back-to-projects-btn">
            <Link to={`/projects?${search}`} className="back-btn"> &larr; Back to {type} Projects</Link>
          </div>
          <div className="image-container">
            <img src={imgSrc} alt={`${name} project image`} />
          </div>
          <div className="project-details-basic-info">
            <h3><span>&lt;</span> {name} <span>&gt;</span></h3>
            {tags.length > 0 && (
              <div className="project-detail-tags">
                {tags.map((tag, i) => (
                  <span key={i}><img src={tag} alt={`Tag ${i}`} /></span>
                ))}
              </div>
            )}
            {demoLink && (
              <div>
                <p>Demo: <a href={demoLink} target="_blank" rel="noopener noreferrer">{demoLink}</a></p>
              </div>
            )}
            {githubLink && (
              <div>
                <p>GitHub: <a href={githubLink} target="_blank" rel="noopener noreferrer">{githubLink}</a></p>
              </div>
            )}
          </div>
        </div>
        <div className="project-detail-desc-wrapper">
          {video.videoId && (
            <div className="project-video-info">
              <h4>{`// ${video.title}`}</h4>
              <p>{video.desc}</p>
              <div className="project-video-container">
                <iframe
                  src={`https://www.youtube.com/embed/${video.videoId}`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}
          {detailDesc.length > 0 && (
            <div className="project-text-info">
              {detailDesc.map((detailDes, i) => (
                <div key={i}>
                  <h4>{`// ${detailDes.title}`}</h4>
                  <ul>
                    {detailDes.desc.map((d, index) => (
                      <li key={index}><span>* </span>{d}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
}