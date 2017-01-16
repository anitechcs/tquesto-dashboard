import { Component, OnInit, trigger, style, transition, animate } from '@angular/core';

@Component({
  selector: 'tq-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  animations: [
    trigger('flyInFromTopAndScale', [
      transition('void => *', [
        style({transform: 'translateX(-50%) scale(1)'}),
        animate('500ms linear')
      ])
    ])
  ]
})
export class ForgotPasswordComponent implements OnInit {

  email: string;

  constructor() { }

  ngOnInit() {
  }

  sendPasswordResetMail(formval) {

  }

}
