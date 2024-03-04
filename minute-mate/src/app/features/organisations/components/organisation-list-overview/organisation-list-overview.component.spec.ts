import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganisationListOverviewComponent } from './organisation-list-overview.component';

describe('OrganisationListOverviewComponent', () => {
  let component: OrganisationListOverviewComponent;
  let fixture: ComponentFixture<OrganisationListOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrganisationListOverviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrganisationListOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
