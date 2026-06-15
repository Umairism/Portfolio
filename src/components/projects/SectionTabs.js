import React from "react";

export default function SectionTabs({ activeTab, onTabChange }) {
  const tabs = [
    { id: "projects", label: "Projects" },
    { id: "studies", label: "Studies" },
  ];

  const handleKeyDown = (e, tabId) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onTabChange(tabId);
    }
  };

  return (
    <div className="section-tabs" role="tablist" aria-label="Portfolio sections">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          id={`tab-${tab.id}`}
          role="tab"
          aria-selected={activeTab === tab.id}
          aria-controls={`panel-${tab.id}`}
          tabIndex={activeTab === tab.id ? 0 : -1}
          className="section-tab"
          onClick={() => onTabChange(tab.id)}
          onKeyDown={(e) => handleKeyDown(e, tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
