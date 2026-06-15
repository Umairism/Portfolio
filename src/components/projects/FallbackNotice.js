import React from "react";

export default function FallbackNotice() {
  return (
    <div role="status" aria-live="polite" className="fallback-notice">
      Could not connect to the GitHub API. Displaying static fallback projects.
    </div>
  );
}
