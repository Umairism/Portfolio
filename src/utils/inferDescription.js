const PATTERNS = [
  { match: /blockchain|cert/i, desc: (r) => `A blockchain-based certificate verification system built in ${r.language || "multiple languages"}.` },
  { match: /drone|uav/i,       desc: () => "An IoT drone surveillance system with real-time video streaming and computer vision." },
  { match: /ai|ml|neural/i,    desc: (r) => `An AI / machine learning project implemented in ${r.language || "Python"}.` },
  { match: /portfolio|personal/i, desc: () => "A personal portfolio website showcasing projects and skills." },
  { match: /ecom|shop|store/i, desc: () => "An e-commerce platform with product catalog and cart functionality." },
  { match: /weather/i,         desc: () => "A weather forecast application using real-time API data." },
  { match: /task|todo/i,       desc: () => "A task management application with CRUD operations." },
  { match: /chat|message/i,    desc: () => "A real-time chat and messaging application." },
  { match: /game/i,            desc: () => "A browser-based game project." },
];

const LANGUAGE_FALLBACKS = {
  Python:     "A Python project for automation, scripting, or data processing.",
  JavaScript: "A JavaScript web application.",
  TypeScript: "A TypeScript application with strong type safety.",
  "C#":       "A C# desktop or web application built on .NET.",
  Java:       "A Java application demonstrating object-oriented design.",
  HTML:       "A static web page or front-end template.",
};

export function inferDescription(repo) {
  if (!repo) return "A software project exploring modern development techniques and best practices.";

  const name = repo.name || "";
  const desc = repo.description || "";
  const searchStr = `${name} ${desc}`;

  for (const { match, desc: descFn } of PATTERNS) {
    if (match.test(searchStr)) {
      return descFn(repo);
    }
  }

  if (repo.language && LANGUAGE_FALLBACKS[repo.language]) {
    return LANGUAGE_FALLBACKS[repo.language];
  }

  return "A software project exploring modern development techniques and best practices.";
}
