import { TestBed } from '@angular/core/testing';

import { EditarAnimalService } from './editar-animal.service';

describe('EditarAnimalService', () => {
  let service: EditarAnimalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditarAnimalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
