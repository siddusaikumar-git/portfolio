import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HeaderService } from './header/header.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'portfolio';
  lightMode: boolean;
  lightModeSub: Subscription;

  constructor(private headerService: HeaderService) {}

  ngOnInit(){
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

  

  // onClick(lightMode: boolean){
  //   this.lightMode = lightMode;
  // }

}
