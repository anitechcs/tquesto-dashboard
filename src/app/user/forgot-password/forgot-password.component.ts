import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate } from '@angular/animations';
import { TdLoadingService } from '@covalent/core';
import { AuthService } from '../../shared/services/auth.service';

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
  notificationMsg: any[] = [];

  constructor(private authService: AuthService, private loadingService: TdLoadingService) { 
    this.resetNotification();
  }

  ngOnInit() {
  }

  sendPasswordResetMail() {
    this.loadingService.register('forgotpass');
    this.authService.sendPasswordResetMail(this.email).subscribe(res => {
      let statusCode = res.statusCode;
      if(statusCode && statusCode == 0) {
        this.notificationMsg.push(
          {severity:'success', message:'Password reset email send successfully!'}
        );
      } else {
        this.notificationMsg.push(
          {severity:'error', message:'Oops! No matching user found for provided email'}
        );
      }
      this.loadingService.resolve('forgotpass');
    }, err => {
      this.notificationMsg.push(
        {severity:'error', message:'Oops! No matching user found for provided email'}
      );
      this.loadingService.resolve('forgotpass');
    });  
  }

  resetNotification() {
    this.notificationMsg.push(
      {severity:'info', message:'Provide registered email to reset your password!'}
    );
  }

}
