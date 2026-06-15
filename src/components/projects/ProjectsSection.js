import React, { useMemo } from "react";
import ProjectCard from "./ProjectCard";
import CategoryFilter from "./CategoryFilter";
import LoadingSkeleton from "./LoadingSkeleton";
import FallbackNotice from "./FallbackNotice";

export default function ProjectsSection({
  repos,
  loading,
  error,
  usingFallback,
  activeCategory,
  onCategoryChange,
  onCardClick,
  cardRefs,
}) {
  const filtered = useMemo(() => {
    return activeCategory === "All"
      ? repos
      : repos.filter((r) => r.category === activeCategory);
  }, [repos, activeCategory]);

  return (
    <section id="panel-projects" role="tabpanel" aria-labelledby="tab-projects">
      <h2 style={{ display: "none" }}>Projects</h2>
      {usingFallback && <FallbackNotice />}
      
      {loading ? (
        <LoadingSkeleton />
      ) : (
        <>
          <CategoryFilter
            repos={repos}
            activeCategory={activeCategory}
            onCategoryChange={onCategoryChange}
          />
          
          {filtered.length > 0 && (
            <div className="projects-grid" style={{ marginTop: "var(--space-4)" }}>
              {filtered.map((project) => {
                if (!cardRefs.current.has(project.id)) {
                  cardRefs.current.set(project.id, React.createRef());
                }
                const cardRef = cardRefs.current.get(project.id);
                return (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onClick={onCardClick}
                    cardRef={cardRef}
                  />
                );
              })}
            </div>
          )}
        </>
      )}
    </section>
  );
}
