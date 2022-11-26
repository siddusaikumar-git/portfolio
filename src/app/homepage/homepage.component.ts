import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HeaderService } from '../header/header.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit, OnDestroy{

  imagePath = "https://raw.githubusercontent.com/siddusaikumar-git/developerFolio/183d31241a1195b5ef38a55cea079996148d9106/src/assets/images/skill.svg"
  lightMode: boolean;
  lightModeSub: Subscription;
  constructor(private headerService: HeaderService){}

  ngOnInit(): void {
    this.lightMode = true;
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
