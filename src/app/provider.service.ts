import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  //URL DE LOGIN
  url = 'https://kemba.com.co/apirest_wpasigma/index.php/LoginServ/';
  //URL DE REGISTRO USUARIOS
  urlRegist = 'https://kemba.com.co/apirest_wpasigma/index.php/Usuarios/';
  //URL DE REGISTRO DE SOLICITUD
  urlSolicitud = 'https://kemba.com.co/apirest_wpasigma/index.php/Solicitudes/';
  // URL CONSULTA USUARIOS
  urlGetUsers = 'https://kemba.com.co/apirest_wpasigma/index.php/Usuarios/BucarUser/';
  // URL CONSULTA SOLICITUDES
  urlGetSolicitudes = 'https://kemba.com.co/apirest_wpasigma/index.php/Solicitudes/BucarUser/';

  constructor(public http: HttpClient) { }

  getPosts(usuario, password, record) {
    if (record == 1) {
      //Guardar Usuario
    } else {
      //No guardar
    }

    return new Promise(resolve => {
      this.http.get(this.url + 'find/' + usuario + '/' + password).subscribe(data => {
        //  this.http.get(this.url).subscribe(data => {
        resolve(data);
      }, error => {
        console.log(error);
      });
    });
  }

  getUser(id) { 
    return new Promise(resolve => {
      this.http.get(this.urlGetUsers + id).subscribe(data => {
        //  this.http.get(this.url).subscribe(data => {
        resolve(data);
      }, error => {
        console.log(error);
      });
    });
  }

  AddSolicitud(param1, param2, param3, param4, param5,param6) {

    return new Promise(resolve => {

      this.http.get(this.urlSolicitud + 'guardar?Usuarios_idUsuarios=' + param1 + '&Empresas_idEmpresas=' + param2 + '&Monto=' + param3 + '&dias=' + param4 + '&estado=' + param5+'&fecha='+param6).subscribe(data => {
        //  this.http.get(this.url).subscribe(data => {
        resolve(data);
      }, error => {
        console.log(error);
      });
    });
  }

  getSolicitudes(id){
    return new Promise(resolve => {
      this.http.get(this.urlGetSolicitudes + id).subscribe(data => {
        //  this.http.get(this.url).subscribe(data => {
        resolve(data);
      }, error => {
        console.log(error);
      });
    });
  }

  AddUser(nombre, tipo_doc, documento, email, telefono, username, password) {

    return new Promise(resolve => {
      this.http.get(this.urlRegist + 'guardar?nombre=' + nombre + '&celular=' + telefono + '&telefono=0000000&tipo_doc=' + tipo_doc + '&numero_documento=' + documento + '&email=' + email + '&direccion=calee&ciuda=soacha&nacionalidad=colombia&estado_civil=soltero&personas_cargo=1&nivel_academico=primaria&estrato=1&fecha_exp_documento=00-00-0000&numero_contacto_secundario=1234567&tipo_vivienda=arrendada&tiempo_vivineda=2 meses&genero=masculino&numero_hijos=1&situacion_labora=1&username=' + username + '&clave=' + password + '&rol_idRol=' + 1).subscribe(data => {
        //  this.http.get(this.url).subscribe(data => {
        resolve(data);
      }, error => {
        console.log(error);
      });
    });
  }

  addPost(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.url, JSON.stringify(data))
        .subscribe(response => {
          resolve(response);
        }, (error) => {
          reject(error);
        });
    });
  }
}
