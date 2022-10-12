import { Component, OnInit } from '@angular/core';
import { SlideMenuService } from '../slide-menu.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss']
})
export class AboutmeComponent implements OnInit {
  isHide:boolean = false;
  user: string;
  constructor(private userService: SlideMenuService) { }

  ngOnInit() {
    this.userService.cast.subscribe(user => this.user = user);
  }
  editprofile() {
    this.isHide = true;
  }
}
