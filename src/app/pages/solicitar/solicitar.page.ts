import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-solicitar',
  templateUrl: './solicitar.page.html',
  styleUrls: ['./solicitar.page.scss'],
})
export class SolicitarPage implements OnInit {
  imageUrl: any;
  solicitarForm: FormGroup;
  nome : string = '';
  animals = [
    {id: 1, nome: 'Tobias', idade: 1, tipo: 'Hamster', link: '../../assets/hamsterPhoto.png', raca: 'Sírio', sexo: 'Macho' },
    {id: 2, nome: 'Frederic', idade: 10, tipo: 'Jabuti', link: '../../assets/tartarugaPhoto.png', raca: 'Nenhuma', sexo: 'Macho'},
  ];
  constructor(
    private formBuilder: FormBuilder,
    private toastController: ToastController,
    private route: ActivatedRoute) {
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

  async solicitar() {
    if (!this.solicitarForm.valid) {
      this.presentMensagemToast('Verifique os campos corretamente', 'danger');
      return;
    }
    this.presentMensagemToast('Solicitação enviada com sucesso', 'success');
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const animalId = params.get('id');
      if (animalId) {
        // Encontrar o animal com base no animalId
        const animal = this.animals.find(a => a.id === +animalId);

        if (animal) {
          this.nome = animal.nome;
          this.imageUrl = animal.link;
        }
      }
    });
  }

}
