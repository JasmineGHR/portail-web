export const projects = [
  {
    title: "Chanel Online Store Revamp",
    field: "E-commerce",
    size: 4,
    client: "CHANEL",
    duration: 3, // months
    technologies: ["JEE", "Java", "React", "JSON"],
    projectTeam: 1
  },
  {
    title: "Pfizer Health Data Platform",
    field: "Healthcare",
    size: 6,
    client: "Pfizer",
    duration: 6, // months
    technologies: ["Python", "Flask", "PostgreSQL", "Angular"],
    projectTeam: 2
  },
  {
    title: "JP Morgan Financial Services Platform",
    field: "Fintech",
    size: 8,
    client: "JP Morgan",
    duration: 12, // months
    technologies: ["Spring Boot", "Java", "React", "MongoDB"],
    projectTeam: 3
  },
  {
    title: "Tesla Vehicle Management System",
    field: "Automotive",
    size: 5,
    client: "Tesla",
    duration: 9, // months
    technologies: ["Node.js", "Express", "Vue.js", "MySQL"],
    projectTeam: 2
  },
  {
    title: "Walmart Mobile Checkout App",
    field: "Retail",
    size: 3,
    client: "Walmart",
    duration: 2, // months
    technologies: ["Ruby on Rails", "React Native", "PostgreSQL"],
    projectTeam: 1
  },
  {
    title: "Amazon Logistics Optimization",
    field: "Logistics",
    size: 7,
    client: "Amazon",
    duration: 4, // months
    technologies: ["Django", "Python", "Vue.js", "GraphQL"],
    projectTeam: 3
  },
  {
    title: "HSBC Digital Banking Platform",
    field: "Banking",
    size: 10,
    client: "HSBC",
    duration: 18, // months
    technologies: ["Kotlin", "Spring Boot", "React", "Kubernetes"],
    projectTeam: 4
  },
  {
    title: "Verizon Network Management Tool",
    field: "Telecommunications",
    size: 4,
    client: "Verizon",
    duration: 5, // months
    technologies: ["Go", "Vue.js", "MongoDB", "Docker"],
    projectTeam: 1
  }
];

  export function getProject(projectTitle){
    let project;
      projects.forEach((projectitem) => {
      if (projectitem.title === projectTitle ) {
        project = projectitem;
      }
      });
  
      return project ;
  }
  