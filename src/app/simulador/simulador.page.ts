import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-simulador',
  templateUrl: './simulador.page.html',
  styleUrls: ['./simulador.page.scss'],
})
export class SimuladorPage implements OnInit {

  Valor = 1000;
  Dias = 1;
  Multinivel: any;
  Nombre: any;
  Acepta: any;
  Show: boolean = false;
  record: any;

  constructor(
    private router: Router,
    public storage: Storage,
    public loadingController: LoadingController,
    public alertController: AlertController
  ) { }

  async ngOnInit() {

    this.Nombre = await this.storage.get('name');
    this.Show = false;

  }



  Solicitud() {
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

  Siguiente() {
    // console.log(this.record);
    if(this.record == true){
      this.router.navigate(['/preguntas']);
    }else{
      this.presentAlert('Debe aceptar Terminos y Condiciones de Kemba');
    }
    
  }

  async presentAlert(msg) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Atención',
      // subHeader: 'Subtitle',
      message: msg,
      buttons: ['Continuar']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  Salir() {
    this.router.navigate(['/inicio'])
  }

}
