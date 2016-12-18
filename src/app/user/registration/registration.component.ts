import { Component, OnInit, trigger, style, transition, animate } from '@angular/core';

@Component({
  selector: 'tq-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  animations: [
    trigger('flyInFromTopAndScale', [
      transition('void => *', [
        style({transform: 'translateX(-50%) scale(1)'}),
        animate('700ms linear')
      ])
    ])
  ]
})
export class RegistrationComponent implements OnInit {

  userEmail: string;
  password: string;
  rpassword: string;
  notificationMsg: any[];
  isMale: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  doRegistration(formValue){

  }

  hideNotification() {

  }

}
