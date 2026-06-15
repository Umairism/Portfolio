import { inferDescription } from "./inferDescription";
import { inferTechStack } from "./inferTechStack";
import { assignCategoryToRepo } from "../data/categoryMapping";

const PORTFOLIO_REPO_NAMES = ["interactive-portfolio", "portfolio", "Portfolio"];

export function excludeForks(repos) {
  return repos.filter(r => r.fork === false);
}

export function excludeEmpty(repos) {
  return repos.filter(r => r.size > 0);
}

export function excludePortfolioRepo(repos) {
  return repos.filter(r =>
    !PORTFOLIO_REPO_NAMES.some(name =>
      r.name.toLowerCase() === name.toLowerCase()
    )
  );
}

export function excludeDuplicates(repos) {
  // Normalise name: lowercase, strip separators
  const normalise = (name) => name.toLowerCase().replace(/[-_. ]/g, "");
  const seen = new Map();
  repos.forEach(r => {
    const key = normalise(r.name);
    if (!seen.has(key) || r.size > seen.get(key).size) {
      seen.set(key, r);
    }
  });
  return Array.from(seen.values());
}

export function formatTitle(name) {
  return name
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, c => c.toUpperCase());
}

export function toProjectEntry(raw) {
  const tech = inferTechStack(raw);
  const description = raw.description?.trim()
    ? raw.description.trim()
    : inferDescription(raw);
  return {
    id:          raw.id,
    name:        raw.name,
    title:       formatTitle(raw.name),
    description,
    tech,
    category:    assignCategoryToRepo(raw),
    githubUrl:   raw.html_url,
    liveUrl:     raw.homepage?.trim() || null,
    language:    raw.language,
    fork:        raw.fork,
    size:        raw.size,
  };
}

export function applyFilterPipeline(rawRepos) {
  const steps = [
    excludeForks,
    excludeEmpty,
    excludeDuplicates,
    excludePortfolioRepo,
  ];
  const filtered = steps.reduce((acc, fn) => fn(acc), rawRepos);
  return filtered.map(r => toProjectEntry(r));
}
