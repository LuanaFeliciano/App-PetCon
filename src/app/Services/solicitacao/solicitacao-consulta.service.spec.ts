import { TestBed } from '@angular/core/testing';

import { SolicitacaoConsultaService } from './solicitacao-consulta.service';

describe('SolicitacaoConsultaService', () => {
  let service: SolicitacaoConsultaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolicitacaoConsultaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
