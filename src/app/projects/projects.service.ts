import { Injectable } from '@angular/core';
import { Project } from './project.model';

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  private projects = [
    new Project(
      'Score Prediction',
      'An End to End Machine Learning Project',
      'assets/ml.jpg',
      'https://github.com/siddusaikumar-git/mlproject',
      ''
    ),
    new Project(
      'Online MarketPlace',
      'A Marketplace to sell products',
      'assets/market_place.jpg',
      'https://github.com/siddusaikumar-git/online-marketplace',
      ''
    ),
    new Project(
      'Publications',
      "A Tool to store research papers and pdf's",
      'assets/publications.jpg',
      'https://github.com/siddusaikumar-git/Research-Paper-Management-System',
      ''
    ),
    new Project(
      'Chess',
      'A Chess board game',
      'assets/chess.jpg',
      'https://github.com/siddusaikumar-git/Chess',
      ''
    ),
    new Project(
      'Recipe Book',
      'A Book of Awesome recipes',
      'assets/recipe_book.jpg',
      'https://github.com/siddusaikumar-git/Recipe-Book',
      'https://recipebook-k22.web.app/'
    ),
    new Project(
      'Food Ordering App',
      'An App to Order delicious food',
      'assets/food_order.jpg',
      'https://github.com/siddusaikumar-git/food-ordering-app',
      'https://statuesque-toffee-94bbea.netlify.app/'
    ),
    new Project(
      'Jobster Web Application',
      'An Application to track Job Application',
      'assets/jobster.png',
      'https://github.com/siddusaikumar-git/jobster-api',
      'https://jobster-api-rxl5.onrender.com/'
    ),
    new Project(
      'Forkify Web Application',
      'An Web Application to store and access 1 Million recipes',
      'assets/forkify.jpg',
      'https://github.com/siddusaikumar-git/forkify-web-application',
      'https://forkify-saikumarsiddu.netlify.app/'
    ),
    new Project(
      'OmniFood Web Application',
      'A Food Ordering Web Application',
      'assets/omni_food.jpg',
      'https://github.com/siddusaikumar-git/Omnifood-Web-Application',
      'https://omnifood-saikumarsiddu.netlify.app/'
    ),
    new Project(
      'Breaching WPA2 Personal',
      'Understanding security breache at router',
      'assets/web_persona.jpg',
      'https://github.com/siddusaikumar-git/Cryptography',
      ''
    ),
    new Project(
      'DDOS Attach Simulation',
      'Peformed DDOS attack, analysed hosts data and visualized the graphs',
      'assets/ddos.jpg',
      'https://github.com/siddusaikumar-git/Network-Security',
      ''
    ),
    new Project(
      'N - Queens',
      'Solved the location of queens on the board using Conjunction normal form',
      'assets/n_queens.jpg',
      'https://github.com/siddusaikumar-git/Logics-for_computer-scientist',
      ''
    ),
    new Project(
      'Malware Detection',
      'Utilized ML and DL Models on Spam messages filtering',
      'assets/malware_detection.jpg',
      'https://github.com/siddusaikumar-git/Machine-Learning-Information-Security',
      ''
    ),
    new Project(
      'Pacman path optimization',
      'Pacman avoids the ghosts and eats food pallets',
      'assets/pacman.jpg',
      'https://github.com/siddusaikumar-git/Intelligent-Systems',
      ''
    ),
  ];

  getProjects() {
    return this.projects.slice();
  }
}
