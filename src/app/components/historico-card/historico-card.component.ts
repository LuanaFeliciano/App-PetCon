import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-historico-card',
  templateUrl: './historico-card.component.html',
  styleUrls: ['./historico-card.component.scss'],
})
export class HistoricoCardComponent  implements OnInit {
  @Input() idade: number = 0;
  @Input() animal: string = '';
  @Input() nome: string = '';
  @Input() data: string = '';
  @Input() veterinario:  string = '';
  @Input() descricao:  string = '';
  @Input() sexo:  string = '';
  @Input() status:  string = '';
  color: string = '';
  constructor() { }

  getStatusStyle(status: string): any {
    switch (status) {
      case 'Agendada':
        return 'success';
      case 'Cancelada':
        return  'danger';
      case 'Finalizada':
        return 'tertiary';
      default:
        return {}; // Estilo padrão para outro status, ajuste conforme necessário
    }
  }
  
  ngOnInit() {
    this.color = this.getStatusStyle(this.status);
  }

  
  

}
