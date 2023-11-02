import { Injectable } from '@angular/core';
import { ApiRoutes } from '../api/api.service';
import { CapacitorHttp, HttpOptions, HttpResponse } from '@capacitor/core';
import { Observable } from 'rxjs';
import { UserServiceService } from '../UserService/user-service.service';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private UserService: UserServiceService) { }

  
  public login(param: any) {

    const options: HttpOptions = {
      url: ApiRoutes.login,
      method: 'POST',
      params: param,
      responseType: 'json',
    };

    return new Promise((resolve, reject) => {
      CapacitorHttp.post(options)
        .then((response: HttpResponse) => {
          console.log('Resposta da solicitação de login:', response);

          if (response.status === 200) {
            resolve(response.data);
            console.log(response.data.clienteId);
            this.UserService.setIdUser(response.data.clienteId)
          } else {
            reject(response.data);
          }
        })
        .catch((error) => {
          reject('Erro ao fazer login service: ' + error);
        });
    });
  }

}
