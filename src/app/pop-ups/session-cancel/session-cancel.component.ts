import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-session-cancel',
  templateUrl: './session-cancel.component.html',
  styleUrls: ['./session-cancel.component.scss']
})
export class SessionCancelComponent implements OnInit {

  constructor(public thisDialogRef: MatDialogRef<SessionCancelComponent>) { }


  ngOnInit() {
  }
  oncloseConfirm() {
    this.thisDialogRef.close();
  }
}
