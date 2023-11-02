import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource, ImageOptions, Photo } from '@capacitor/camera';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController, ToastController } from '@ionic/angular';
import { CadastroAnimalService } from 'src/app/Services/cadastroAnimal/cadastro-animal.service';
import { UserServiceService } from 'src/app/Services/UserService/user-service.service';
@Component({
  selector: 'app-cadastro-animal',
  templateUrl: './cadastro-animal.page.html',
  styleUrls: ['./cadastro-animal.page.scss'],
})
export class CadastroAnimalPage implements OnInit {
  imageUrl : any;
  cadastroForm: FormGroup;
  idUser: number = this.UserGet.getIdUser();
  constructor(
    private formBuilder: FormBuilder,
    private toastController: ToastController,
    private cadastroService: CadastroAnimalService,
    private loadingCtrl: LoadingController,
    private UserGet: UserServiceService) {
    this.cadastroForm = this.formBuilder.group({
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
      { type: 'required', message: 'Informe a Raça do Animal'},
    ],
    idade: [
      { type: 'required', message: 'Informe a Idade do Animal'},
    ],
    sexo: [
      { type: 'required', message: 'Informe a Sexo do Animal'},
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
    if(image){
      this.imageUrl = image.dataUrl;
    }
  }

  async cadastrar(){
    if (!this.cadastroForm.valid) {
      this.presentMensagemToast('Verifique os campos corretamente', 'danger');
      return;
    }

    const loading = await this.loadingCtrl.create({
      message: 'Cadastrando ....',
    });

    try {
      await loading.present();
      
      const data = {
        nome: this.cadastroForm.get('nome')?.value,
        tipo: this.cadastroForm.get('tipo')?.value,
        raca: this.cadastroForm.get('raca')?.value,
        idade: this.cadastroForm.get('idade')?.value,
        sexo: this.cadastroForm.get('sexo')?.value,
        ativo: true,
      };

      const idUser = this.idUser;

      const response: any = await this.cadastroService.cadastroAnimal(idUser, data);
      console.log(response)
      if (response) {
        this.presentMensagemToast(response.data, 'success');
      }
    } catch (error: any) {
      this.presentMensagemToast("erro ao cadastrar", 'danger');
    } finally {
      loading.dismiss();
    }

    
  }

  
  ngOnInit() {
    this.idUser = this.UserGet.getIdUser();
  }

}
