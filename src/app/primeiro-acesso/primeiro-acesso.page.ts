import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primeiro-acesso',
  templateUrl: './primeiro-acesso.page.html',
  styleUrls: ['./primeiro-acesso.page.scss'],
})
export class PrimeiroAcessoPage implements OnInit {

  showPassword: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  mudarVisualizacao() {
    this.showPassword = !this.showPassword;
  }

}
