import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() { }

  private idUsuario: number = 0;

  setIdUser(id: number) {
    this.idUsuario = id;
  }

  getIdUser() {
    return this.idUsuario;
  }
}
