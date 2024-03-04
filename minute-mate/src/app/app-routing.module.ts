import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; 

const routes: Routes = [
  {
    path: '',  
    title: 'minute mate',
    pathMatch: 'full',
    component: HomeComponent 
  },
  {
  path: 'organisations', loadChildren: () => import('./features/organisations/organisations.module').then(m => m.OrganisationsModule)  
} ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
