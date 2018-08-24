import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionaryListingComponent } from './questionary-listing.component';

describe('QuestionaryListingComponent', () => {
  let component: QuestionaryListingComponent;
  let fixture: ComponentFixture<QuestionaryListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionaryListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionaryListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
