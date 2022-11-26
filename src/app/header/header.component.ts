import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  collapsed = true;
  light: boolean = true;
  // @Output() lightMode: EventEmitter<boolean> = new EventEmitter();

  constructor(private headerService: HeaderService){}

  ngOnInit() {
    this.light = true;
  }
  onClick(){
    this.light = !this.light;
    console.log(this.light);
    // this.lightMode.emit(this.light);
    this.headerService.lightModeEmitter.next(this.light);
  }
}
