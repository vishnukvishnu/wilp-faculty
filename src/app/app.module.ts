import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SlideMenuService} from './slide-menu.service';
import {NgxPaginationModule} from 'ngx-pagination';
import { SessionService } from './services/session.service';
import { AttandanceService } from './services/attandance.service';
import { AppRoutingModule, routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalLoginComponent } from './pop-ups/login/login.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { HttpClientModule } from '@angular/common/http';

import {MatDialog, MatDialogRef} from '@angular/material/dialog';
// import {MAT_DIALOG_DATA} from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';

import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import { AttendanceComponent } from './attendance/attendance.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { QrcodeComponent } from './qrcode/qrcode.component';
import { SessionCancelComponent } from './pop-ups/session-cancel/session-cancel.component';
import { SessionNewComponent } from './pop-ups/session-new/session-new.component';
import { AttendanceEditComponent } from './pop-ups/attendance-edit/attendance-edit.component';

@NgModule({
  declarations: [
    routingComponents,
    AppComponent,
    HeaderComponent,
    ModalLoginComponent,
    AttendanceComponent,
    AboutmeComponent,
    QrcodeComponent,
    SessionCancelComponent,
    SessionNewComponent,
    AttendanceEditComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatDialogModule,
    MatTabsModule,
    // NgbModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    NgxPaginationModule,
    HttpClientModule
  ],
  entryComponents: [  ModalLoginComponent, 
                      AttendanceEditComponent,
                      SessionNewComponent,
                      SessionCancelComponent,
                      QrcodeComponent
                    ],
  providers: [MatDatepickerModule,
              // { provide: MAT_DIALOG_DATA, useValue: {} },
              { provide: MatDialogRef, useValue: {} },
               SlideMenuService, SessionService, AttandanceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
