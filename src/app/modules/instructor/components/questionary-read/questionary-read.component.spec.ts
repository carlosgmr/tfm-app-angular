import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionaryReadComponent } from './questionary-read.component';

describe('QuestionaryReadComponent', () => {
  let component: QuestionaryReadComponent;
  let fixture: ComponentFixture<QuestionaryReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionaryReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionaryReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
