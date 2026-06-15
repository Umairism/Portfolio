import fc from "fast-check";
import { assignCategoryToRepo } from "../data/categoryMapping";

const VALID_CATEGORIES = new Set([
  "Web Development",
  "AI / ML",
  "Tools / Utilities",
  "Academic / CS Projects",
  "Cybersecurity",
  "Blockchain",
  "Desktop Applications",
  "Mobile & Cross-Platform",
  "Media & Entertainment",
  "Healthcare & IoT",
]);

// Feature: github-portfolio-integration, Property 7: Every valid repository is assigned exactly one category
test("assignCategoryToRepo always assigns exactly one valid category", () => {
  fc.assert(
    fc.property(
      fc.record({
        name:        fc.string(),
        description: fc.option(fc.string()),
        language:    fc.option(fc.string()),
      }),
      (repo) => {
        const category = assignCategoryToRepo(repo);
        return VALID_CATEGORIES.has(category);
      }
    ),
    { numRuns: 100 }
  );
});
