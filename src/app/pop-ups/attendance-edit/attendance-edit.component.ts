import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-attendance-edit',
  templateUrl: './attendance-edit.component.html',
  styleUrls: ['./attendance-edit.component.scss']
})
export class AttendanceEditComponent implements OnInit {

  constructor(public thisDialogRef: MatDialogRef<AttendanceEditComponent>) { }

  ngOnInit() {
    
  }
  oncloseConfirm() {
    this.thisDialogRef.close();
  }
}
