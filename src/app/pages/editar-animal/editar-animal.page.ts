import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource} from '@capacitor/camera';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-editar-animal',
  templateUrl: './editar-animal.page.html',
  styleUrls: ['./editar-animal.page.scss'],
})
export class EditarAnimalPage implements OnInit {
  imageUrl: any;
  editarForm: FormGroup;
  animals = [
    {id: 1, nome: 'Tobias', idade: 1, tipo: 'Hamster', link: '../../assets/hamsterPhoto.png', raca: 'Sírio', sexo: 'Macho' },
    {id: 2, nome: 'Frederic', idade: 10, tipo: 'Jabuti', link: '../../assets/tartarugaPhoto.png', raca: 'Nenhuma', sexo: 'Macho'},
  ];
  constructor(
    private formBuilder: FormBuilder,
    private toastController: ToastController,
    private route: ActivatedRoute) {
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

  async cadastrar() {
    if (!this.editarForm.valid) {
      this.presentMensagemToast('Verifique os campos corretamente', 'danger');
      return;
    }
    this.presentMensagemToast('Editado com sucesso', 'success');
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const animalId = params.get('id');
      if (animalId) {
        // Encontrar o animal com base no animalId
        const animal = this.animals.find(a => a.id === +animalId);

        if (animal) {
          // Preencher os campos do formulário com os dados do animal
          this.editarForm.setValue({
            nome: animal.nome,
            tipo: animal.tipo,
            raca: animal.raca,
            idade: animal.idade,
            sexo: animal.sexo
          });
          this.imageUrl = animal.link;
        }
      }
    });
  }

}
