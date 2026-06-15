import React from "react";

export default function LoadingSkeleton() {
  return (
    <div className="projects-grid" aria-busy="true" aria-label="Loading projects">
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className="skeleton-card">
          <div className="skeleton-block" style={{ height: "170px", width: "100%" }} />
          <div style={{ padding: "var(--space-3)", display: "grid", gap: "var(--space-3)" }}>
            <div className="skeleton-block" style={{ height: "1.25rem", width: "70%" }} />
            <div className="skeleton-block" style={{ height: "3.5rem", width: "100%" }} />
            <div style={{ display: "flex", gap: "0.36rem" }}>
              <div className="skeleton-block" style={{ height: "1.2rem", width: "4rem", borderRadius: "999px" }} />
              <div className="skeleton-block" style={{ height: "1.2rem", width: "4rem", borderRadius: "999px" }} />
              <div className="skeleton-block" style={{ height: "1.2rem", width: "4rem", borderRadius: "999px" }} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
