const LANGUAGE_TO_TECH = {
  JavaScript:  ["JavaScript"],
  TypeScript:  ["TypeScript"],
  Python:      ["Python"],
  HTML:        ["HTML5", "CSS3"],
  CSS:         ["CSS3"],
  "C#":        ["C#", ".NET"],
  "C++":       ["C++"],
  Java:        ["Java"],
  Dart:        ["Flutter", "Dart"],
  Kotlin:      ["Kotlin", "Android"],
  Swift:       ["Swift", "iOS"],
  Rust:        ["Rust"],
  Go:          ["Go"],
  Ruby:        ["Ruby"],
  PHP:         ["PHP"],
};

const NAME_PATTERNS = [
  { match: /react/i,        tech: ["React"] },
  { match: /next/i,         tech: ["Next.js", "React"] },
  { match: /vue/i,          tech: ["Vue.js"] },
  { match: /angular/i,      tech: ["Angular"] },
  { match: /node/i,         tech: ["Node.js"] },
  { match: /flask/i,        tech: ["Flask", "Python"] },
  { match: /django/i,       tech: ["Django", "Python"] },
  { match: /blockchain/i,   tech: ["Blockchain"] },
  { match: /ethereum|solidity|web3/i, tech: ["Ethereum", "Solidity", "Web3"] },
  { match: /opencv/i,       tech: ["OpenCV", "Python"] },
  { match: /tensorflow|torch/i, tech: ["TensorFlow", "Python"] },
  { match: /electron/i,     tech: ["Electron.js"] },
  { match: /tailwind/i,     tech: ["Tailwind CSS"] },
  { match: /supabase/i,     tech: ["Supabase"] },
  { match: /mongo/i,        tech: ["MongoDB"] },
  { match: /postgres|pgsql/i, tech: ["PostgreSQL"] },
  { match: /redis/i,        tech: ["Redis"] },
  { match: /docker/i,       tech: ["Docker"] },
  { match: /kubernetes/i,   tech: ["Kubernetes"] },
  { match: /drone|iot|arduino|raspberry/i, tech: ["IoT", "Python"] },
  { match: /mobile|react-native|expo/i, tech: ["React Native", "Expo"] },
  { match: /three|3d|webgl/i, tech: ["Three.js", "WebGL"] },
  { match: /pentest|scapy|aircrack|ddos/i, tech: ["Python", "Scapy"] },
  { match: /weather/i,      tech: ["React", "REST API"] },
  { match: /wordpress|wp/i, tech: ["WordPress", "PHP"] },
];

export function inferTechStack(repo) {
  const techs = new Set();

  if (!repo) return ["JavaScript"];

  // 1. Name-pattern matching
  for (const { match, tech } of NAME_PATTERNS) {
    const searchTarget = `${repo.name || ""} ${repo.description || ""}`;
    if (match.test(searchTarget)) {
      tech.forEach(t => techs.add(t));
    }
  }

  // 2. Primary language (GitHub API)
  if (repo.language && Array.isArray(LANGUAGE_TO_TECH[repo.language])) {
    LANGUAGE_TO_TECH[repo.language].forEach(t => techs.add(t));
  }

  // 3. Absolute fallback
  if (techs.size === 0) {
    techs.add(repo.language || "JavaScript");
  }

  return Array.from(techs);
}
