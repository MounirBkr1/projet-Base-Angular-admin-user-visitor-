import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddStudentRoutingModule } from './add-student-routing.module';
import { AddstudentComponent } from './addstudent/addstudent.component';


@NgModule({
  declarations: [
    AddstudentComponent
  ],
  imports: [
    CommonModule,
    AddStudentRoutingModule
  ]
})
export class AddStudentModule { }
