import { Component, OnInit, trigger, style, transition, animate } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TdLoadingService } from '@covalent/core';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'tq-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  animations: [
    trigger('flyInFromTopAndScale', [
      transition('void => *', [
        style({transform: 'translateX(-50%) scale(1)'}),
        animate('500ms linear')
      ])
    ])
  ]
})
export class RegistrationComponent implements OnInit {

  email: string;
  userName: string;
  password: string;
  tnc: boolean = true;
  notificationMsg: any[];

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute, private loadingService: TdLoadingService) { 
    this.notificationMsg = [];
  }

  ngOnInit() {
  }

  doRegistration(userParams){
    this.loadingService.register('register');
    this.authService.register(userParams).subscribe(res => {
      let statusCode = res.statusCode;
      if(statusCode && statusCode === '0') {
        // Registration succeded, navigating to Login screen
        this.router.navigate(['/login', {isAccountCreated: true}]);
      }else{
        if(this.notificationMsg.length == 0){
          this.notificationMsg.push(
              {severity:'error', summary:'Oops! Registration Request Failed', detail:'', sticky:'true'}
          );
        }
      }
      this.loadingService.resolve('register');
    }, err => {
      if(this.notificationMsg.length == 0){
        this.notificationMsg.push(
          {severity:'error', summary:'Oops! Something went wrong', detail:'', sticky:'true'}
        );
      }
      this.loadingService.resolve('register');
    });
  }

  hideNotification() {
    this.notificationMsg = [];
  }

}
