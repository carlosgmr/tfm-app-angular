import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionaryUpdateQuestionsComponent } from './questionary-update-questions.component';

describe('QuestionaryUpdateQuestionsComponent', () => {
  let component: QuestionaryUpdateQuestionsComponent;
  let fixture: ComponentFixture<QuestionaryUpdateQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionaryUpdateQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionaryUpdateQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
