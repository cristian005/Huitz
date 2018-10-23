import { Component , OnInit, DoCheck } from '@angular/core';
import { addRefaccionService } from 'src/service/addRefaccion.service';
@Component({
    // tslint:disable-next-line:component-selector
    selector: 'cargar',
    templateUrl: 'cargarRef.component.html',
    styleUrls: ['cargarRef.component.scss'],
    providers: [addRefaccionService]
})
export class CargarRefComponent implements OnInit, DoCheck {
  anioInc: number;
  anioFin: number;
  linea: string;
  grupo: string;
  subgrupo: string;
  marca: string;
  observaciones: string;
  numParte: string;
  codigo: string;
  orientacion: string;
  codSat: string;
  marcaAut: string;
  submarcaAut: string;
  imagenes;
  descripcion: string;

    constructor(public _Service: addRefaccionService) {

    }
    urls = new Array<string>();
    ngOnInit() {

    }

    ngDoCheck() {
      this.descripcion = this.subgrupo + ' ' + this.grupo + ' ' + this.orientacion + ' ' + this.marcaAut +
      ' ' + this.submarcaAut + ' ' + this.anioInc + ' ' + this.anioFin;
      console.log(this.descripcion);
}

  detectFiles(event) {
    this.urls = [];
    const files = event.target.files;
    if (files) {
      for (const file of files) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.urls.push(e.target.result); };
        reader.readAsDataURL(file);
      }
    }
  }

  publicar() {
    let resultado, Error, Mensaje;
    this._Service.PostaddRefaccion(this.codigo, this.numParte, this.descripcion, this.codSat, this.grupo).subscribe(

    result => {
        resultado = result.body;
        Error   = resultado.response.success;
        Mensaje = resultado.response.logmessage;
        if (Error === 'false') {
           console.log('insertado');
            } else {

              console.log('error usuario incorrecto');
            }
    },
        error => {
      // tslint:disable-next-line:max-line-length
      alert(error.message + '\n' + error.error._errors[0]._errorMsg + '\n' + 'Numero de Error' + ' ' + error.error._errors[0]._errorNum);
        }
    );
}
  }



