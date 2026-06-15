import React, { useState, useEffect, useRef } from "react";
import { useGitHubRepos } from "../../hooks/useGitHubRepos";
import SectionTabs from "./SectionTabs";
import StudiesSection from "./StudiesSection";
import ProjectsSection from "./ProjectsSection";
import ProjectModal from "./ProjectModal";

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState("projects");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [triggerRef, setTriggerRef] = useState(null);
  const [projectLikes, setProjectLikes] = useState({});

  const cardRefs = useRef(new Map());

  const { repos, loading, error, usingFallback } = useGitHubRepos();

  // Load likes from localStorage
  useEffect(() => {
    try {
      const savedLikes = localStorage.getItem("projectLikes");
      if (savedLikes) {
        setProjectLikes(JSON.parse(savedLikes));
      }
    } catch (e) {
      console.error("Failed to load likes from localStorage", e);
    }
  }, []);

  // Handle like increments
  const handleLike = (projectId) => {
    const newLikes = { ...projectLikes };
    newLikes[projectId] = (newLikes[projectId] || 0) + 1;
    setProjectLikes(newLikes);
    try {
      localStorage.setItem("projectLikes", JSON.stringify(newLikes));
    } catch (e) {
      console.error("Failed to save likes to localStorage", e);
    }
  };

  // Auto-reset category if it becomes empty in newly loaded repos
  useEffect(() => {
    if (activeCategory === "All" || loading || repos.length === 0) return;
    const hasCategory = repos.some((r) => r.category === activeCategory);
    if (!hasCategory) {
      setActiveCategory("All");
    }
  }, [repos, activeCategory, loading]);

  const handleCardClick = (project) => {
    setSelectedProject(project);
    setTriggerRef(cardRefs.current.get(project.id) || null);
  };

  return (
    <div className="page-container">
      <section className="projects-section">
        <div className="projects-container-wrapper">
          <div className="projects-content">
            <h1 className="page-title">Projects</h1>
            <p className="page-description">
              Full-stack applications, automation tools, and security utilities. Each project includes
              architectural decisions, tradeoffs, and technical challenges solved.
            </p>

            <SectionTabs activeTab={activeTab} onTabChange={setActiveTab} />

            <div style={{ display: activeTab === "projects" ? "block" : "none" }}>
              <ProjectsSection
                repos={repos}
                loading={loading}
                error={error}
                usingFallback={usingFallback}
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
                onCardClick={handleCardClick}
                cardRefs={cardRefs}
              />
            </div>

            <div style={{ display: activeTab === "studies" ? "block" : "none" }}>
              <StudiesSection />
            </div>

            <ProjectModal
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
              triggerRef={triggerRef}
              likes={selectedProject ? projectLikes[selectedProject.id] || 0 : 0}
              onLike={selectedProject ? () => handleLike(selectedProject.id) : undefined}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
