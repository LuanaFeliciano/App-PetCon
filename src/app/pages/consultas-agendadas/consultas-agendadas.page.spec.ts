import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConsultasAgendadasPage } from './consultas-agendadas.page';

describe('ConsultasAgendadasPage', () => {
  let component: ConsultasAgendadasPage;
  let fixture: ComponentFixture<ConsultasAgendadasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConsultasAgendadasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
