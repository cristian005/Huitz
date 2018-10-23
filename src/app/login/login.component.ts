import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { LoginService } from 'src/service/login.service';
import { Router } from '@angular/router';

@Component({

    // tslint:disable-next-line:component-selector
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.scss'],
    providers: [ LoginService ]
  })
  export class LoginComponent implements OnInit {
    title = 'Huitz';
    Usuario:  string;
    Password: string;

    constructor( public _Service: LoginService, private router: Router ) {}

    ngOnInit() {

    }

    click() {

      let resultado, Error, Mensaje, user, apellido;
              this._Service.PostLogin(this.Usuario, this.Password).subscribe(

              result => {
                  resultado = result.body;
                  Error   = resultado.response.success;
                  Mensaje = resultado.response.logmessage;
                  if (Error === 'false') {
                        $('#login-button').click(function(event) {
                          event.preventDefault();
                          $('form').fadeOut(500);
                          $('.wrapper').addClass('form-success');
                        }
                      );

                          user        = resultado.response.postLogin.postLogin[0].cNombre;
                          apellido    = resultado.response.postLogin.postLogin[0].cApellido;
                          this.router.navigate(['/home']);
                          console.log('bienvenido' + user + ' ' + apellido);

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
