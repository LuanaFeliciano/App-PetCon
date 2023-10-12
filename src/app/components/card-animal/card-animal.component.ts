import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-animal',
  templateUrl: './card-animal.component.html',
  styleUrls: ['./card-animal.component.scss'],
})
export class CardAnimalComponent  implements OnInit {
  @Input() idade: number = 0;
  @Input() tipo: string = '';
  @Input() nome: string = '';
  @Input() link: string = '';
  constructor() { }

  ngOnInit() {}

}
