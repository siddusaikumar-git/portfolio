import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HeaderService } from '../header/header.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit, OnDestroy {
  imagePath = 'assets/profile.png';
  lightMode: boolean;
  lightModeSub: Subscription;
  constructor(private headerService: HeaderService) {}

  ngOnInit(): void {
    this.lightMode = true;
    this.lightModeSub = this.headerService.lightModeEmitter.subscribe(
      (lightMode) => {
        this.lightMode = lightMode;
      }
    );
  }

  ngOnDestroy(): void {
    this.lightModeSub.unsubscribe();
  }
}
