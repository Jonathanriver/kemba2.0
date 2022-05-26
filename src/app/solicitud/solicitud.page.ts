import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.page.html',
  styleUrls: ['./solicitud.page.scss'],
})
export class SolicitudPage implements OnInit {
  Valor = 0;
  Dias = 0;
  Multi: any;
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  ResumenSolicitud(){
    this.router.navigate(['/resumen-solicitud']);
  }

  Notificacion() {
    this.router.navigate(['/notificacion']);
  }

  Dashboard() {
    this.router.navigate(['/dashboard']);
  }

  Historial() {
    this.router.navigate(['/historial']);
  }

}
