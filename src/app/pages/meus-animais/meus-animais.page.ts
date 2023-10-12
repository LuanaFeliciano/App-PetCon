import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meus-animais',
  templateUrl: './meus-animais.page.html',
  styleUrls: ['./meus-animais.page.scss'],
})
export class MeusAnimaisPage implements OnInit {
  animals = [
    {id: 1, nome: 'Tobias', idade: 1, tipo: 'Hamster', link: '../../assets/hamsterPhoto.png' },
    {id: 2, nome: 'Frederic', idade: 10, tipo: 'Jabuti', link: '../../assets/tartarugaPhoto.png' },
  ];
  constructor() { }

  ngOnInit() {
  }

}
