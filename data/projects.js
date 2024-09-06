 export const projects = [
    {
      title: "Project 1",
      field: "E-commerce",
      size: 4,
      client: "CHANEL",
      duration: 3, // months
      technologies: ["JEE", "Java", "React", "JSON"],
      projectTeam: 1
    },
    {
      title: "Project 2",
      field: "Healthcare",
      size: 6,
      client: "Pfizer",
      duration: 6, // months
      technologies: ["Python", "Flask", "PostgreSQL", "Angular"],
      projectTeam: 2
    },
    {
      title: "Project 3",
      field: "Fintech",
      size: 8,
      client: "JP Morgan",
      duration: 12, // months
      technologies: ["Spring Boot", "Java", "React", "MongoDB"],
      projectTeam: 3
    },
    {
      title: "Project 4",
      field: "Automotive",
      size: 5,
      client: "Tesla",
      duration: 9, // months
      technologies: ["Node.js", "Express", "Vue.js", "MySQL"],
      projectTeam: 2
    },
    {
      title: "Project 5",
      field: "Retail",
      size: 3,
      client: "Walmart",
      duration: 2, // months
      technologies: ["Ruby on Rails", "React Native", "PostgreSQL"],
      projectTeam: 1
    },
    {
      title: "Project 6",
      field: "Logistics",
      size: 7,
      client: "Amazon",
      duration: 4, // months
      technologies: ["Django", "Python", "Vue.js", "GraphQL"],
      projectTeam: 3
    },
    {
      title: "Project 7",
      field: "Banking",
      size: 10,
      client: "HSBC",
      duration: 18, // months
      technologies: ["Kotlin", "Spring Boot", "React", "Kubernetes"],
      projectTeam: 4
    },
    {
      title: "Project 8",
      field: "Telecommunications",
      size: 4,
      client: "Verizon",
      duration: 5, // months
      technologies: ["Go", "Vue.js", "MongoDB", "Docker","Docker","Docker"],
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
  