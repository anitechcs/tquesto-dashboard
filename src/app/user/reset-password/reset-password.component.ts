import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate } from '@angular/animations';
import { Router, ActivatedRoute } from '@angular/router';
import { TdLoadingService } from '@covalent/core';
import { AuthService } from '../../shared/services/auth.service';

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

  newPassword: string;
  repeatpassword: string;
  notificationMsg: any[] = [];
  resetKey: string;

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute, private loadingService: TdLoadingService) {
    this.resetNotification();
  }

  ngOnInit() {
    this.resetKey = this.route.snapshot.params['key'];
  }

  doPasswordReset() {
    this.loadingService.register('resetpass');
    this.authService.resetPassword({"newPassword": this.newPassword, "key": this.resetKey}).subscribe(res => {
      let statusCode = res.statusCode;
      if(statusCode && statusCode == 0) {
        this.notificationMsg.push(
          {severity:'success', message:'Password reset completed successfully!'}
        );
      } else {
        this.notificationMsg.push(
          {severity:'error', message:'Oops! Your password reset request failed'}
        );
      }
      this.loadingService.resolve('resetpass');
    }, err => {
      this.notificationMsg.push(
        {severity:'error', message:'Oops! Your password reset request failed'}
      );
      this.loadingService.resolve('resetpass');
    });     
  }

  resetNotification() {
    this.notificationMsg.push(
      {severity:'info', message:'Set a rememberable password for your account!'}
    );
  }

}
