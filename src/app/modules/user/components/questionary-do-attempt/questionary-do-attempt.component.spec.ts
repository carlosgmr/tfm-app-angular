import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionaryDoAttemptComponent } from './questionary-do-attempt.component';

describe('QuestionaryDoAttemptComponent', () => {
  let component: QuestionaryDoAttemptComponent;
  let fixture: ComponentFixture<QuestionaryDoAttemptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionaryDoAttemptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionaryDoAttemptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
