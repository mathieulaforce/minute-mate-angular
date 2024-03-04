import { Component } from '@angular/core';
import { Organisation } from '../../types/organisation';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-organisations-new-page',
  template: `
    <h1>New Organisation</h1> 
    <app-organisation-details  [organisation]="organisation" (onSavedSuccess)="onOrganisationSaved()"/>    
  `,
})
export class OrganisationNewPageComponent {

  constructor(
    private router: Router
  ) {}

  organisation: Organisation = {
    id: '',
    name: '',
    description: '',
    logoUrl: '',
  };
 
  onOrganisationSaved = () => {
    this.router.navigate(['/organisations']);
  }
}
