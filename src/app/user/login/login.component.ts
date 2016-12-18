import { Component, OnInit, trigger, style, transition, animate } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'tq-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger('flyInFromTopAndScale', [
      transition('void => *', [
        style({transform: 'translateX(+50%) scale(1)'}),
        animate('700ms linear')
      ])
    ])
  ]
})
export class LoginComponent implements OnInit {

  userName: string;
  password: string;
  notificationMsg: any[];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  doLogin(formValue){
    this.router.navigate(['/home']);
  }

  hideNotification() {

  }

}
