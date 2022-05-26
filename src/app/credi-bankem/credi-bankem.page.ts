import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-credi-bankem',
  templateUrl: './credi-bankem.page.html',
  styleUrls: ['./credi-bankem.page.scss'],
})
export class CrediBankemPage implements OnInit {
  Nombre: any;
  
  constructor(
    private router: Router,
    public storage: Storage
  ) { }

  async ngOnInit() {

    this.Nombre = await this.storage.get('name');

  }

  Simulador() {
    this.router.navigate(['/simulador']);
  }

  Solicitud() {
    this.router.navigate(['/solicitud']);
  }

  Documentacion() {
    this.router.navigate(['/documentos']);
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

  ListaSolicitudes(){
    this.router.navigate(['/lista-solicitudes']);
  }

}
