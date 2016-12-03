import { Component, OnInit, trigger, style, transition, animate } from '@angular/core';

@Component({
  selector: 'tq-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  animations: [
    trigger('flyInFromTopAndScale', [
      transition('void => *', [
        style({transform: 'translateY(-100%) scale(0)'}),
        animate('300ms linear')
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
