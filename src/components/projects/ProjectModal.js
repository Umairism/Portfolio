import React, { useEffect, useRef } from "react";

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

export default function ProjectModal({ project, onClose, triggerRef, likes = 0, onLike }) {
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!project) return;

    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement;
    document.body.style.overflow = "hidden";

    // Small delay to allow modal rendering in DOM
    const t = setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }

      if (e.key !== "Tab" || !modalRef.current) return;

      const focusable = modalRef.current.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      clearTimeout(t);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      
      // Return focus to the triggering card
      if (triggerRef && triggerRef.current) {
        triggerRef.current.focus();
      } else if (previousFocus && typeof previousFocus.focus === "function") {
        previousFocus.focus();
      }
    };
  }, [project, onClose, triggerRef]);

  if (!project) return null;

  const gradient = getGradient(project);

  return (
    <div className="project-modal-overlay" onClick={onClose}>
      <div
        className="project-modal"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        ref={modalRef}
        tabIndex={-1}
      >
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close project details"
          ref={closeButtonRef}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ display: "block", margin: "auto" }}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className={`modal-header bg-gradient-to-br ${gradient}`}>
          {project.image && (
            <img
              src={project.image}
              alt={project.title}
              className="modal-header-image"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
          )}
          <div className="modal-header-content">
            <h2 id="modal-title" className="modal-title">{project.title}</h2>
            <div className="modal-category">{project.category}</div>
          </div>
        </div>

        <div className="modal-body">
          {project.problem ? (
            <>
              <div className="modal-section">
                <h3 className="modal-section-title">Problem</h3>
                <p className="modal-section-text">{project.problem}</p>
              </div>
              <div className="modal-section">
                <h3 className="modal-section-title">Solution</h3>
                <p className="modal-section-text">{project.solution}</p>
              </div>
              {project.decisions && (
                <div className="modal-section">
                  <h3 className="modal-section-title">Key Technical Decisions</h3>
                  <p className="modal-section-text">{project.decisions}</p>
                </div>
              )}
              {project.challenges && (
                <div className="modal-section">
                  <h3 className="modal-section-title">Challenges</h3>
                  <p className="modal-section-text">{project.challenges}</p>
                </div>
              )}
            </>
          ) : (
            <div className="modal-section">
              <h3 className="modal-section-title">Description</h3>
              <p className="modal-section-text">{project.description}</p>
            </div>
          )}

          <div className="modal-section">
            <h3 className="modal-section-title">Tech Stack</h3>
            <div className="modal-tech-tags">
              {project.tech.map((tech, idx) => (
                <span key={idx} className="modal-tech-tag">{tech}</span>
              ))}
            </div>
          </div>

          <div className="modal-actions">
            <button
              className="modal-action-btn like-btn"
              onClick={onLike}
              aria-label={`Like project. Current likes: ${likes}`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              <span>{likes} Likes</span>
            </button>

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="modal-action-btn github-btn"
                aria-label="View source code on GitHub (opens in a new tab)"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span>GitHub</span>
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="modal-action-btn live-btn"
                aria-label="View live demo (opens in a new tab)"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
