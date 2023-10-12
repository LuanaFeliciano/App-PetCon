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
  @Input() servico:  string = '';
  constructor() { }

  ngOnInit() {}

}
