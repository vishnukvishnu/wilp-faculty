import {NgModule} from '@angular/core';
import {Routes , RouterModule} from '@angular/router';
import { ScheduledSessionComponent } from './scheduled-session/scheduled-session.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { LoginComponent } from './login/login.component';
import { SessionNewComponent } from './pop-ups/session-new/session-new.component';

  

const routes: Routes = [
   {path: '', redirectTo: '/login', pathMatch: 'full' },
   {path: 'scheduledsession', component: ScheduledSessionComponent},  
   {path: 'attendance', component: AttendanceComponent},
   {path: 'aboutme', component: AboutmeComponent},
   {path: 'login', component: LoginComponent},
   {path: 'newSession', component: SessionNewComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [ScheduledSessionComponent,
                                  AttendanceComponent,
                                  AboutmeComponent,
                                  LoginComponent,
                                  SessionNewComponent
]                                    

