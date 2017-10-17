import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToolboxService } from '../../shared/services/toolbox.service';
import { MatSnackBar } from '@angular/material';
import { TdLoadingService, TdDialogService } from '@covalent/core';
import { UserService, IUser } from '../../shared/services/user.service';

@Component({
  selector: 'tq-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements AfterViewInit {

  users: IUser[];
  filteredUsers: IUser[];

  constructor(private toolbox: ToolboxService,
              private router: Router,
              private loadingService: TdLoadingService,
              private dialogService: TdDialogService,
              private snackBarService: MatSnackBar,
              private userService: UserService) {
    toolbox.setToolBox({
        title: "User Management", 
        actions: [
          {icon: 'add', tooltip: 'Add', callback: this.addUser.bind(this)},
          {icon: 'refresh', tooltip: 'Refresh', callback: this.loadUsers.bind(this)}
        ],
        more: [
          {text: 'View All', tooltip: 'View All', callback: this.callBack},
          {text: 'Edit', tooltip: 'Edit', callback: this.callBack},
          {text: 'Delete', tooltip: 'Delete', callback: this.callBack}
        ]
    });
  }

  callBack() {

  }

  goBack(route: string): void {
    this.router.navigate(['/home/users']);
  }

  ngAfterViewInit(): void {
    this.loadUsers();
  }

  addUser() {
    this.router.navigate(['/home/users/add']);
  }

  filterUsers(displayName: string = ''): void {
    this.filteredUsers = this.users.filter((user: IUser) => {
      return user.userName.toLowerCase().indexOf(displayName.toLowerCase()) > -1;
    });
  }

  loadUsers(): void {
    this.loadingService.register('users.list');
    this.userService.query().subscribe((users: IUser[]) => {
      this.users = users;
      this.filteredUsers = users;
      this.loadingService.resolve('users.list');
    }, (error: Error) => {
      this.userService.staticQuery().subscribe((users: IUser[]) => {
        this.users = users;
        this.filteredUsers = users;
        this.loadingService.resolve('users.list');
      });
    });
  }

  deleteUser(userName: string): void {
    this.dialogService
      .openConfirm({message: 'Are you sure you want to delete this user?'})
      .afterClosed().subscribe((confirm: boolean) => {
        if (confirm) {
          this.loadingService.register('users.list');
          this.userService.delete(userName).subscribe((res) => {
            this.users = this.users.filter((user: IUser) => {
              return user.userName !== userName;
            });
            this.filteredUsers = this.filteredUsers.filter((user: IUser) => {
              return user.userName !== userName;
            });
            this.loadingService.resolve('users.list');
            this.snackBarService.open('User deleted', 'Ok');
          }, (error: Error) => {
            this.dialogService.openAlert({message: 'There was an error'});
            this.loadingService.resolve('users.list');
          });
        }
      });
  }

}
