import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UiModule } from '../ui/ui.module';
import { SharedModule } from '../../common/shared/shared.module';
import { OrganisationListComponent } from './components/organisation-list/organisation-list.component';
import { OrganisationListItemComponent } from './components/organisation-list-item/organisation-list-item.component'; 
import { OrganisationListFilterComponent } from './components/organisation-list-filter/organisation-list-filter.component';
import { OrganisationListOverviewComponent } from './components/organisation-list-overview/organisation-list-overview.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { OrganisationDetailsComponent } from './components/organisation-details/organisation-details.component'; 
import { OrganisationsRoutingModule } from './organisations-routing.module';
@NgModule({
  providers: [provideHttpClient()],
  declarations: [
    OrganisationsRoutingModule.pageComponents,
    OrganisationListComponent,
    OrganisationListItemComponent,
    OrganisationListFilterComponent,
    OrganisationListOverviewComponent,
    OrganisationDetailsComponent,
  ],
  imports: [
    OrganisationsRoutingModule,
    CommonModule,
    SharedModule,
    UiModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class OrganisationsModule {}
