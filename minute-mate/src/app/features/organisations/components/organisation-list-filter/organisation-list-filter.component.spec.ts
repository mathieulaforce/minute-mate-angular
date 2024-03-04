import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganisationListFilterComponent } from './organisation-list-filter.component';

describe('OrganisationListFilterComponent', () => {
  let component: OrganisationListFilterComponent;
  let fixture: ComponentFixture<OrganisationListFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrganisationListFilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrganisationListFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
