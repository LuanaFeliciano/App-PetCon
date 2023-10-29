import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { LoginService } from 'src/app/Services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  showPassword: boolean = false;
  email: string = '';
  password: string = '';
  constructor(private login: LoginService, private loadingCtrl: LoadingController,private router: Router,private toastController: ToastController,) { }

  ngOnInit() {
  }

  mudarVisualizacao() {
    this.showPassword = !this.showPassword;
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


  async fazerLogin() {

    if(!this.email || !this.password){
      this.presentMensagemToast('Verifique os campos corretamente');
      return;
    }

    const loading = await this.loadingCtrl.create({
      message: 'Autenticando ....',
    });

    try {
      await loading.present();

      const params = {
        email: this.email,
        senha: this.password,
      };

      const response: any = await this.login.login(params);

      if (response) {
        this.router.navigate(['/inicio']);
      }
    } catch (error: any) {
      this.presentMensagemToast(error);
    } finally {
      loading.dismiss();
    }
  }

}
