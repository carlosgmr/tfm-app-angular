import { TestBed, inject } from '@angular/core/testing';

import { QuestionaryModelService } from './questionary-model.service';

describe('QuestionaryModelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuestionaryModelService]
    });
  });

  it('should be created', inject([QuestionaryModelService], (service: QuestionaryModelService) => {
    expect(service).toBeTruthy();
  }));
});
