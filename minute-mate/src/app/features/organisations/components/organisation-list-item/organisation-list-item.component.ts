import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Organisation } from '../../types/organisation';

@Component({
  selector: 'app-organisation-list-item',
  templateUrl: './organisation-list-item.component.html',
  styleUrl: './organisation-list-item.component.css'
})
export class OrganisationListItemComponent {
  @Input() organisation!: Organisation;
  @Input() isActive: boolean = false;
  @Output() onOrganisationClicked = new EventEmitter<string>();

  onClick = () =>{
    this.onOrganisationClicked.emit(this.organisation.id)
  }
}
