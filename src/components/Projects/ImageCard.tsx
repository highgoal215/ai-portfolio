import { useState } from "react";
import { ImageCardProps } from "../../../types";

export default function ImageCard({
  imgSrc,
  title,
  hoverText,
  tags,
  notice
}: ImageCardProps) {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div
      className="mac-screen-wrapper"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={isHovered && hoverText ? "imageCardHover show" : "imageCardHover"}>
        {hoverText && <p>{hoverText}</p>}
        {notice && <p className="comment-line">{notice}</p>}
      </div>
      <div className="mac-container">
        <div className="mac-title-bar">
          {tags.length > 0 ? (
            <div className="tags-buttons">
              {tags.map((tag, index) => (
                <img key={index} src={tag} alt={`Tag ${index}`} />
              ))}
            </div>
          ) : (
            <div className="buttons">
              <div className="button"></div>
              <div className="button"></div>
              <div className="button"></div>
            </div>
          )}
        </div>
        <div className="mac-screen">
          <img src={imgSrc} alt={title} />
        </div>
        <div className="video-title">{title}</div>
      </div>
    </div>
  );
}
