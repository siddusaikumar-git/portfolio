import { Injectable } from "@angular/core";
import { Skill } from "./skill.model";

@Injectable({providedIn: 'root'})
export class SkillsService {

    private skills = [
        new Skill( "Angular", "fa-brands fa-angular", 8),
        new Skill( "Python", "fa-brands fa-python", 8),
        new Skill( "Java", "fa-brands fa-java", 8),
        new Skill( "C", "fa-solid fa-c", 8),
        new Skill( "GitHub", "fa-brands fa-github", 8),
        new Skill( "SQL", "fa-solid fa-database", 8),
        new Skill( "HTML", "fa-brands fa-html5", 8),
        new Skill( "CSS", "fa-brands fa-css3-alt", 8),
        new Skill( "AWS", "fa-brands fa-aws", 8),
        new Skill( "GCP", "fa-brands fa-google", 8),
        new Skill( "Docker", "fa-brands fa-docker", 8),
        new Skill( "Git", "fa-brands fa-git-alt", 8),
        new Skill( "GitLab", "fa-brands fa-gitlab", 8),
        new Skill( "ML", "fa-solid fa-brain", 8),
        new Skill( "NLP", "fa-solid fa-language", 8),

    ]
    
    getSkills(){
        return this.skills.slice();
    }


}