import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupInstructorComponent } from './group-instructor.component';

describe('GroupInstructorComponent', () => {
  let component: GroupInstructorComponent;
  let fixture: ComponentFixture<GroupInstructorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupInstructorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupInstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
