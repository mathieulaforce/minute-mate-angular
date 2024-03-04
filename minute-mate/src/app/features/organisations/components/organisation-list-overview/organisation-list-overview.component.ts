import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Organisation } from '../../types/organisation';
import { OrganisationFilter } from '../organisation-list-filter/organisation-list-filter.component';
 

@Component({
  selector: 'app-organisation-list-overview',
  templateUrl: './organisation-list-overview.component.html',
  styleUrl: './organisation-list-overview.component.css'
})
export class OrganisationListOverviewComponent {
  @Input() organisations: Organisation[] = [];
  @Output() reloadOrganisations = new EventEmitter<string>();

  filter: OrganisationFilter | null = null;
  filteredOrganisations: Organisation[] = this.organisations;
  selectedOrganisation: Organisation | null = null;

  ngOnInit() {
    this.filteredOrganisations = this.organisations;
  }

  ngOnChanges() {
    this.onFilterOrganisations(this.filter ?? { searchText: "" });
  }

  onFilterOrganisations = (filter: OrganisationFilter) => {
    this.filter = filter;
    const searchText = filter.searchText.toLowerCase().trim();
    this.filteredOrganisations = this.organisations.filter((organisation) => {
      return organisation.name.toLowerCase().trim().includes(searchText) || (organisation.description?? "").toLowerCase().trim().includes(searchText);
    });
  }

  onOrganisationClicked = (organisationId: string) => { 
    this.selectedOrganisation = this.organisations.find((organisation) => organisation.id === organisationId) ?? null;
  }
 
}
