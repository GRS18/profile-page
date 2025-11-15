// script.js

// Profile Data
const profile = {
  name: "Girish Shinde",
  role: "Apprentice Software Engineer",
  location: "Pune, Maharashtra",
  contact: {
    email: "girishshinde186@gmail.com",
    mobile: "+91 9552315337",
    github: "GRS18",
    linkedin: "girish-shinde-8a7907227"
  },
  education: [
    { course: "PG-DAC", institute: "CDAC", from: 2024, to: 2025, result: "71.75%" },
    { course: "B.E. Computer Science", institute: "SSBT’s COET Jalgaon", from: 2020, to: 2024, result: "81.94%" },
    { course: "HSC", institute: "M.J. College", year: 2020, result: "65.85%" },
    { course: "SSC", institute: "A.T. Zambre High School", year: 2018, result: "85.80%" }
  ],
  skills: [
    "Java", "Spring Boot", "C", "C++", "HTML", "CSS",
    "JavaScript", "React", "MySQL", "Data Structures",
    "Algorithms", "Git", "VS Code"
  ],
  projects: [
    {
      name: "NestOp’s: Society Management System",
      tech: ["Java (Spring Boot)", "React", "MySQL"],
      description: "System to manage society operations.",
      reportUrl: "https://drive.google.com/file/d/1StA2YRhlT-bOw2iq0ftC3SjUAa64n7SF/view"
    },
    {
      name: "Book Recommendation System",
      tech: ["Python", "Flask", "JavaScript", "HTML", "CSS"],
      description: "Personalized book suggestions using ML.",
      reportUrl: "https://drive.google.com/file/d/1DOcQhG1XN2X4gmmDPIC7d8i3_P54HbTL/view"
    }
  ],
  experience: [
    {
      company: "Thinkbridge",
      position: "Apprentice Software Engineer",
      startYear: 2025,
      endYear: null
    }
  ],
  hobbies: [
    { name: "Story Explorer", icon: "📚", description: "Novels and imaginative worlds." },
    { name: "Chess Mastermind", icon: "♟️", description: "Strategic chess gameplay." },
    { name: "Nature Sketcher", icon: "🌿", description: "Sketching nature scenes." }
  ]
};

// Functions
function introduce({ name, role, location }) {
  return `Hello! I'm ${name}, working as a ${role} in ${location}.`;
}

function getSkillList(skills) {
  return skills.join(", ");
}

function countProjects(projects) {
  return projects.length;
}

function summarizeProjects(projects) {
  return projects.map(({ name, tech }) => `${name} — (${tech.join(", ")})`);
}

function calculateExperienceYears(experience) {
  const currentYear = new Date().getFullYear();

  return experience
    .map(({ startYear, endYear }) => (endYear ?? currentYear) - startYear)
    .reduce((sum, years) => sum + years, 0);
}

function formatEducation(education) {
  return education.map((edu) => {
    if (edu.from && edu.to) {
      return `${edu.course} — ${edu.institute} (${edu.from}-${edu.to})`;
    }
    return `${edu.course} — ${edu.institute} (${edu.year})`;
  });
}

function listHobbies(hobbies) {
  return hobbies.map(({ icon, name, description }) => `${icon} ${name}: ${description}`);
}

// Main summary
function getSummary() {
  return {
    intro: introduce(profile),
    skills: getSkillList(profile.skills),
    totalProjects: countProjects(profile.projects),
    projects: summarizeProjects(profile.projects),
    experienceYears: calculateExperienceYears(profile.experience),
    educationList: formatEducation(profile.education),
    hobbyList: listHobbies(profile.hobbies)
  };
}

// Create summary
const summary = getSummary();
console.log(summary);
