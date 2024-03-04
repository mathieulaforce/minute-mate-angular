import { Component } from '@angular/core';
import { OrganisationService } from '../../services/organisation.service';
import { Organisation } from '../../types/organisation';

@Component({
  selector: 'app-organisations-page',
  template: `
    <div>Organisations</div>
    <ui-loading-spinner   *ngIf="isFetching" class="flex w-10"/>
    <app-organisation-list-overview *ngIf="!isFetching" [organisations]="organisations" (reloadOrganisations)="fetchOrganisations()" />
  `,
})
export class OrganisationPageComponent {
  organisations: Organisation[] = [];
  isFetching: boolean = false;

  constructor(private organisationService: OrganisationService) {}

  ngOnInit() {
   this.fetchOrganisations();
  }

  fetchOrganisations = () => {
    this.isFetching = true;
    this.organisationService.getOrganisations().subscribe((organisations) => {
      this.organisations = organisations;
      this.isFetching = false;
    });
  }
}
