import {Injectable} from '@angular/core';

import { HttpClient , HttpHeaders } from '@angular/common/http';



@Injectable()
export class LoginService {



   constructor(public _http: HttpClient) {
    }

    // entradas de la tabla temporal
    PostLogin(usuario: string , password: string) {

        const headers = new HttpHeaders({
            'AuthKey': '',
            'AuthToken': '',
            'Content-Type': 'application/json',
         });

         // peticion
        const request  =   JSON.stringify({
            'request':
            {
                'cClaveUsuario'   : usuario,
                'cPassword'       : password
            }
          });

          return this._http.post( '/wbService/login/',  request , {observe: 'response' ,  headers: headers });
    }




}
