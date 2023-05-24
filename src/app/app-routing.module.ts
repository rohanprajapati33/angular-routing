import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { CategoriesComponent } from './categories/categories.component';
import { NoPageComponent } from './no-page/no-page.component';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { AboutComponent } from './about/about.component';
import { AboutMeComponent } from './about-me/about-me.component';

const routes: Routes = [
  { path : '', component : HomeComponent},
  { path : 'users', component : UsersComponent},
  { path : 'users/:id/:name', component : UsersComponent},
  { path : 'categories', component : CategoriesComponent},
  // { path : '**', component : NoPageComponent},
  { path : 'about', component : AboutComponent},

  {
    component:  AboutComponent, 
    path:'about',
  children : [
    {path:'company' , component :AboutCompanyComponent},
    {path:'me' , component :AboutMeComponent}
  ]},
  {path: 'admin' , loadChildren:()=>import('./admin/admin.module').then(mod=>mod.AdminModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
