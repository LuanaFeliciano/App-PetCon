import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource, ImageOptions, Photo } from '@capacitor/camera';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-cadastro-animal',
  templateUrl: './cadastro-animal.page.html',
  styleUrls: ['./cadastro-animal.page.scss'],
})
export class CadastroAnimalPage implements OnInit {
  imageUrl : any;
  cadastroForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private toastController: ToastController,) {
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
    this.presentMensagemToast('Cadastrado com sucesso', 'success');
  }

  
  ngOnInit() {
  }

}
