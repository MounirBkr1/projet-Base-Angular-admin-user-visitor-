import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewStudentRoutingModule } from './view-student-routing.module';
import { ViewStudentComponent } from './view-student/view-student.component';


@NgModule({
  declarations: [
    ViewStudentComponent
  ],
  imports: [
    CommonModule,
    ViewStudentRoutingModule
  ]
})
export class ViewStudentModule { }
