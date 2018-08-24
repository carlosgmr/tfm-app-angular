import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorReadComponent } from './instructor-read.component';

describe('InstructorReadComponent', () => {
  let component: InstructorReadComponent;
  let fixture: ComponentFixture<InstructorReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructorReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
