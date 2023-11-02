import { TestBed } from '@angular/core/testing';

import { CadastroAnimalService } from './cadastro-animal.service';

describe('CadastroAnimalService', () => {
  let service: CadastroAnimalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastroAnimalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
