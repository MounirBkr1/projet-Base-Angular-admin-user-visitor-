import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "../dashboard/dashboard/dashboard.component";
import {AddProductComponent} from "./add-product/add-product.component";

const routes: Routes = [
  {path:'',component:AddProductComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddproductRoutingModule { }
