import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { UserServiceService } from 'src/app/Services/UserService/user-service.service';
import { ListagemAnimalService } from 'src/app/Services/listagem-animal/listagem-animal.service';

@Component({
  selector: 'app-meus-animais',
  templateUrl: './meus-animais.page.html',
  styleUrls: ['./meus-animais.page.scss'],
})
export class MeusAnimaisPage implements OnInit {

  idUser: number = this.UserGet.getIdUser();
  animals: any = [];
  erroAnimal: boolean = false;
  constructor(private meusAnimaisService: ListagemAnimalService, private loadingCtrl: LoadingController,private router: Router,private toastController: ToastController, private UserGet: UserServiceService) { }


  async presentMensagemToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      position: 'top',
      color: 'danger',
    });
    toast.present();
  }

  handleRefresh(event: any) {
    setTimeout(() => {
      this.listagemAnimais();
      event.target.complete();
    }, 2000);
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
        this.erroAnimal = false;
        this.animals = response;
        
      }
    } catch (error: any) {
      this.presentMensagemToast(error);
      this.erroAnimal = true;
    } finally {
      loading.dismiss();
    }
  }


  ngOnInit() {
    this.listagemAnimais();
    this.idUser = this.UserGet.getIdUser();
  }

}
