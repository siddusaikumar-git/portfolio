
import { Injectable } from "@angular/core";
import { Project } from "./project.model";

@Injectable({providedIn: 'root'})
export class ProjectsService {

    private projects = [
        new Project(
            "Recipe Book",
            "A Book of Awesome recipes",
            "https://magazine.du.edu/wp-content/uploads/2021/06/10_Easy_Steps-LARGE.jpg",
            "https://github.com/siddusaikumar-git/Recipe-Book",
            "https://recipebook-k22.web.app/"
        ),
        new Project(
            "Breaching WPA2 Personal",
            "Understanding security breache at router",
            "https://sectigostore.com/blog/wp-content/uploads/2021/01/what-is-wpa2-security.jpg",
            "https://github.com/siddusaikumar-git/Cryptography",
            "https://github.com/siddusaikumar-git/Cryptography"
        ),
        new Project(
            "DDOS Attach Simulation",
            "Peformed DDOS attack, analysed hosts data and visualized the graphs",
            "https://www.bleepstatic.com/content/hl-images/2022/08/17/global-pew-pew.jpg?rand=950499232",
            "https://github.com/siddusaikumar-git/Network-Security",
            "https://github.com/siddusaikumar-git/Network-Security"
        ),
        new Project(
            "N - Queens",
            "Solved the location of queens on the board using Conjunction normal form",
            "https://miro.medium.com/max/1400/0*N3iW8dkdOD_GTMeT",
            "https://github.com/siddusaikumar-git/Logics-for_computer-scientist",
            "https://github.com/siddusaikumar-git/Logics-for_computer-scientist"
        ),
        new Project(
            "Malware Detection",
            "Utilized ML and DL Models on Spam messages filtering",
            "https://www.bleepstatic.com/images/stock-photos/security/data-leak.jpg",
            "https://github.com/siddusaikumar-git/Machine-Learning-Information-Security",
            "https://github.com/siddusaikumar-git/Machine-Learning-Information-Security"
        ),
        new Project(
            "Pacman path optimization",
            "Pacman avoids the ghosts and eats food pallets",
            "https://wallpaperaccess.com/full/765395.jpg",
            "https://github.com/siddusaikumar-git/Intelligent-Systems",
            "https://github.com/siddusaikumar-git/Intelligent-Systems"
        )

    ]

    getProjects(){
        return this.projects.slice();
    }

}