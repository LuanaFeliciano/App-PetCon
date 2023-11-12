import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { UserServiceService } from 'src/app/Services/UserService/user-service.service';
import { EditarAnimalService } from 'src/app/Services/editarAnimal/editar-animal.service';
import { SolicitacaoConsultaService } from 'src/app/Services/solicitacao/solicitacao-consulta.service';

@Component({
  selector: 'app-solicitar',
  templateUrl: './solicitar.page.html',
  styleUrls: ['./solicitar.page.scss'],
})
export class SolicitarPage implements OnInit {
  imageUrl: any;
  solicitarForm: FormGroup;
  nome : string = '';

  idUser: number = this.UserGet.getIdUser();
  animalId: any;

  constructor(
    private formBuilder: FormBuilder,
    private toastController: ToastController,
    private route: ActivatedRoute,
    private loadingCtrl: LoadingController,
    private solicitarConsulta: SolicitacaoConsultaService,
    private UserGet: UserServiceService,
    private editarService: EditarAnimalService,) {
    this.solicitarForm = this.formBuilder.group({
      periodo: [null, Validators.required],
      descricao: [null, Validators.required],
      urgencia: [null, Validators.required],
    });
  }

  validationMessages = {
    periodo: [
      { type: 'required', message: 'Informe um período de consulta.' },
    ],
    descricao: [
      { type: 'required', message: 'Descreva a razão da solicitação' },
    ],
    urgencia: [
      { type: 'required', message: 'Informe a urgência da solicitação' },
    ],
  };

  async presentMensagemToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      position: 'top',
      color: color,
    });
    toast.present();
  }

  async getAnimal(idAnimal: any) {
    try {
      
      const response: any = await this.editarService.getAnimal(idAnimal);
      console.log(response)
      if (response) {
        this.nome = response.nome
      }
    } catch (error: any) {
      this.presentMensagemToast("erro ao buscar animal", 'danger');
    }
  }

  async solicitar(){
    if (!this.solicitarForm.valid) {
      this.presentMensagemToast('Verifique os campos corretamente', 'danger');
      return;
    }

    const loading = await this.loadingCtrl.create({
      message: 'Solicitando ....',
    });

    try {
      await loading.present();
      
      const data = {
        animalId: this.animalId,
        clienteId: this.idUser,
        periodo: this.solicitarForm.get('periodo')?.value,
        descricao: this.solicitarForm.get('descricao')?.value,
        urgencia: this.solicitarForm.get('urgencia')?.value,
      };

      const response: any = await this.solicitarConsulta.solicitarConsulta(data);
      console.log(response)
      if (response) {
        this.presentMensagemToast(response.data, 'success');
      }
    } catch (error: any) {
      this.presentMensagemToast("erro ao solicitar agendamento", 'danger');
    } finally {
      loading.dismiss();
    }

    
  }
  ngOnInit() {
    this.idUser = this.UserGet.getIdUser();
    this.route.paramMap.subscribe(params => {
      const animalId = params.get('id');
      if (animalId) {
        this.getAnimal(animalId);
        this.animalId = animalId
      }
    });
  }
}
