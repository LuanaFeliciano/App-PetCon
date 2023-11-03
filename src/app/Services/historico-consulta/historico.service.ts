import { Injectable } from '@angular/core';
import { CapacitorHttp, HttpOptions, HttpResponse } from '@capacitor/core';
import { ApiRoutes } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class HistoricoService {

  constructor() { }


  public getHistorico(idCliente: number) {

    const options: HttpOptions = {
      url: `${ApiRoutes.getHistorico}/${idCliente}`,
      method: 'GET',
      headers: {
        'Content-Type': ApiRoutes.ContentType,
      },
    };

    return new Promise((resolve, reject) => {
      CapacitorHttp.get(options)
        .then((response: HttpResponse) => {
          console.log('Resposta get consultas:', response);

          if (response.status == 200) {
            resolve(response.data);
          } else {
            reject(response.data);
          }
        })
        .catch((error) => {
          reject('Erro ao buscar consulta service: ' + error);
        });
    });
  }
}
