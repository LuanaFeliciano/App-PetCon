import { Injectable } from '@angular/core';
import { CapacitorHttp, HttpOptions, HttpResponse } from '@capacitor/core';
import { ApiRoutes } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class CadastroAnimalService {

  constructor() { }


  public cadastroAnimal(idCliente: number, data: any) {

    const options: HttpOptions = {
      url: `${ApiRoutes.cadastroAnimal}?id=${idCliente}`,
      method: 'POST',
      data: data,
      headers: {
        'Content-Type': ApiRoutes.ContentType,
      },
    };

    return new Promise((resolve, reject) => {
      CapacitorHttp.post(options)
        .then((response: HttpResponse) => {
          console.log('Resposta cadastro animal:', response);

          if (response.status == 200) {
            resolve(response);
          } else {
            reject(response);
          }
        })
        .catch((error) => {
          reject('Erro ao cadastrar animal service: ' + error);
        });
    });
  }
}
