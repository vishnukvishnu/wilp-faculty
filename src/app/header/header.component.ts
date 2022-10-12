import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  istrue: boolean = false;
  isVissible: boolean = false;
  constructor(private router: Router,
              @Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
  }
  aboutme() {
    this.istrue = true;
    // this.isVissible = false;
    // this.document.body.classList.remove('fiter-scroll');
    this.router.navigate(['./aboutme']);
  }
  backHome() {
    this.router.navigate(['./scheduledsession']);
  }
  logout() {
    this.router.navigate(['./login']);
  }
  overlayHide() {
    this.isVissible = !this.isVissible;
    this.document.body.classList.remove('fiter-scroll');
  }
  ovelayopen(){
    this.isVissible = true;
    this.document.body.classList.add('fiter-scroll');
  }
}
