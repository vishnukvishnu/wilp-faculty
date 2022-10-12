import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isHide: boolean;
  forgot: boolean;
  constructor(private router: Router,
              public dialog: MatDialog) { }

  ngOnInit() {}

  forgotPassword() {
   this.isHide = true;
  }
  send() {
    this.forgot = true;
  }
  dashboard() {
    this.router.navigate(['./scheduledsession']);
  }
  }
