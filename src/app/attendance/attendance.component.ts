import { Component, OnInit } from '@angular/core';
import { SlideMenuService } from '../slide-menu.service';
import { AttandanceService } from '../services/attandance.service';


@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent implements OnInit {
  user: string;
  presentData = [];
  absentData = [];
  constructor(private userService: SlideMenuService,
              private attandanceService: AttandanceService) { }

  ngOnInit() {
    this.userService.cast.subscribe(user => this.user = user);
    
    this.attandanceService.presentData().subscribe(data =>{
      this.presentData = data;
    });

    this.attandanceService.absentData().subscribe(data =>{
      this.absentData = data;
    });

    }
}
