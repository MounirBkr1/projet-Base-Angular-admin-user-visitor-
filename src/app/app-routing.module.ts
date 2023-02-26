import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FrontLayoutComponent} from "./layouts/front-layout/front-layout.component";
import {AdminLayoutComponent} from "./layouts/admin-layout/admin-layout.component";
import {UserLayoutComponent} from "./layouts/user-layout/user-layout.component";


const routes: Routes = [
  // {path:'', redirectTo: '',pathMatch:"full"},
  {
    path:'admin', component:AdminLayoutComponent,
      children:[
        {path:'',redirectTo:'dashboard',pathMatch:'full'},
        {path:'dashboard',loadChildren:()=> import('./views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
        {path:'addstudent',loadChildren:()=> import('./views/admin/add-student/add-student.module').then(m=>m.AddStudentModule)},
        {path:'addproduct',loadChildren:()=> import('./views/admin/addproduct/addproduct.module').then(m=>m.AddproductModule)}
      ]
    },
  {path:'user', component:UserLayoutComponent,
    children:[
      {path:'',redirectTo:'dashboard',pathMatch:'full'},
      {path:'dashboard',loadChildren:()=> import('./views/user/dashboard/dashboard.module').then(m=>m.DashboardModule)},
      {path:'viewProduct',loadChildren:()=> import('./views/user/view-product/view-product.module').then(m=>m.ViewProductModule)},
      {path:'viewStudent',loadChildren:()=> import('./views/user/view-student/view-student.module').then(m=>m.ViewStudentModule)},
      {path:'viewCards',loadChildren:()=> import('./views/user/view-cards/view-cards.module').then(m=>m.ViewCardsModule)}
    ]
  },


  {path:'', component:FrontLayoutComponent,
    children:[
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'home',loadChildren:()=> import('./views/front/home/home.module').then(m=>m.HomeModule)},
      {path:'contact',loadChildren:()=> import('./views/front/contact/contact.module').then(m=>m.ContactModule)},
      {path:'about',loadChildren:()=> import('./views/front/about/about.module').then(m=>m.AboutModule)}
    ]},




  // {path:'**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
