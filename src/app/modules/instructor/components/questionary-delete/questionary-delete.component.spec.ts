import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionaryDeleteComponent } from './questionary-delete.component';

describe('QuestionaryDeleteComponent', () => {
  let component: QuestionaryDeleteComponent;
  let fixture: ComponentFixture<QuestionaryDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionaryDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionaryDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
