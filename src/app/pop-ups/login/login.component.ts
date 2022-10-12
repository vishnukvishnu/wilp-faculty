import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class ModalLoginComponent implements OnInit {

  constructor(public thisDialogRef: MatDialogRef<ModalLoginComponent>,
              private router: Router, 
              ) { }

  ngOnInit() {
    
  }
  oncloseConfirm() {
    this.thisDialogRef.close();
  }
  redirect() {
    this.thisDialogRef.close();
    this.router.navigate(['./scheduledsession']);
  }
}
