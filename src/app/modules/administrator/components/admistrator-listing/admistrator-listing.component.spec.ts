import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmistratorListingComponent } from './admistrator-listing.component';

describe('AdmistratorListingComponent', () => {
  let component: AdmistratorListingComponent;
  let fixture: ComponentFixture<AdmistratorListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmistratorListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmistratorListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
