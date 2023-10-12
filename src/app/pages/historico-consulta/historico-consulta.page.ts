import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historico-consulta',
  templateUrl: './historico-consulta.page.html',
  styleUrls: ['./historico-consulta.page.scss'],
})
export class HistoricoConsultaPage implements OnInit {
  selectedAnimal: any; 
  filteredConsultas: any = [];

  consultas = [
    {id: 1, nome: 'Tobias', idade: 1, tipo: 'Hamster', link: '../../assets/hamsterPhoto.png', data: '10/10/2023',veterinario: 'Jorge', idAnimal: 1, servico: 'Realizou Check-up no final de semana, estando tudo em ordem' },
    {id: 2, nome: 'Frederic', idade: 10, tipo: 'Jabuti', link: '../../assets/tartarugaPhoto.png',data: '10/10/2023',veterinario: 'Jorge',idAnimal: 2,servico: 'Comeu um pedaço de plástico, foi feita a retirada' },
  ];
  animals = [
    {id: 1, nome: 'Tobias', idade: 1, tipo: 'Hamster', link: '../../assets/hamsterPhoto.png' },
    {id: 2, nome: 'Frederic', idade: 10, tipo: 'Jabuti', link: '../../assets/tartarugaPhoto.png' },
  ];

  filterConsultas(event: any) {
    const animalId = event.detail.value;
    console.log(animalId);
      this.filteredConsultas = this.consultas.filter(
        (consulta) => consulta.idAnimal == animalId
      );
      console.log(this.filteredConsultas);
  }
  
  
  
  constructor() { }

  ngOnInit() {
    this.filteredConsultas = this.consultas;
  }

}
