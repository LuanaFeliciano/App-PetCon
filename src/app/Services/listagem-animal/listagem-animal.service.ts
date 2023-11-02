import { Injectable } from '@angular/core';
import { CapacitorHttp, HttpOptions, HttpResponse } from '@capacitor/core';
import { ApiRoutes } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class ListagemAnimalService {

  constructor() { }


  public meusAnimais(param: any) {

    const options: HttpOptions = {
      url: `${ApiRoutes.listagemAnimal}/${param}/animais`,
      method: 'GET',
      responseType: 'json',
    };

    return new Promise((resolve, reject) => {
      CapacitorHttp.get(options)
        .then((response: HttpResponse) => {
          console.log('Resposta da solicitação de animais:', response);

          if (response.status === 200) {
            resolve(response.data.$values);
          } else {
            reject(response.data.$values);
          }
        })
        .catch((error) => {
          reject('Erro ao consultar animais service: ' + error);
        });
    });
  }
}
