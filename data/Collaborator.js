
const collaborators = [
    {
      name: "Daniel",
      email: "daniel@gmail.com",
      post: "Software Developer",
      projectTeamId: 1,
      image: "images/collaborator.png" // Chemin ou URL de l'image
    },
    {
      name: "Sarah",
      email: "sarah@yahoo.com",
      post: "Project Manager",
      projectTeamId: 2,
      image: "images/collaborator.png"
    },
    {
      name: "John",
      email: "john.smith@outlook.com",
      post: "Frontend Developer",
      projectTeamId: 1,
      image: "images/collaborator.png"
    },
    {
      name: "Emily",
      email: "emily.jones@company.com",
      post: "UI/UX Designer",
      projectTeamId: 2,
      image: "images/collaborator.png"
    },
    {
      name: "Michael",
      email: "michael.brown@techcorp.com",
      post: "Backend Developer",
      projectTeamId: 1,
      image: "images/collaborator.png"
    },
    {
      name: "Olivia",
      email: "olivia.williams@startup.io",
      post: "Full-Stack Developer",
      projectTeamId: 3,
      image: "images/collaborator.png"
    },
    {
      name: "David",
      email: "david@consulting.com",
      post: "DevOps Engineer",
      projectTeamId: 2,
      image: "images/collaborator.png"
    },
    {
      name: "Sophia",
      email: "sophia.miller@innovate.com",
      post: "Data Scientist",
      projectTeamId: 3,
      image: "images/collaborator.png"
    },
    {
      name: "James",
      email: "james.taylor@bigdata.com",
      post: "Cloud Architect",
      projectTeamId: 1,
      image: "images/collaborator.png"
    },
    {
      name: "Lucas",
      email: "lucas.anderson@solutions.com",
      post: "Scrum Master",
      projectTeamId: 3,
      image: "images/collaborator.png"
    }
];

  export function getTeam(projectTeamId){
    let team=[] ;
    collaborators.forEach((collab)=>{
        if(collab.projectTeamId===projectTeamId){
            team.push(collab) ;
        }
    })
    return team ;
  }