import React from "react";

export default function TechBadge({ children, more = false }) {
  return (
    <span className={`tech-badge${more ? " more" : ""}`}>
      {children}
    </span>
  );
}
