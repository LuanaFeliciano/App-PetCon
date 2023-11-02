import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource} from '@capacitor/camera';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController, ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { UserServiceService } from 'src/app/Services/UserService/user-service.service';
import { EditarAnimalService } from 'src/app/Services/editarAnimal/editar-animal.service';
@Component({
  selector: 'app-editar-animal',
  templateUrl: './editar-animal.page.html',
  styleUrls: ['./editar-animal.page.scss'],
})
export class EditarAnimalPage implements OnInit {
  idUser: number = this.UserGet.getIdUser();
  animalId: any;
  imageUrl: any;
  editarForm: FormGroup;
  animals = [
    {id: 1, nome: 'Tobias', idade: 1, tipo: 'Hamster', link: '../../assets/hamsterPhoto.png', raca: 'Sírio', sexo: 'Macho' },
    {id: 2, nome: 'Frederic', idade: 10, tipo: 'Jabuti', link: '../../assets/tartarugaPhoto.png', raca: 'Nenhuma', sexo: 'Macho'},
  ];
  constructor(
    private formBuilder: FormBuilder,
    private toastController: ToastController,
    private route: ActivatedRoute,
    private editarService: EditarAnimalService,
    private loadingCtrl: LoadingController,
    private UserGet: UserServiceService) {
    this.editarForm = this.formBuilder.group({
      nome: [null, Validators.required],
      tipo: [null, Validators.required],
      raca: [null, Validators.required],
      idade: [null, Validators.required],
      sexo: [null, Validators.required],
    });
  }

  validationMessages = {
    nome: [
      { type: 'required', message: 'Informe o Nome do Animal.' },
    ],
    tipo: [
      { type: 'required', message: 'Informe o Tipo do Animal' },
    ],
    raca: [
      { type: 'required', message: 'Informe a Raça do Animal' },
    ],
    idade: [
      { type: 'required', message: 'Informe a Idade do Animal' },
    ],
    sexo: [
      { type: 'required', message: 'Informe a Sexo do Animal' },
    ]
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

  async abrirSelecaoDeImagem() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Photos,
    });
    console.log(image);
    if (image) {
      this.imageUrl = image.dataUrl;
    }
  }

  async editar() {
    if (!this.editarForm.valid) {
      this.presentMensagemToast('Verifique os campos corretamente', 'danger');
      return;
    }
    const loading = await this.loadingCtrl.create({
      message: 'Editando ....',
    });

    try {
      await loading.present();
      
      const data = {
        animalId: Number(this.animalId),
        nome: this.editarForm.get('nome')?.value,
        tipo: this.editarForm.get('tipo')?.value,
        raca: this.editarForm.get('raca')?.value,
        idade: this.editarForm.get('idade')?.value,
        sexo: this.editarForm.get('sexo')?.value,
        clienteId: Number(this.idUser),
        ativo: true,
      };

      const response: any = await this.editarService.editarAnimal(data);
      console.log(response)
      if (response) {
        this.presentMensagemToast(response.data, 'success');
      }
    } catch (error: any) {
      this.presentMensagemToast("erro ao editar", 'danger');
    } finally {
      loading.dismiss();
    }
  }

  async getAnimal(idAnimal: any) {
    try {
      
      const response: any = await this.editarService.getAnimal(idAnimal);
      console.log(response)
      if (response) {
        this.editarForm.setValue({
                nome: response.nome,
                tipo: response.tipo,
                raca: response.raca,
                idade: response.idade,
                sexo: response.sexo
              });
      }
    } catch (error: any) {
      this.presentMensagemToast("erro ao buscar animal", 'danger');
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
