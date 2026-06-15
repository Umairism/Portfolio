import React from "react";

export default function CategoryFilter({ repos, activeCategory, onCategoryChange }) {
  const populatedCategories = [...new Set(repos.map((r) => r.category))].sort();
  const categories = ["All", ...populatedCategories];

  return (
    <div className="category-filter">
      <h3 className="filter-title">Filter by Category:</h3>
      <div className="category-buttons">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-btn ${activeCategory === category ? "active" : ""}`}
            onClick={() => onCategoryChange(category)}
            aria-pressed={activeCategory === category}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
