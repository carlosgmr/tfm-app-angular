import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupReadComponent } from './group-read.component';

describe('GroupReadComponent', () => {
  let component: GroupReadComponent;
  let fixture: ComponentFixture<GroupReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
