import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate } from '@angular/animations';
import { Router, ActivatedRoute } from '@angular/router';
import { TdLoadingService } from '@covalent/core';
import { AuthService } from '../../shared/services/auth.service';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material';
import { TncComponent } from '../../static/tnc/tnc.component';

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
  notificationMsg: any[] = [];

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute, private loadingService: TdLoadingService, public dialog: MatDialog) { 
    this.resetNotification();
  }

  ngOnInit() {
  }

  doRegistration(registrationForm){
    let userParams = registrationForm.value;
    this.loadingService.register('register');
    this.authService.register(userParams).subscribe(res => {
      let statusCode = res.statusCode;
      if(statusCode && statusCode === '0') {
        // Registration succeded, navigating to Login screen
        this.router.navigate(['/login', {isAccountCreated: true}]);
      }else{
        this.notificationMsg.push(
            {severity:'error', summary:'Oops! Registration Request Failed'}
        );
      }
      this.loadingService.resolve('register');
    }, err => {
      this.notificationMsg.push(
        {severity:'error', message:'Oops! Something went wrong'}
      );
      this.loadingService.resolve('register');
    });
  }

  showTnc(event) {
    event.preventDefault();
    this.dialog.open(TncComponent, {"width":"500px", "height":"600px"});
  }

  resetNotification() {
    this.notificationMsg.push(
      {severity:'info', message:'Create a new account to unleash the tQuesto!'}
    );
  }

}
