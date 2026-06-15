import React from "react";
import TechBadge from "./TechBadge";

const GRADIENTS = [
  "from-blue-500 to-purple-600",
  "from-emerald-500 to-blue-600",
  "from-red-500 to-orange-600",
  "from-green-500 to-teal-600",
  "from-red-500 to-pink-600",
  "from-blue-600 to-purple-700",
  "from-pink-500 to-red-600",
  "from-purple-500 to-pink-600",
  "from-violet-600 to-purple-700",
  "from-slate-600 to-gray-800",
];

function getGradient(project) {
  if (project.color) return project.color;
  const hash = Math.abs(project.id || 0) % GRADIENTS.length;
  return GRADIENTS[hash];
}

export default function ProjectCard({ project, onClick, cardRef }) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick(project);
    }
  };

  const gradient = getGradient(project);

  return (
    <article
      ref={cardRef}
      role="button"
      tabIndex={0}
      className="project-card"
      onClick={() => onClick(project)}
      onKeyDown={handleKeyDown}
      aria-label={`Open details for ${project.title}`}
      data-category={project.category}
    >
      <div className="project-card-inner">
        <div className={`project-card-image bg-gradient-to-br ${gradient}`}>
          {project.image && (
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
              loading="lazy"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
          )}
          <div className="project-card-overlay">
            <span className="project-number">#{project.id}</span>
          </div>
        </div>

        <div className="project-card-content">
          <h3 className="project-card-title">{project.title}</h3>
          
          <div className="project-card-preview">
            <p className="preview-text">
              {project.problem || project.description}
            </p>
          </div>

          <div className="project-card-tech">
            {project.tech.slice(0, 3).map((tech, idx) => (
              <TechBadge key={idx}>{tech}</TechBadge>
            ))}
            {project.tech.length > 3 && (
              <TechBadge more>+{project.tech.length - 3}</TechBadge>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
