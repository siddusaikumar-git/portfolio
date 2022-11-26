import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HeaderService } from '../header/header.service';
import { Skill } from './skill.model';
import { SkillsService } from './skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit, OnDestroy{

  skills: Skill[];
  lightMode: boolean;
  lightModeSub: Subscription;
  
  constructor(private skillsService: SkillsService, private headerService: HeaderService) {}

  ngOnInit(): void {
    this.lightMode = true;
    this.skills = this.skillsService.getSkills();
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
