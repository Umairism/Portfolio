import { useState, useEffect, useRef } from "react";
import { fallbackProjects } from "../data/projectsData";
import { applyFilterPipeline } from "../utils/repoFilters";

const GITHUB_API_URL = "https://api.github.com/users/Umairism/repos?per_page=100";
const TIMEOUT_MS = 8000;

export function useGitHubRepos() {
  const [repos, setRepos]               = useState([]);
  const [loading, setLoading]           = useState(true);
  const [error, setError]               = useState(false);
  const [usingFallback, setUsingFallback] = useState(false);
  const hasFetched = useRef(false);

  useEffect(() => {
    // Cache guard — never re-fetch on re-render
    if (hasFetched.current) return;
    hasFetched.current = true;

    const controller = new AbortController();
    const timeoutId  = setTimeout(() => controller.abort(), TIMEOUT_MS);

    async function fetchRepos() {
      try {
        const headers = {};
        const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
        if (token) {
          headers["Authorization"] = `token ${token}`;
        }

        const res  = await fetch(GITHUB_API_URL, { 
          headers,
          signal: controller.signal 
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const raw  = await res.json();
        const processed = applyFilterPipeline(raw);
        setRepos(processed);
      } catch (err) {
        setError(true);
        setUsingFallback(true);
        setRepos(fallbackProjects);
      } finally {
        clearTimeout(timeoutId);
        setLoading(false);
      }
    }

    fetchRepos();
    return () => {
      clearTimeout(timeoutId);
      controller.abort();
    };
  }, []); // empty deps — intentional single-fetch

  return { repos, loading, error, usingFallback };
}
