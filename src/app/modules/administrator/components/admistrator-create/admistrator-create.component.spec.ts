import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmistratorCreateComponent } from './admistrator-create.component';

describe('AdmistratorCreateComponent', () => {
  let component: AdmistratorCreateComponent;
  let fixture: ComponentFixture<AdmistratorCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmistratorCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmistratorCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
