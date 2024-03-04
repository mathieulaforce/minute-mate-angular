import { NgModule } from '@angular/core';
import { OrganisationPageComponent } from './routes/organisation/organisations-page.component';
import { OrganisationDetailPageComponent } from './routes/organisation/organisations-detail-page.component';
import { RouterModule, Routes } from '@angular/router';
import { OrganisationNewPageComponent } from './routes/organisation/organisations-new-page.component';

const routes: Routes = [
  { path: '', component: OrganisationPageComponent },
  { path: 'new', component: OrganisationNewPageComponent }, 
  { path: ':id', component: OrganisationDetailPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrganisationsRoutingModule {
  static pageComponents = [
    OrganisationPageComponent,
    OrganisationDetailPageComponent,
    OrganisationNewPageComponent,
  ];
}
