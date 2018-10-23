import { Component , OnInit } from '@angular/core';
import { Busqueda } from '../models/busqueda';
import { BusquedaService } from 'src/service/busqueda.service';
import { ImgPrincipal } from '../models/imgPrincipal';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'menu',
    templateUrl: 'inicio.component.html',
    styleUrls: ['inicio.component.scss'],
    providers: [ BusquedaService ]
})
export class InicioComponent implements OnInit {

    busca:               string;
    _RefaccionObj:          Busqueda;
    _RefaccionArray:        Array<Busqueda> = [];
    _RefaccionImgObj: ImgPrincipal;
    _RefaccionImgArray: Array<ImgPrincipal> = [];
    listado;
    lisImg;
    marca:  any;
    principal: any;

    ngOnInit() {

    }

    buscar() {
        console.log(this.busca);
        let resultado, Error, Mensaje;
        let lista: any ;
        let listaImg: any;


        this._Service.PostBusca(this.busca).subscribe(
            result => {

                resultado = result.body;
                Error   = resultado.response.success;
                Mensaje = resultado.response.logmessage;
                if (Error === 'true') {

                        lista = resultado.response.postBusca.postBusca;
                        listaImg = resultado.response.tt_ctImgDef.tt_ctImgDef;
                        listaImg.forEach(item => {
                                this._RefaccionImgObj = new ImgPrincipal (
                                item.cGrupo,
                                item.cClasifica,
                                this.marca = item.bArchivo);
                                this._RefaccionImgArray.push(this._RefaccionImgObj);
                                this.principal = this._RefaccionImgArray[0].bArchivo;
                               console.log('esta es la imagen ' + this.marca);
                            }
                        );

                        lista.forEach(item => {
                                this._RefaccionObj = new Busqueda
                                    (
                                item.iRefaccion,
                                item.cCodigo,
                                item.cNumParte,
                                item.cDescripcion,
                                item.cCodSat,
                                item.dtCreado,
                                item.dtModificado,
                                    );
                                this._RefaccionArray.push(this._RefaccionObj);
                                this.listado = this._RefaccionArray;
                            }

                        ); console.log(this.listado);

                } else {
                   console.log('refaccion no encontrada');
                }


            this._RefaccionArray = [];
            this._RefaccionImgArray = [];
            },
                 error => {
                  // tslint:disable-next-line:max-line-length
                  alert(error.logmessage + '\n' + error.error._errors[0]._errorMsg + '\n' + 'Numero de Error' + '' + error.error._errors[0]._errorNum);
        }
    );


    }
    constructor( public _Service: BusquedaService) {

    }
}
