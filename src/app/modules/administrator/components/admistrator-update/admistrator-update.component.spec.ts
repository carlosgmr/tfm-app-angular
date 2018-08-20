import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmistratorUpdateComponent } from './admistrator-update.component';

describe('AdmistratorUpdateComponent', () => {
  let component: AdmistratorUpdateComponent;
  let fixture: ComponentFixture<AdmistratorUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmistratorUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmistratorUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
