import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { UserServiceService } from 'src/app/Services/UserService/user-service.service';
import { HistoricoService } from 'src/app/Services/historico-consulta/historico.service';
import { ListagemAnimalService } from 'src/app/Services/listagem-animal/listagem-animal.service';

@Component({
  selector: 'app-historico-consulta',
  templateUrl: './historico-consulta.page.html',
  styleUrls: ['./historico-consulta.page.scss'],
})
export class HistoricoConsultaPage implements OnInit {
  selectedAnimal: any; 
  selectedStatus: any;;
  filteredConsultas: any = [];
  idUser: number = this.UserGet.getIdUser();
  constructor(
    private historicoService: HistoricoService, 
    private loadingCtrl: LoadingController, 
    private toastController: ToastController, 
    private UserGet: UserServiceService,
    private meusAnimaisService: ListagemAnimalService,) { }

  animals: any = [];

  filterConsultas(event: any) {
    const selectedValue = event.detail.value;
  
    if (selectedValue === 'todos') {
      this.selectedAnimal = null;
    } else {
      this.selectedAnimal = selectedValue;
    }
  
    this.listarConsulta();
  }

  filterConsultasPorStatus(event: any) {
    const selectedValue = event.detail.value;
    if (selectedValue === 'todos') {
      this.selectedStatus = null;
    } else {
      this.selectedStatus = selectedValue;
    }
  
    this.listarConsulta();
  }
  
  

  async presentMensagemToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      position: 'top',
      color: 'danger',
    });
    toast.present();
  }

  async listagemAnimais() {
    const loading = await this.loadingCtrl.create({
      message: 'Carregando ....',
    });

    try {
      await loading.present();

      const idUser = this.idUser;

      const response: any = await this.meusAnimaisService.meusAnimais(idUser);
      
      if (response) {
        console.log(response);
        this.animals = response;
      }
    } catch (error: any) {
      this.presentMensagemToast(error);
    } finally {
      loading.dismiss();
    }
  }

  async listarConsulta() {
    const loading = await this.loadingCtrl.create({
      message: 'Carregando ....',
    });
  
    try {
      await loading.present();
  
      const idUser = this.idUser; // Substitua pelo valor correto
  
      const response: any = await this.historicoService.getHistorico(idUser);
  
      if (response) {
        console.log(response);
  
        if (this.selectedAnimal) {
          const consultasDoAnimal = response.filter(
            (consulta: any) => consulta.Animal.AnimalId === this.selectedAnimal
          );
  
          if (this.selectedStatus) {
            const consultasFiltradas = consultasDoAnimal.filter(
              (consulta: any) => consulta.Status === this.selectedStatus
            );
  
            if (consultasFiltradas.length > 0) {
              this.filteredConsultas = consultasFiltradas;
            } else {
              this.presentMensagemToast(`Não foram encontradas consultas com o status ${this.selectedStatus} para esse animal.`);
              this.filteredConsultas = [];
            }
          } else {
            this.filteredConsultas = consultasDoAnimal;
          }
        } else if (this.selectedStatus) {
          const consultasFiltradas = response.filter(
            (consulta: any) => consulta.Status === this.selectedStatus
          );
  
          if (consultasFiltradas.length > 0) {
            this.filteredConsultas = consultasFiltradas;
          } else {
            this.presentMensagemToast(`Não foram encontradas consultas com o status ${this.selectedStatus}.`);
            this.filteredConsultas = [];
          }
        } else {
          this.filteredConsultas = response;
        }
      }
    } catch (error: any) {
      this.presentMensagemToast(error);
    } finally {
      loading.dismiss();
    }
  }
  
  
  


  ngOnInit() {
    this.idUser = this.UserGet.getIdUser();
    this.listarConsulta();
    this.listagemAnimais();
  }

}
