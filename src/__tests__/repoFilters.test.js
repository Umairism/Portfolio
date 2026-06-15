import fc from "fast-check";
import {
  excludeForks,
  excludeEmpty,
  excludePortfolioRepo,
  excludeDuplicates
} from "../utils/repoFilters";

// Feature: github-portfolio-integration, Property 3: No forked repository appears after excludeForks
test("excludeForks removes all forked repos", () => {
  fc.assert(
    fc.property(
      fc.array(fc.record({
        id:          fc.integer(),
        name:        fc.string(),
        fork:        fc.boolean(),
        size:        fc.integer({ min: 0 }),
        language:    fc.option(fc.string()),
        description: fc.option(fc.string()),
        html_url:    fc.string(),
        homepage:    fc.option(fc.string()),
      })),
      (repos) => {
        const result = excludeForks(repos);
        return result.every(r => r.fork === false);
      }
    ),
    { numRuns: 100 }
  );
});

// Feature: github-portfolio-integration, Property 4: No empty repository appears after excludeEmpty
test("excludeEmpty removes all repos with size 0", () => {
  fc.assert(
    fc.property(
      fc.array(fc.record({
        id:          fc.integer(),
        name:        fc.string(),
        fork:        fc.boolean(),
        size:        fc.integer(),
        language:    fc.option(fc.string()),
        description: fc.option(fc.string()),
        html_url:    fc.string(),
        homepage:    fc.option(fc.string()),
      })),
      (repos) => {
        const result = excludeEmpty(repos);
        return result.every(r => r.size !== 0);
      }
    ),
    { numRuns: 100 }
  );
});

// Feature: github-portfolio-integration, Property 5: Deduplication retains most complete version
test("excludeDuplicates retains the entry with the largest size for normalised-identical names", () => {
  fc.assert(
    fc.property(
      fc.array(fc.record({
        name:        fc.string(),
        size:        fc.integer({ min: 0 }),
        id:          fc.integer(),
        fork:        fc.boolean(),
        language:    fc.option(fc.string()),
        description: fc.option(fc.string()),
        html_url:    fc.string(),
        homepage:    fc.option(fc.string()),
      })),
      (repos) => {
        const result = excludeDuplicates(repos);
        const normalise = (name) => name.toLowerCase().replace(/[-_. ]/g, "");

        // Assert uniqueness of normalised names
        const seenNormalised = new Set();
        for (const repo of result) {
          const key = normalise(repo.name);
          if (seenNormalised.has(key)) return false;
          seenNormalised.add(key);
        }

        // Assert that we retained the largest size
        for (const repo of result) {
          const key = normalise(repo.name);
          const duplicates = repos.filter(r => normalise(r.name) === key);
          const maxSize = Math.max(...duplicates.map(r => r.size));
          if (repo.size < maxSize) return false;
        }

        return true;
      }
    ),
    { numRuns: 100 }
  );
});

// Feature: github-portfolio-integration, Property 6: Portfolio repo never appears after excludePortfolioRepo
test("excludePortfolioRepo removes all repositories named portfolio, Portfolio, interactive-portfolio", () => {
  fc.assert(
    fc.property(
      fc.array(fc.record({
        id:          fc.integer(),
        name:        fc.string(),
        fork:        fc.boolean(),
        size:        fc.integer({ min: 0 }),
        language:    fc.option(fc.string()),
        description: fc.option(fc.string()),
        html_url:    fc.string(),
        homepage:    fc.option(fc.string()),
      })),
      (repos) => {
        const result = excludePortfolioRepo(repos);
        const badNames = ["interactive-portfolio", "portfolio", "Portfolio"];
        return result.every(r =>
          !badNames.some(name => r.name.toLowerCase() === name.toLowerCase())
        );
      }
    ),
    { numRuns: 100 }
  );
});
