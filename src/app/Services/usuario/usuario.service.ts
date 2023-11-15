import { Injectable } from '@angular/core';
import { CapacitorHttp, HttpOptions, HttpResponse } from '@capacitor/core';
import { ApiRoutes } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }


  public getUsuario(cpf: any) {

    const options: HttpOptions = {
      url: `${ApiRoutes.getUsuario}/${cpf}`,
      method: 'GET',
      responseType: 'json',
    };

    return new Promise((resolve, reject) => {
      CapacitorHttp.get(options)
        .then((response: HttpResponse) => {
          console.log('Resposta da solicitação de usuario:', response);

          if (response.status === 200) {
            resolve(response.data);
          } else {
            reject(response.data);
          }
        })
        .catch((error) => {
          reject('Erro ao consultar usuario service: ' + error);
        });
    });
  }

  public putUsuario(data: any) {

    const options: HttpOptions = {
      url: `${ApiRoutes.putUsuario}`,
      method: 'PUT',
      data: data,
      headers: {
        'Content-Type': ApiRoutes.ContentType,
      },
    };

    return new Promise((resolve, reject) => {
      CapacitorHttp.put(options)
        .then((response: HttpResponse) => {
          console.log('Resposta da solicitação de usuario put:', response);

          if (response.status === 200) {
            resolve(response.data);
          } else {
            reject(response.data);
          }
        })
        .catch((error) => {
          reject('Erro ao consultar usuario service put: ' + error);
        });
    });
  }
}
