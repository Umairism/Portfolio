import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import fc from "fast-check";
import ProjectsPage from "../components/projects/ProjectsPage";
import CategoryFilter from "../components/projects/CategoryFilter";
import ProjectCard from "../components/projects/ProjectCard";
import ProjectsSection from "../components/projects/ProjectsSection";
import StudiesSection from "../components/projects/StudiesSection";

beforeEach(() => {
  global.fetch = jest.fn().mockResolvedValue({
    ok: true,
    json: async () => [],
  });
});

// Feature: github-portfolio-integration, Property 1: Studies section always renders exactly six cards
test("Studies section always renders exactly six cards", () => {
  render(<StudiesSection />);
  const cards = screen.getAllByRole("article");
  expect(cards).toHaveLength(6);
});

// Feature: github-portfolio-integration, Property 2: Every StudyCard contains all required fields
test("Every StudyCard contains all required fields", () => {
  render(<StudiesSection />);
  const cards = screen.getAllByRole("article");
  cards.forEach((card) => {
    const title = card.querySelector("h3");
    expect(title).not.toBeNull();
    expect(title.textContent.length).toBeGreaterThan(0);

    const purpose = card.querySelector("p");
    expect(purpose).not.toBeNull();
    expect(purpose.textContent.length).toBeGreaterThan(0);

    const badges = card.querySelectorAll(".tech-badge");
    expect(badges.length).toBeGreaterThanOrEqual(1);

    const links = card.querySelectorAll("a");
    const liveLink = Array.from(links).find(a => a.textContent.includes("Live Demo"));
    expect(liveLink).not.toBeNull();
    expect(liveLink.getAttribute("href")).toMatch(/netlify\.app/);
  });
});

// Feature: github-portfolio-integration, Property 8: CategoryFilter shows only populated categories
test("CategoryFilter shows only populated categories", () => {
  fc.assert(
    fc.property(
      fc.array(
        fc.record({
          id: fc.integer(),
          title: fc.string(),
          category: fc.constantFrom(
            "Web Development",
            "AI / ML",
            "Tools / Utilities",
            "Cybersecurity",
            "Blockchain"
          ),
          tech: fc.array(fc.string(), { minLength: 1 }),
        }),
        { minLength: 1 }
      ),
      (repos) => {
        const { unmount } = render(
          <CategoryFilter
            repos={repos}
            activeCategory="All"
            onCategoryChange={() => {}}
          />
        );
        try {
          const buttons = screen.getAllByRole("button");
          const buttonLabels = buttons
            .map(b => b.textContent)
            .filter(label => label !== "All");

          const repoCategories = new Set(repos.map(r => r.category));
          for (const label of buttonLabels) {
            expect(repoCategories.has(label)).toBe(true);
          }
        } finally {
          unmount();
        }
        return true;
      }
    ),
    { numRuns: 100 }
  );
});

// Feature: github-portfolio-integration, Property 9: Category filter shows only cards from the selected category
test("Category filter shows only cards from the selected category", () => {
  fc.assert(
    fc.property(
      fc.array(
        fc.record({
          id: fc.integer(),
          title: fc.string({ minLength: 1 }),
          description: fc.string({ minLength: 1 }),
          category: fc.constantFrom("Web Development", "AI / ML", "Cybersecurity"),
          tech: fc.array(fc.string(), { minLength: 1 }),
        }),
        { minLength: 1 }
      ),
      fc.constantFrom("Web Development", "AI / ML", "Cybersecurity"),
      (repos, activeCategory) => {
        const cardRefs = { current: new Map() };
        const { unmount } = render(
          <ProjectsSection
            repos={repos}
            loading={false}
            error={false}
            usingFallback={false}
            activeCategory={activeCategory}
            onCategoryChange={() => {}}
            onCardClick={() => {}}
            cardRefs={cardRefs}
          />
        );
        try {
          const renderedCards = document.querySelectorAll(".project-card");
          renderedCards.forEach((card) => {
            expect(card.getAttribute("data-category")).toBe(activeCategory);
          });
        } finally {
          unmount();
        }
        return true;
      }
    ),
    { numRuns: 100 }
  );
});

// Feature: github-portfolio-integration, Property 10: All filter shows every project exactly once
test("All filter shows every project exactly once", () => {
  fc.assert(
    fc.property(
      fc.array(
        fc.record({
          id: fc.integer(),
          title: fc.string({ minLength: 1 }),
          description: fc.string({ minLength: 1 }),
          category: fc.constantFrom("Web Development", "AI / ML"),
          tech: fc.array(fc.string(), { minLength: 1 }),
        }),
        { minLength: 1 }
      ),
      (repos) => {
        const seenIds = new Set();
        const uniqueRepos = repos.filter(r => {
          if (seenIds.has(r.id)) return false;
          seenIds.add(r.id);
          return true;
        });

        const cardRefs = { current: new Map() };
        const { unmount } = render(
          <ProjectsSection
            repos={uniqueRepos}
            loading={false}
            error={false}
            usingFallback={false}
            activeCategory="All"
            onCategoryChange={() => {}}
            onCardClick={() => {}}
            cardRefs={cardRefs}
          />
        );
        try {
          const renderedCards = document.querySelectorAll(".project-card");
          expect(renderedCards).toHaveLength(uniqueRepos.length);
        } finally {
          unmount();
        }
        return true;
      }
    ),
    { numRuns: 100 }
  );
});

// Feature: github-portfolio-integration, Property 11: Every ProjectCard has non-empty title, description, and at least one TechBadge
test("Every ProjectCard has non-empty title, description, and at least one TechBadge", () => {
  fc.assert(
    fc.property(
      fc.record({
        id: fc.integer(),
        title: fc.string({ minLength: 1 }),
        description: fc.string({ minLength: 1 }),
        category: fc.string(),
        tech: fc.array(fc.string({ minLength: 1 }), { minLength: 1 }),
      }),
      (project) => {
        const { unmount, container } = render(
          <ProjectCard project={project} onClick={() => {}} />
        );
        try {
          const title = screen.getByRole("heading", { level: 3 });
          expect(title.textContent).toBe(project.title);

          const desc = container.querySelector(".preview-text");
          expect(desc).not.toBeNull();
          expect(desc.textContent).toBe(project.description);

          const badges = screen.getAllByText((content, element) => 
            element.className === "tech-badge"
          );
          expect(badges.length).toBeGreaterThanOrEqual(1);
        } finally {
          unmount();
        }
        return true;
      }
    ),
    { numRuns: 100 }
  );
});

// Feature: github-portfolio-integration, Property 12: Tech overflow badge count is accurate
test("Tech overflow badge count is accurate", () => {
  fc.assert(
    fc.property(
      fc.record({
        id: fc.integer(),
        title: fc.string({ minLength: 1 }),
        description: fc.string({ minLength: 1 }),
        category: fc.string(),
        tech: fc.array(fc.string(), { minLength: 4 }),
      }),
      (project) => {
        const { unmount } = render(
          <ProjectCard project={project} onClick={() => {}} />
        );
        try {
          const moreBadge = screen.getByText(`+${project.tech.length - 3}`);
          expect(moreBadge).not.toBeNull();
          expect(moreBadge.className).toContain("more");
        } finally {
          unmount();
        }
        return true;
      }
    ),
    { numRuns: 100 }
  );
});

// Feature: github-portfolio-integration, Property 15: API failure falls back to static dataset
test("API failure falls back to static dataset", async () => {
  global.fetch = jest.fn().mockRejectedValue(new Error("Network Error"));

  render(<ProjectsPage />);
  
  await waitFor(() => {
    expect(screen.queryByLabelText("Loading projects")).toBeNull();
  });

  expect(screen.getByRole("status").textContent).toMatch(/Displaying static fallback projects/i);
  expect(screen.getByText("CodeSpace - Browser IDE")).not.toBeNull();
});

// Feature: github-portfolio-integration, Property 16: Active tab controls mutual section visibility
test("Active tab controls mutual section visibility", async () => {
  await fc.assert(
    fc.asyncProperty(
      fc.constantFrom("projects", "studies"),
      async (tab) => {
        const { unmount } = render(<ProjectsPage />);
        try {
          await waitFor(() => {
            expect(screen.queryByLabelText("Loading projects")).toBeNull();
          });
          const projectsTabButton = screen.getByRole("tab", { name: "Projects" });
          const studiesTabButton = screen.getByRole("tab", { name: "Studies" });

          if (tab === "projects") {
            fireEvent.click(projectsTabButton);
            const projectsPanel = screen.getByRole("tabpanel", { name: "Projects", hidden: true });
            const studiesPanel = screen.getByRole("tabpanel", { name: "Studies", hidden: true });
            expect(projectsPanel.parentElement.style.display).toBe("block");
            expect(studiesPanel.parentElement.style.display).toBe("none");
          } else {
            fireEvent.click(studiesTabButton);
            const projectsPanel = screen.getByRole("tabpanel", { name: "Projects", hidden: true });
            const studiesPanel = screen.getByRole("tabpanel", { name: "Studies", hidden: true });
            expect(projectsPanel.parentElement.style.display).toBe("none");
            expect(studiesPanel.parentElement.style.display).toBe("block");
          }
        } finally {
          unmount();
        }
        return true;
      }
    ),
    { numRuns: 5 }
  );
}, 15000);

// Feature: github-portfolio-integration, Property 17: All external links carry correct security attributes
test("All external links carry target='_blank' and rel='noopener noreferrer'", async () => {
  global.fetch = jest.fn().mockRejectedValue(new Error("Network Error"));
  render(<ProjectsPage />);
  
  await waitFor(() => {
    expect(screen.queryByLabelText("Loading projects")).toBeNull();
  });

  const anchors = document.querySelectorAll("a[target='_blank']");
  expect(anchors.length).toBeGreaterThan(0);
  anchors.forEach((a) => {
    expect(a.getAttribute("rel")).toBe("noopener noreferrer");
  });
});

// Feature: github-portfolio-integration, Property 18: Fetch is called at most once per component mount
test("Fetch is called at most once per component mount", async () => {
  const mockFetch = jest.fn().mockResolvedValue({
    ok: true,
    json: async () => [],
  });
  global.fetch = mockFetch;

  render(<ProjectsPage />);
  
  await waitFor(() => {
    expect(screen.queryByLabelText("Loading projects")).toBeNull();
  });

  const studiesTabButton = screen.getByRole("tab", { name: "Studies" });
  fireEvent.click(studiesTabButton);
  const projectsTabButton = screen.getByRole("tab", { name: "Projects" });
  fireEvent.click(projectsTabButton);

  expect(mockFetch).toHaveBeenCalledTimes(1);
});

describe("Unit and example tests", () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => [],
    });
  });

  test("Default tab is Projects on first render", async () => {
    render(<ProjectsPage />);
    await waitFor(() => {
      expect(screen.queryByLabelText("Loading projects")).toBeNull();
    });
    const projectsTab = screen.getByRole("tab", { name: "Projects" });
    expect(projectsTab.getAttribute("aria-selected")).toBe("true");
  });

  test("Studies section renders no loading skeleton", () => {
    render(<StudiesSection />);
    expect(screen.queryByLabelText("Loading projects")).toBeNull();
  });

  test("Modal opens on card click and sets document.body.style.overflow to hidden", async () => {
    global.fetch = jest.fn().mockRejectedValue(new Error("Network Error"));
    render(<ProjectsPage />);

    await waitFor(() => {
      expect(screen.queryByLabelText("Loading projects")).toBeNull();
    });

    const card = screen.getByText("CodeSpace - Browser IDE");
    fireEvent.click(card);

    expect(screen.getByRole("dialog")).not.toBeNull();
    expect(document.body.style.overflow).toBe("hidden");
  });
});
