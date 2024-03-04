import { Component } from '@angular/core';
import { OrganisationService } from '../../services/organisation.service';
import { Organisation } from '../../types/organisation';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-organisations-detail-page',
  template: `
    <h1>Organisation</h1>
    <ui-loading-spinner *ngIf="isFetching" class="flex w-10" />
    <app-organisation-details
      *ngIf="!isFetching && organisation"
      [organisation]="organisation"
    />
    <div *ngIf="!isFetching && !organisation">Organisation does not exist</div>
  `,
})
export class OrganisationDetailPageComponent {
  organisation: Organisation | null = null;
  isFetching: boolean = false;

  constructor(
    private organisationService: OrganisationService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.isFetching = true;
    this.organisationService
      .getOrganisationById(this.route.snapshot.params['id'])
      .subscribe((organisations) => {
        this.organisation = organisations;
        this.isFetching = false;
      });
  }
}
