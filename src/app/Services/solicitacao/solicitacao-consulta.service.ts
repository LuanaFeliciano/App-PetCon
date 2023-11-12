import { Injectable } from '@angular/core';
import { CapacitorHttp, HttpOptions, HttpResponse } from '@capacitor/core';
import { ApiRoutes } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class SolicitacaoConsultaService {

  constructor() { }

  public solicitarConsulta(data: any) {

    const options: HttpOptions = {
      url: `${ApiRoutes.solicitarConsulta}`,
      method: 'POST',
      data: data,
      headers: {
        'Content-Type': ApiRoutes.ContentType,
      },
    };

    return new Promise((resolve, reject) => {
      CapacitorHttp.post(options)
        .then((response: HttpResponse) => {
          console.log('Resposta cadastro solicitacao:', response);

          if (response.status == 201) {
            resolve(response);
          } else {
            reject(response);
          }
        })
        .catch((error) => {
          reject('Erro ao solicitar consulta service: ' + error);
        });
    });
  }
}
