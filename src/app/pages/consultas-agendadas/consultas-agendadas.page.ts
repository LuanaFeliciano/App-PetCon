import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consultas-agendadas',
  templateUrl: './consultas-agendadas.page.html',
  styleUrls: ['./consultas-agendadas.page.scss'],
})
export class ConsultasAgendadasPage implements OnInit {
  selectedAnimal: any; 
  filteredAgendamentos: any = [];

  agendamentos = [
    {id: 1, nome: 'Tobias', idade: 1, tipo: 'Hamster', link: '../../assets/hamsterPhoto.png', data: '10/10/2023',veterinario: 'Jorge', idAnimal: 1},
    {id: 2, nome: 'Frederic', idade: 10, tipo: 'Jabuti', link: '../../assets/tartarugaPhoto.png',data: '10/10/2023',veterinario: 'Jorge',idAnimal: 2 },
  ];
  animals = [
    {id: 1, nome: 'Tobias', idade: 1, tipo: 'Hamster', link: '../../assets/hamsterPhoto.png' },
    {id: 2, nome: 'Frederic', idade: 10, tipo: 'Jabuti', link: '../../assets/tartarugaPhoto.png' },
  ];

  filterConsultas(event: any) {
    const animalId = event.detail.value;
    console.log(animalId);
      this.filteredAgendamentos = this.agendamentos.filter(
        (consulta) => consulta.idAnimal == animalId
      );
      console.log(this.filteredAgendamentos);
  }
  
  
  
  constructor() { }

  ngOnInit() {
    this.filteredAgendamentos = this.agendamentos;
  }

}
