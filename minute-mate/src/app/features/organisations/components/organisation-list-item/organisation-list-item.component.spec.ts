import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganisationListItemComponent } from './organisation-list-item.component';

describe('OrganisationListItemComponent', () => {
  let component: OrganisationListItemComponent;
  let fixture: ComponentFixture<OrganisationListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrganisationListItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrganisationListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
