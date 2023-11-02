import { TestBed } from '@angular/core/testing';

import { ListagemAnimalService } from './listagem-animal.service';

describe('ListagemAnimalService', () => {
  let service: ListagemAnimalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListagemAnimalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
