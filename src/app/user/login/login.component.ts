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
  notificationMsg: any[];

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute, private loadingService: TdLoadingService) { 
    this.notificationMsg = [];
  }

  ngOnInit() { 
    let isLoginRequired = this.route.snapshot.params['loginRequired'];
    if(isLoginRequired) {
      this.notificationMsg.push(
        {severity:'info', summary:'No Session!', detail:'Please Login', sticky:'false'}
      );
    }
    let isAccountCreated = this.route.snapshot.params['isAccountCreated'];
    if(isAccountCreated) {
      this.notificationMsg.push(
        {severity:'info', summary:'Account created! Please check mail to activate', detail:'Please Login', sticky:'false'}
      );
    } 
    let isAccountActivated = this.route.snapshot.params['isAccountActivated'];
    if(isAccountActivated) {
      this.notificationMsg.push(
        {severity:'info', summary:'Account activated successfully! Please Login', detail:'Please Login', sticky:'false'}
      );
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
        if(this.notificationMsg.length == 0){
          this.notificationMsg.push(
              {severity:'error', summary:'Oops! Login Request Failed', detail:'', sticky:'true'}
          );
        }
      }
      this.loadingService.resolve('login');
    }, err => {
      if(err.status === 401) {
        if(this.notificationMsg.length == 0){
            this.notificationMsg.push(
              {severity:'error', summary:'Invalid Credentials!', detail:'', sticky:'true'}
            );
          }
      } else {
        if(this.notificationMsg.length == 0){
          this.notificationMsg.push(
            {severity:'error', summary:'Oops! Something went wrong', detail:'', sticky:'true'}
          );
        }
      }
      this.loadingService.resolve('login');
    });
  }

  hideNotification() {
    this.notificationMsg = [];
  }

}
