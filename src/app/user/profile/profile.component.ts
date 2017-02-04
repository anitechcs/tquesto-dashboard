import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService, IUser } from '../../shared/services/user.service';

@Component({
  selector: 'tq-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  id: string;
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  activated: boolean;
  user: IUser;
  action: string;

  constructor(private usersService: UserService, private route: ActivatedRoute) {}

  goBack(): void {
    window.history.back();
  }

  ngOnInit(): void {
    this.route.url.subscribe(url => {
      this.action = (url.length > 1 ? url[1].path : 'add');
    });
    this.route.params.subscribe((params: {userName: string}) => {
      let userName: string = params.userName;
      this.usersService.get(userName).subscribe((user: any) => {
        this.userName = user.userName;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.email = user.email;
        this.phone = user.phone;
        this.activated = user.activated;
        this.id = user.id;
      });
    });
  }

  save(): void {
    this.user = {
      userName: this.userName,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      phone: this.phone,
      activated: this.activated,
      id: this.id
    };
    if (this.action === 'add') {
      this.usersService.create(this.user).subscribe(() => {
        this.goBack();
      });
    } else {
      this.usersService.update(this.id, this.user).subscribe(() => {
        this.goBack();
      });
    }
  }

}
