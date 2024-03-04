import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Organisation } from '../types/organisation'; 

@Injectable({
  providedIn: 'root'
})
export class OrganisationService {

  constructor(private httpClient: HttpClient) { }

  getOrganisations() {
    return this.httpClient.get<Organisation[]>('http://localhost:3007/organisations');
  }

  getOrganisationById(id: string) {
    return this.httpClient.get<Organisation>(`http://localhost:3007/organisations/${id}`); 
  }

  updateOrganisation(organisation: Organisation) {
    return this.httpClient.put(`http://localhost:3007/organisations/${organisation.id}`, organisation);
  }

  insertOrganisation(organisation: Organisation) {
    return this.httpClient.post(`http://localhost:3007/organisations`, organisation);
  }
 
} 
