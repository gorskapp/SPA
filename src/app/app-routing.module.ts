import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from "./home-page/home-page.component";
import { UserFormComponent } from "./user-form/user-form.component";
import { AccessComponent } from "./access/access.component";


const routes: Routes = [
  { path: '', redirectTo: '/home-page', pathMatch: 'full' },
  { path: 'home-page', component: HomePageComponent },
  { path: 'form', component: UserFormComponent },
  { path: 'access', component: AccessComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
