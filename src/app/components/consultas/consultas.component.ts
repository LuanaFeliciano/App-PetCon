import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.scss'],
})
export class ConsultasComponent  implements OnInit {
  @Input() data: string = '';
  @Input() veterinario:  string = '';
  @Input() nome:  string = '';
  constructor() { }

  ngOnInit() {}

}
