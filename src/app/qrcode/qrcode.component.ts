import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.scss']
})
export class QrcodeComponent implements OnInit {

  constructor(public thisDialogRef: MatDialogRef<QrcodeComponent>) { }

  ngOnInit() {
    setTimeout(() => {
      this.oncloseConfirm();
    }, 30000);
  }
  oncloseConfirm() {
    this.thisDialogRef.close();
  }
}
