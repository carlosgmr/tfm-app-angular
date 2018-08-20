import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmistratorReadComponent } from './admistrator-read.component';

describe('AdmistratorReadComponent', () => {
  let component: AdmistratorReadComponent;
  let fixture: ComponentFixture<AdmistratorReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmistratorReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmistratorReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
