import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-respuesta-credito',
  templateUrl: './respuesta-credito.page.html',
  styleUrls: ['./respuesta-credito.page.scss'],
})
export class RespuestaCreditoPage implements OnInit {
  Nombre: any;
  Credito: any;

  constructor(
    private router: Router,
    public storage: Storage,
    public alertController: AlertController,
    public loadingController: LoadingController,
  ) { }

  async ngOnInit() {
    this.Nombre = await this.storage.get('name');
    this.Credito = await this.storage.get('Solicitud');
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

  Salir() {
    this.router.navigate(['/inicio']);
  }

  Resumen() {
    this.router.navigate(['/plan-pago']);
  }

  Solicitar(){
    this.router.navigate(['/resumen-solicitud']);
  }

}
