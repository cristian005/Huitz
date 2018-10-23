import {Injectable} from '@angular/core';

import { HttpClient , HttpHeaders } from '@angular/common/http';



@Injectable()
// tslint:disable-next-line:class-name
export class addRefaccionService {



   constructor(public _http: HttpClient) {
    }

    // entradas de la tabla temporal
    PostaddRefaccion(codigo: string , numParte: string, descripcion: string, codSat: string, grupo: string) {

        const headers = new HttpHeaders({
            'AuthKey': '',
            'AuthToken': '',
            'Content-Type': 'application/json',
         });

         // peticion
        const request  =   JSON.stringify({
            'request':
            {
                'cod'               : codigo,
                'numParte'          : numParte,
                'descripcion'       : descripcion,
                'codSat'            : codSat,
                'grupo'             : grupo ,
            }
          });

          return this._http.post( '/wbService/addRefaccion/',  request , {observe: 'response' ,  headers: headers });
    }




}
