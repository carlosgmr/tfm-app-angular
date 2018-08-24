import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionaryUpdateComponent } from './questionary-update.component';

describe('QuestionaryUpdateComponent', () => {
  let component: QuestionaryUpdateComponent;
  let fixture: ComponentFixture<QuestionaryUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionaryUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionaryUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
