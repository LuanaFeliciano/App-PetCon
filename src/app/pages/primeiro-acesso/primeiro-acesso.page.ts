import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController, ToastController } from '@ionic/angular';
import { UsuarioService } from 'src/app/Services/usuario/usuario.service';

@Component({
  selector: 'app-primeiro-acesso',
  templateUrl: './primeiro-acesso.page.html',
  styleUrls: ['./primeiro-acesso.page.scss'],
})
export class PrimeiroAcessoPage implements OnInit {
  Form: FormGroup;
  showPassword: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private toastController: ToastController,
    private loadingCtrl: LoadingController,
    private serviceUser: UsuarioService) { 
    this.Form = this.formBuilder.group({
      cpf: [null, Validators.required],
      senha: [null, [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/)]],
    });
  }
  async presentMensagemToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      position: 'top',
      color: color,
    });
    toast.present();
  }


  // {
  //   "$id": "1",
  //   "senha": "1234",
  //   "telefone": "14998573623",
  //   "clinicaId": 1,
  //   "userId": 1,
  //   "nome": "Luana",
  //   "sobrenome": "Gomes Feliciano",
  //   "email": "lulugomesfeliciano@gmail.com",
  //   "cpf": "52635768897",
  //   "dataCadastro": "2023-11-15T17:38:37.3565583",
  //   "ativo": true
  // }


  // {
  //   "userId": 1,
  //   "nome": "Luana",
  //   "sobrenome": "Gomes Feliciano",
  //   "email": "lulugomesfeliciano@gmail.com",
  //   "cpf": "52635768897",
  //   "ativo": true,
  //   "senha": "1234",
  //   "telefone": "14998573623",
  //   "clinicaId": 1
  // }
  async AlterarSenha() {
    try {

      if (!this.Form.valid) {
        this.presentMensagemToast('Verifique os campos corretamente', 'danger');
        return;
      }

      const cpf = this.Form.get('cpf')?.value
      
      const response: any = await this.serviceUser.getUsuario(cpf);
      if (response) {
        const data = {
          userId: response.userId,
          nome: response.nome,
          sobrenome: response.sobrenome,
          email: response.email,
          cpf: response.cpf,
          ativo: response.ativo,
          senha: this.Form.get('senha')?.value,
          telefone: response.telefone,
          clinicaId: response.clinicaId,
        };
        console.log(data);
        this.editar(data);
      }
    } catch (error: any) {
      this.presentMensagemToast("erro ao buscar cliente", 'danger');
    }
  }


  async editar(data:any) {
    const loading = await this.loadingCtrl.create({
      message: 'Alterando Senha ....',
    });

    try {
      await loading.present();
      const response: any = await this.serviceUser.putUsuario(data);
      console.log(response)
      if (response) {
        this.presentMensagemToast("SENHA ALTERADA COM SUCESSO!", 'success');
      }
    } catch (error: any) {
      this.presentMensagemToast("Erro ao alterar senha", 'danger');
    } finally {
      loading.dismiss();
    }
  }


  ngOnInit() {
  }

  mudarVisualizacao() {
    this.showPassword = !this.showPassword;
  }


  validationMessages = {
    cpf: [
      { type: 'required', message: 'Informe seu CPF' },
    ],
    senha: [
      { type: 'required', message: 'Informe sua Senha' },
      { type: 'pattern', message: 'A senha deve conter pelo menos 8 caracteres, uma letra maiúscula e um caractere especial.' }
    ],
  };
}
