import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HeaderService } from 'src/app/header/header.service';
import { Project } from '../project.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
@Input() project: Project;
  lightMode: boolean = true;
  lightModeSub: Subscription;
  constructor(private headerService: HeaderService){}

  ngOnInit(): void {
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
