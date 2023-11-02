import { Injectable } from '@angular/core';
import { CapacitorHttp, HttpOptions, HttpResponse } from '@capacitor/core';
import { ApiRoutes } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class EditarAnimalService {

  constructor() { }

  public editarAnimal(data: any) {

    const options: HttpOptions = {
      url: ApiRoutes.editarAnimal,
      method: 'PUT',
      data: data,
      headers: {
        'Content-Type': ApiRoutes.ContentType,
      },
    };

    return new Promise((resolve, reject) => {
      console.log(options.data)
      CapacitorHttp.put(options)
        .then((response: HttpResponse) => {
          console.log('Resposta editar animal:', response);

          if (response.status == 200) {
            resolve(response);
          } else {
            reject(response);
          }
        })
        .catch((error) => {
          reject('Erro ao editar service: ' + error);
        });
    });
  }

  public getAnimal(idAnimal: number) {

    const options: HttpOptions = {
      url: `${ApiRoutes.getAnimal}/${idAnimal}`,
      method: 'GET',
      headers: {
        'Content-Type': ApiRoutes.ContentType,
      },
    };

    return new Promise((resolve, reject) => {
      CapacitorHttp.get(options)
        .then((response: HttpResponse) => {
          console.log('Resposta get animal:', response);

          if (response.status == 200) {
            resolve(response.data);
          } else {
            reject(response.data);
          }
        })
        .catch((error) => {
          reject('Erro ao buscar animal service: ' + error);
        });
    });
  }
}
