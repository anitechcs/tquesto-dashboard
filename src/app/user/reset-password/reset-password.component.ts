import { Component, OnInit, trigger, style, transition, animate } from '@angular/core';

@Component({
  selector: 'tq-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
  animations: [
    trigger('flyInFromTopAndScale', [
      transition('void => *', [
        style({transform: 'translateY(+50%) scale(1)'}),
        animate('500ms linear')
      ])
    ])
  ]
})
export class ResetPasswordComponent implements OnInit {

  password: string;
  rpassword: string;
  notificationMsg: any[] = [];

  constructor() {
    this.resetNotification();
  }

  ngOnInit() {
  }

  doPasswordReset(formval) {
    this.notificationMsg.push(
      {severity:'error', message:'Oops! Something went wrong'}
    );
  }

  resetNotification() {
    this.notificationMsg.push(
      {severity:'info', message:'Set a rememberable password for your account!'}
    );
  }

}
