import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { HeaderService } from '../header/header.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, OnDestroy{
  @ViewChild("f", {static: false}) slForm: NgForm;
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
  onSubmit(form: NgForm){

  }

}