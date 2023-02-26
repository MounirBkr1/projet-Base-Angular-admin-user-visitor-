import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "../dashboard/dashboard/dashboard.component";
import {AddstudentComponent} from "./addstudent/addstudent.component";

const routes: Routes = [
  {path:'',component:AddstudentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddStudentRoutingModule { }
