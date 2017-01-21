import { Component, OnInit, trigger, style, transition, animate } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TdLoadingService } from '@covalent/core';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'tq-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger('flyInFromTopAndScale', [
      transition('void => *', [
        style({transform: 'translateX(+50%) scale(1)'}),
        animate('500ms linear')
      ])
    ])
  ]
})
export class LoginComponent implements OnInit {

  userName: string;
  password: string;
  rememberMe: boolean;
  notificationMsg: any[] = [];

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute, private loadingService: TdLoadingService) { 
    this.resetNotification();
  }

  ngOnInit() { 
    let isLoginRequired = this.route.snapshot.params['loginRequired'];
    if(isLoginRequired) {
      this.notificationMsg.push(
        {severity:'warn', message:'No session found! Please Login'}
      );
    }
    let isAccountCreated = this.route.snapshot.params['isAccountCreated'];
    if(isAccountCreated) {
      this.notificationMsg.push(
        {severity:'success', message:'Account created! Please check mail to activate'}
      );
    } 
    let isAccountActivated = this.route.snapshot.params['isAccountActivated'];
    if(isAccountActivated) {
      this.activateUser(this.route.snapshot.params['key']); 
    }
  }

  doLogin(userParams){
    this.loadingService.register('login');
    this.authService.authenticate(userParams).subscribe(res => {
      if(res && res.auth_token) {
        // Login succeded, navigating to dashboard
        sessionStorage.setItem('auth_token', res.auth_token);
        this.authService.isLoggedIn = true;
        this.router.navigate(['/home']);
      }else{
        this.notificationMsg.push(
          {severity:'error', message:'Oops! Login Request Failed'}
        );
      }
      this.loadingService.resolve('login');
    }, err => {
      if(err.status === 401) {
        this.notificationMsg.push(
          {severity:'error', message:'Invalid Credentials!'}
        );
      } else {
        this.notificationMsg.push(
          {severity:'error', message:'Oops! Something went wrong'}
        );
      }
      this.loadingService.resolve('login');
    });
  }

  activateUser(key) {
    this.loadingService.register('login');
    this.authService.activateUser(key).subscribe(res => {
      let statusCode = res.statusCode;
      if(statusCode && statusCode == 0) {
        this.notificationMsg.push(
          {severity:'success', message:'Account activated successfully! Please Login'}
        );
      } else {
        this.notificationMsg.push(
          {severity:'error', message:'Oops! Your account activation failed'}
        );
      }
      this.loadingService.resolve('login');
    }, err => {
      this.notificationMsg.push(
        {severity:'error', message:'Oops! Your account activation failed'}
      );
      this.loadingService.resolve('login');
    });      
  }

  resetNotification() {
    this.notificationMsg.push(
      {severity:'info', message:'Sign In via your username and password!'}
    );
  }

}
