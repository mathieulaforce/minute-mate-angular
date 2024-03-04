import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Organisation } from '../../types/organisation';

@Component({
  selector: 'app-organisation-list',
  templateUrl: './organisation-list.component.html',
  styleUrl: './organisation-list.component.css'
})
export class OrganisationListComponent {
    @Input() organisations: Organisation[] = [];
    @Input() selectedOrganisationId: string | null = null;
    @Output() onOrganisationClicked = new EventEmitter<string>();

   
}
