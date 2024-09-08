/*import { projects } from '../data/projects.js';
import { getProject } from '../data/projects.js';

let homeHTML ='' ;
projects.forEach((project)=>{
    homeHTML+=`
        <p class="project-title"  data-project-title="${project.title}">${project.title}</p>
    `;
})

document.querySelector('.home-page').innerHTML=homeHTML ;
document.querySelectorAll('.project-title')
.forEach((title)=>{
    title.addEventListener('click', ()=>{
        const projectTitle=title.dataset.projectTitle ;
        const project=getProject(projectTitle) ;
        document.querySelector('.home-page').innerHTML=`
            <div class="project-title"></div>
            <div class="project-infos">
                <div class="project-">
                    <p class="field-label"></p> 
                    <p class="size-label"></p> 
                    <p class="client-label"></p> 
                    <p class="duration-label"></p> 
                </div>
                <div class="project-">
                    <p class="field-text">${project.field}</p> 
                    <p class="size-text">${project.size}</p> 
                    <p class="client-text">${project.client}</p> 
                    <p class="duration-text">${project.duration}</p>     
                </div>
            </div>
            <div class="technos">
                <div class="techno"></div>
            </div>

        ` ;
    })
})*/

import { projects } from '../data/projects.js';
import { getProject } from '../data/projects.js';
import { getTeam } from '../data/Collaborator.js';


let homeHTML = '<h2 color="white" >Project List</h2>';
projects.forEach((project) => {
    homeHTML += `
        
        <p class="project-title" data-project-title="${project.title}">${project.title}</p>
    `;
});

document.querySelector('.home-page').innerHTML = homeHTML;

document.querySelectorAll('.project-title')
    .forEach((title) => {
        title.addEventListener('click', () => {
            console.log('clicked');
            const projectTitle = title.dataset.projectTitle;
            const project = getProject(projectTitle);
            console.log(project);

            // Build HTML for technologies
            const technosHTML = project.technologies
                .map(tech => `<p class="techno">${tech}</p>`)
                .join('');

                const projectTeamHTML = getTeam(project.projectTeam)
                .map(collab => `
                            <div class="project-team">
                                <div class="collab">
                                    <img class="collab-image" src="${collab.image}">
                                </div>
                                <div class="collab">${collab.name}</div>
                                <div class="collab">${collab.email}</div>
                                <div class="collab">${collab.post}</div>
                            </div>`)
                .join('');

            document.querySelector('.home-page').innerHTML = `
                <div class="project-details">
                    <h2 class="projects-title">${project.title}</h2>
                    <div class="project-infos">
                        <div class="project-labels">
                            <p class="field-label">Field:</p> 
                            <p class="size-label">Team Size:</p> 
                            <p class="client-label">Client:</p> 
                            <p class="duration-label">Duration:</p> 
                        </div>
                        <div class="project-values">
                            <p class="field-text">${project.field}</p> 
                            <p class="size-text">${project.size}</p> 
                            <p class="client-text">${project.client}</p> 
                            <p class="duration-text">${project.duration} months</p>     
                        </div>
                    </div>
                    <h3>Technologies Used:</h3>
                    <div class="technos">     
                        ${technosHTML}
                    </div>
                    <h2 class="project-team-title">Project Team</h2>
                    <div class="project-team-section">
                    
                    ${projectTeamHTML}
                    </div>
                </div>
            `;
        });
    });
