import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmistratorDeleteComponent } from './admistrator-delete.component';

describe('AdmistratorDeleteComponent', () => {
  let component: AdmistratorDeleteComponent;
  let fixture: ComponentFixture<AdmistratorDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmistratorDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmistratorDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
