import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
@Component({
  selector: 'app-session-new',
  templateUrl: './session-new.component.html',
  styleUrls: ['./session-new.component.scss']
})
export class SessionNewComponent implements OnInit {

  constructor(public thisDialogRef: MatDialogRef<SessionNewComponent>) { }

  ngOnInit() {
  }
  oncloseConfirm() {
    this.thisDialogRef.close();
  }
}
