import fc from "fast-check";
import { inferDescription } from "../utils/inferDescription";

// Feature: github-portfolio-integration, Property 13: Description inference always produces a non-empty string
test("inferDescription always produces a non-empty string", () => {
  fc.assert(
    fc.property(
      fc.record({
        name:        fc.string(),
        description: fc.option(fc.string()),
        language:    fc.option(fc.string()),
      }),
      (repo) => {
        const result = inferDescription(repo);
        return typeof result === "string" && result.length > 0;
      }
    ),
    { numRuns: 100 }
  );
});
