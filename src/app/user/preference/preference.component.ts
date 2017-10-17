import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/services/user.service';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'tq-preference',
  templateUrl: './preference.component.html',
  styleUrls: ['./preference.component.scss']
})
export class PreferenceComponent implements OnInit {

  enableDarkTheme: boolean = false;
  prefLang: string = 'en';
  languages = [
    {value: 'en', viewValue: 'English'},
    {value: 'hi', viewValue: 'Hindi'},
    {value: 'fr', viewValue: 'French'}
  ];
  constructor(public dialog: MatDialog, private userService: UserService) {
  
  }

  ngOnInit() {
  }

  savePreferences(group) {
    let selTheme = (group)?group.value:this.userService.getTheme();
    if(this.enableDarkTheme) {
      selTheme = 'dark-'+selTheme;
    }
    this.userService.setTheme(selTheme);
    this.dialog.closeAll();
  }

  close() {
    this.dialog.closeAll();
  }

}
