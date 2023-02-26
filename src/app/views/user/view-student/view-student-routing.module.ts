import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ViewStudentComponent} from "./view-student/view-student.component";

const routes: Routes = [
  {path:'',component:ViewStudentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewStudentRoutingModule { }
