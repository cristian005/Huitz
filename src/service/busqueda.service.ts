import {Injectable} from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';



@Injectable()
export class BusquedaService {


   constructor(public _http: HttpClient) {
    }

    // entradas de la tabla temporal
    PostBusca(busca: string) {

        const headers = new HttpHeaders({
            'AuthKey': '',
            'AuthToken': '',
            'Content-Type': 'application/json',
         });

         // peticion
        const request  =   JSON.stringify({
            'request':
            {
                'cbusqueda'   : busca
            }
          });

          return this._http.post('/wbService/busqueda/' ,  request , {observe: 'response' ,  headers: headers });
    }




}