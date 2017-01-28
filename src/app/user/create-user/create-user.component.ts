import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService, IUser } from '../../shared/services/user.service';

@Component({
  selector: 'tq-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  display_name: string;
  email: string;
  id: string;
  admin: boolean;
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
    this.route.params.subscribe((params: {id: string}) => {
      let userId: string = params.id;
      this.usersService.get(userId).subscribe((user: any) => {
        this.display_name = user.display_name;
        this.email = user.email;
        this.admin = (user.site_admin === 1 ? true : false);
        this.id = user.id;
      });
    });
  }

  save(): void {
    let site_admin: number = (this.admin ? 1 : 0);
    let now: Date = new Date();
    this.user = {
      display_name: this.display_name,
      email: this.email,
      site_admin: site_admin,
      id: this.id || this.display_name.replace(/\s+/g, '.'),
      created: now,
      last_access: now,
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
