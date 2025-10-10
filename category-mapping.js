// Project Category Mapping Script
// This script helps categorize all projects based on Projects.js

const projectCategories = {
  // Web Development
  1: { category: "Web Development", tags: ["React", "TypeScript", "Monaco Editor", "Python Interpreter", "IDE", "Development Tools"] },
  3: { category: "Web Development", tags: ["React", "Portfolio", "CSS3", "JavaScript"] },
  6: { category: "Web Development", tags: ["React", "E-commerce", "Netlify Functions", "Serverless"] },
  8: { category: "Web Development", tags: ["React", "Weather", "API", "JavaScript"] },
  20: { category: "Web Development", tags: ["Vanilla JavaScript", "HTML5", "CSS3", "Desktop OS", "Window Management"] },
  
  // Task Management (Web Development)
  6: { category: "Web Development", tags: ["React", "Task Management", "MongoDB", "Node.js"] }, // Note: This was duplicated, keeping as Web Development
  
  // Blockchain
  2: { category: "Blockchain", tags: ["React", "TypeScript", "Flask", "Python", "Blockchain", "SHA-256", "JWT Auth"] },
  27: { category: "Blockchain", tags: ["Python", "Blockchain", "Cryptography", "Certificate Validation", "API Development"] },
  
  // 3D & Graphics
  21: { category: "3D & Graphics", tags: ["React", "TypeScript", "Three.js", "WebGL", "3D Graphics", "Mathematical Animations"] },
  25: { category: "3D & Graphics", tags: ["TypeScript", "Three.js", "WebGL", "3D Graphics", "Interactive Design"] },
  
  // Media & Entertainment
  7: { category: "Media & Entertainment", tags: ["React", "TypeScript", "Video Streaming", "Vite", "Tailwind CSS"] },
  22: { category: "Media & Entertainment", tags: ["Python", "Tkinter", "ACRCloud API", "Music Recognition", "Real-time Processing"] },
  24: { category: "Media & Entertainment", tags: ["TypeScript", "HTML5", "CSS3", "Animations", "Celebration"] },
  
  // Cybersecurity
  5: { category: "Cybersecurity", tags: ["React", "TypeScript", "Material-UI", "FastAPI", "Aircrack-NG", "Wireless Security"] },
  7: { category: "Cybersecurity", tags: ["Python", "Scapy", "DDoS Simulation", "Networking", "Educational"] }, // DDOS Tool (ID corrected)
  23: { category: "Cybersecurity", tags: ["Python", "Scapy", "Tkinter", "Penetration Testing", "Vulnerability Assessment", "Professional Reporting"] },
  26: { category: "Desktop Applications", tags: ["Python", "USB Security", "Forensics", "Cybersecurity", "Device Analysis"] },
  
  // AI & Machine Learning
  4: { category: "AI & Machine Learning", tags: ["Python", "AI", "Machine Learning", "PyTorch", "Privacy-first", "Offline Capable"] },
  12: { category: "AI & Machine Learning", tags: ["Python", "OpenCV", "Drone Technology", "Computer Vision", "Real-time Streaming"] },
  
  // Computer Vision (AI & Machine Learning)
  18: { category: "Computer Vision", tags: ["OpenCV", "Python", "Computer Vision", "Machine Learning", "Image Processing", "Enterprise Solutions"] },
  
  // Educational
  9: { category: "Educational", tags: ["React", "Node.js", "Student Portal", "Database", "Education"] },
  14: { category: "Educational", tags: ["React", "TypeScript", "Vite", "TailwindCSS", "Supabase", "School Management"] },
  15: { category: "Educational", tags: ["React", "TypeScript", "localStorage", "Offline-First", "Progressive Web App"] },
  29: { category: "Educational", tags: ["TypeScript", "Course Management", "Student Tracking", "Interactive Tools", "Collaborative Platform"] },
  
  // Business & Productivity
  10: { category: "Business & Productivity", tags: ["React", "TypeScript", "React-Router-Dom", "Tailwind CSS", "Pharmacy Management"] },
  11: { category: "Business & Productivity", tags: ["JavaScript", "HTML", "CSS", "TypeScript", "React", "Medical Equipment"] },
  19: { category: "Business & Productivity", tags: ["React", "Node.js", "Task Management", "Real-time Updates", "Modern UI/UX"] },
  28: { category: "Business & Productivity", tags: ["TypeScript", "Business Automation", "Project Management", "Real-time Collaboration", "Workflow Automation"] },
  
  // Mobile & Cross-Platform
  16: { category: "Mobile & Cross-Platform", tags: ["React Native", "TypeScript", "Mobile Development", "Cross-Platform", "Native Components"] },
  17: { category: "Mobile & Cross-Platform", tags: ["React Native", "TypeScript", "Mobile UI/UX", "Payment Simulation", "NFC Mockup"] },
  
  // Desktop Applications
  30: { category: "Desktop Applications", tags: ["Python", "Data Structures", "Algorithms", "Web Scraping", "Automation", "Educational"] },
  
  // WordPress (No specific category in Projects.js, keeping as Web Development)
  13: { category: "Web Development", tags: ["WordPress", "PHP", "Custom Themes", "Client Projects"] }
};

// Category Summary and Validation
const categorySummary = {
  "Web Development": [1, 3, 6, 8, 13, 20],
  "Blockchain": [2, 27],
  "3D & Graphics": [21, 25],
  "Media & Entertainment": [7, 22, 24],
  "Cybersecurity": [5, 7, 23], // Note: Project 26 (USBForge) is categorized as Desktop Applications in Projects.js
  "AI & Machine Learning": [4, 12],
  "Computer Vision": [18], // Note: This category is used in Projects.js but not in the categories array
  "Educational": [9, 14, 15, 29],
  "Business & Productivity": [10, 11, 19, 28],
  "Mobile & Cross-Platform": [16, 17],
  "Desktop Applications": [26, 30] // Note: Project 26 (USBForge) and 30 (Python's Might)
};

// Validation Notes:
// 1. Project 18 (OpenCV) uses "Computer Vision" category but it's not in the categories filter array
// 2. Project 26 (USBForge) is categorized as "Desktop Applications" but has cybersecurity functionality
// 3. Some projects may need category adjustments based on primary functionality

console.log("Project categories mapped for", Object.keys(projectCategories).length, "projects");
console.log("Categories in use:", Object.keys(categorySummary));

// Export for potential use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { projectCategories, categorySummary };
}