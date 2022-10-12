import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
            MatButtonModule, MatCheckboxModule,
            MatInputModule,MatDialogModule
           ],
  exports: [
            MatButtonModule, MatCheckboxModule,
            MatInputModule,MatDialogModule
           ],
})
export class MaterialModule { }