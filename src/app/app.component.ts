import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { SessionNewComponent } from './pop-ups/session-new/session-new.component';
import {Router} from '@angular/router';
import {SlideMenuService} from './slide-menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @Output() change = new EventEmitter();
  isTrue: boolean = false;
  isHide: boolean = false;
  user: string;

  contentMargin = 240;
  constructor(public dialog: MatDialog,
              private userService: SlideMenuService,
              public router: Router) {

              }
  ngOnInit() {
    this.userService.cast.subscribe(user => this.user = user);
  }
  openNav() {
    this.isTrue = !this.isTrue;
    this.userService.editUser(this.isTrue);
  }

  editprofile() {
    this.isHide = true;
  }

  sessionNew() {
    let dialogRef = this.dialog.open(SessionNewComponent, {
      width: '500px',
    });
  }

}

