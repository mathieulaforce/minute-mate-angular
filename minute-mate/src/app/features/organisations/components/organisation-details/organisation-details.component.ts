import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Organisation } from '../../types/organisation';
import { OrganisationService } from '../../services/organisation.service';

@Component({
  selector: 'app-organisation-details',
  templateUrl: './organisation-details.component.html',
  styleUrl: './organisation-details.component.css',
})
export class OrganisationDetailsComponent {
  @Input() organisation: Organisation | null = null;
  @Output() onSavedSuccess = new EventEmitter<string>();

  constructor(private organisationService: OrganisationService) {}

  onSave = () => {
    if (this.organisation === null) {
      return;
    }

    if (this.organisation.id) {
      this.organisationService
        .updateOrganisation(this.organisation)
        .subscribe(() => {
          this.onSavedSuccess.emit(this.organisation?.id);
        });
    } else {
      this.organisationService
        .insertOrganisation(this.organisation)
        .subscribe(() => {
          this.onSavedSuccess.emit(this.organisation?.id);
        });
    }
  };
}
