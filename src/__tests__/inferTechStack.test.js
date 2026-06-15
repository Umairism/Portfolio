import fc from "fast-check";
import { inferTechStack } from "../utils/inferTechStack";

// Feature: github-portfolio-integration, Property 14: Tech stack inference always produces a non-empty array
test("inferTechStack always produces a non-empty array", () => {
  fc.assert(
    fc.property(
      fc.record({
        name:        fc.string(),
        description: fc.option(fc.string()),
        language:    fc.option(fc.string()),
      }),
      (repo) => {
        const result = inferTechStack(repo);
        return Array.isArray(result) && result.length >= 1;
      }
    ),
    { numRuns: 100 }
  );
});
