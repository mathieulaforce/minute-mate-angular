import { Component, EventEmitter, Output } from '@angular/core';

export interface OrganisationFilter{
  searchText: string;
}

@Component({
  selector: 'app-organisation-list-filter',
  templateUrl: './organisation-list-filter.component.html',
  styleUrl: './organisation-list-filter.component.css'
})
export class OrganisationListFilterComponent {
  search: string = "";
  @Output() applyFilter = new EventEmitter<OrganisationFilter>();

  onFilter = () => {
    this.applyFilter.emit({searchText: this.search ?? ""});
  }

  clearSearch = () => {
    this.search = "";
    this.onFilter();
  }
}
