import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HeaderService } from '../header/header.service';
import { Project } from './project.model';
import { ProjectsService } from './projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit, OnDestroy{

  projects: Project[];
  lightMode: boolean = true;
  lightModeSub: Subscription;

  constructor(private projectService: ProjectsService, private headerService: HeaderService) {}

  ngOnInit() {
    this.projects = this.projectService.getProjects();
      this.lightModeSub = this.headerService.lightModeEmitter.subscribe(
      lightMode => {
        this.lightMode = lightMode;
      }
    )
  }
  ngOnDestroy(): void {
    this.lightModeSub.unsubscribe();
  }


  

}
