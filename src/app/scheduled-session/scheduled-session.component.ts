import { Component, OnInit, EventEmitter, Input,HostBinding, Output, Inject } from '@angular/core';
import {MatDialog,} from '@angular/material/dialog';
import { QrcodeComponent} from "../qrcode/qrcode.component";
import {SessionCancelComponent} from "../pop-ups/session-cancel/session-cancel.component";
import {AttendanceEditComponent} from "../pop-ups/attendance-edit/attendance-edit.component";
import {ActivatedRoute, Router} from '@angular/router';
import { SlideMenuService } from '../slide-menu.service';
import { SessionService } from '../services/session.service';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-scheduled-session',
  templateUrl: './scheduled-session.component.html',
  styleUrls: ['./scheduled-session.component.scss']
})
export class ScheduledSessionComponent implements OnInit {
  isTrue:boolean;
  user: string;
  isVissible: boolean = false;
  showMore: boolean;
  p: number = 1;
  todayData = [];
  upcommingData: [];
  historyData: [];
  cancelData: [];
  collection: any[] = [0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9];

  constructor(private sessionService: SessionService,
              public dialog: MatDialog,
              private router: Router,
              private userService: SlideMenuService,
              @Inject(DOCUMENT) private document: Document ) { }

  ngOnInit() {
  
    this.userService.cast.subscribe(user => this.user = user);

    this.sessionService.todayData().subscribe(data =>{
           this.todayData = data;
    })
    this.sessionService.upcommingData().subscribe(data =>{
      this.upcommingData = data;
    })
    this.sessionService.historyData().subscribe(data =>{
      this.historyData = data;
    })
    this.sessionService.cancelData().subscribe(data =>{
      this.cancelData = data;
    })
    
  }
  sessionCancel(){
    let dialogRef = this.dialog.open(SessionCancelComponent, {
      width: '500px',
    });
  }
  qrcode(){
    let dialogRef = this.dialog.open(QrcodeComponent, {
      width: '100%',
    });
  }

  attendance() {
    let dialogRef = this.dialog.open(AttendanceEditComponent, {
      width: '500px',
    });
    this.router.navigate(['./attendance']);
  }
  filter() {
    this.document.body.classList.add('fiter-scroll');
    this.isVissible = !this.isVissible;
  }
  overlayHide() {
    this.isVissible = false;
    this.document.body.classList.remove('fiter-scroll');
  }
  more() {
    this.showMore = true;
  }
}
