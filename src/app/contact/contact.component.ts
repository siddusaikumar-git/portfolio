import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { HeaderService } from '../header/header.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit, OnDestroy {
  @ViewChild('f', { static: false }) slForm: NgForm;
  lightMode: boolean;
  lightModeSub: Subscription;
  sending: boolean = false;
  message: string = '';
  messageColor: string = '';

  constructor(private headerService: HeaderService, private http: HttpClient) {}

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

  async onSubmit(form: NgForm) {
    try {
      const value = form.value;
      const invalid =
        value.email.trim() === '' ||
        value.name.trim() === '' ||
        value.message.trim() === '' ||
        !value.email.includes('@');

      if (invalid) {
        alert('enter not empty valid data');
        return;
      }

      this.sending = true;
      this.messageColor = 'blue';
      this.message = 'Sending ...';

      const templateParams = {
        name: value.name,
        message: value.message,
        reply_to: value.email,
      };

      const publicKey = 'M9Y-DLGyr87j9v3Ut';
      const init = await emailjs.init(publicKey);
      const response = await emailjs.send('gmail', 'portfolio', templateParams);
      form.reset();
      // this.sending = false;
      this.messageColor = 'green';
      this.message = 'Email message sent Successfully...';
    } catch (error) {
      form.reset();
      this.messageColor = 'red';
      this.message = 'Failed to send the Email, Please try again...';
    }
  }
}
