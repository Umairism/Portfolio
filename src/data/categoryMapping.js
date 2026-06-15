export const categoryRules = [
  {
    keywords: ['blockchain', 'crypto', 'nft', 'solidity', 'web3', 'ethereum', 'ipfs', 'certificate-verif'],
    languages: [],
    category: 'Blockchain',
  },
  {
    keywords: ['ai', 'ml', 'neural', 'gpt', 'openai', 'llm', 'opencv', 'vision', 'yolo', 'drone',
               'leading-ai', 'air-drawing', 'portable-ai', 'healsense', 'fyp'],
    languages: ['Python'],
    category: 'AI / ML',
  },
  {
    keywords: ['security', 'hack', 'pentest', 'aircrack', 'ddos', 'dos-tool', 'usbforge', 'cyber',
               'exploit', 'scapy', 'wireless'],
    languages: [],
    category: 'Cybersecurity',
  },
  {
    keywords: ['android', 'flutter', 'react-native', 'mobile', 'expo', 'offline-card', 'card-wallet'],
    languages: ['Dart', 'Kotlin', 'Swift'],
    category: 'Mobile & Cross-Platform',
  },
  {
    keywords: ['desktop', 'electron', 'gtk', 'qt', 'winforms', 'forms', 'visual-program', 'res-changer'],
    languages: ['C++', 'C#', 'Java'],
    category: 'Desktop Applications',
  },
  {
    keywords: ['automata', 'compiler', 'algorithm', 'parse', 'grammar', 'theory', 'os', 'dbms',
               'benchmark', 'student-portal', 'school', 'teachers', 'pythons-might', 'python-s-might'],
    languages: [],
    category: 'Academic / CS Projects',
  },
  {
    keywords: ['health', 'medical', 'iot', 'sensor', 'mqtt', 'arduino', 'raspberry', 'healsense',
               'fyp', 'drone-system'],
    languages: [],
    category: 'Healthcare & IoT',
  },
  {
    keywords: ['media', 'video', 'youtube', 'slimetube', 'lyrixx', 'birthday', 'harmonium',
               'entertainment', 'music', 'celebration'],
    languages: [],
    category: 'Media & Entertainment',
  },
  {
    keywords: ['tool', 'util', 'cli', 'script', 'automation', 'bot', 'email-bot', 'contact-card',
               'res-changer', 'scraper', 'generator'],
    languages: [],
    category: 'Tools / Utilities',
  },
  {
    // Catch-all for web / JS work
    keywords: ['portfolio', 'website', 'ecommerce', 'shop', 'codespace', 'weather', 'news', 'chronicle',
               'wedding', 'proposal', 'outsource', 'xperti', 'task-manager', 'taskmgr', 'pharmacy',
               'linuxos', 'who-is', 'veterans', '3d', 'three', 'webgl'],
    languages: ['JavaScript', 'TypeScript', 'HTML'],
    category: 'Web Development',
  },
];

export const DEFAULT_CATEGORY = 'Web Development';

export function assignCategoryToRepo(repo) {
  const name = (repo.name || '').toLowerCase();
  const desc = (repo.description || '').toLowerCase();
  const lang = repo.language;

  for (const rule of categoryRules) {
    const hasKeyword = rule.keywords.some(kw => name.includes(kw) || desc.includes(kw));
    const hasLanguage = rule.languages.some(l => lang && lang.toLowerCase() === l.toLowerCase());
    
    if (hasKeyword || hasLanguage) {
      return rule.category;
    }
  }
  return DEFAULT_CATEGORY;
}
