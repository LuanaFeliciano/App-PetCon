import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HistoricoConsultaPage } from './historico-consulta.page';

describe('HistoricoConsultaPage', () => {
  let component: HistoricoConsultaPage;
  let fixture: ComponentFixture<HistoricoConsultaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HistoricoConsultaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
