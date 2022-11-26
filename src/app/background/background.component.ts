import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { HeaderService } from '../header/header.service';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent implements OnInit, OnDestroy, OnChanges{
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

  ngOnChanges(changes: SimpleChanges): void {
    console.log("onCHanges");
    console.log(changes);
  }



  ngOnDestroy(): void {
    this.lightModeSub.unsubscribe();
  }
}
