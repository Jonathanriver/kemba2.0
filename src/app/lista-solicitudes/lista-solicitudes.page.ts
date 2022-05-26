import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ProviderService } from '../provider.service';

@Component({
  selector: 'app-lista-solicitudes',
  templateUrl: './lista-solicitudes.page.html',
  styleUrls: ['./lista-solicitudes.page.scss'],
})
export class ListaSolicitudesPage implements OnInit {
  Nombre: any;
  DataUser: any;
  Solicitudes = [];
  Valido = "";

  constructor(
    private router: Router,
    public storage: Storage,
    public postServices: ProviderService,
    public alertController: AlertController,
    public loadingController: LoadingController,
  ) { }

  async ngOnInit() {
    this.Nombre = await this.storage.get('name');
    this.DataUser = await this.storage.get('Usuario');
    this.presentLoadingBasic();
    this.ListarSolicitudes();
  }

  ListarSolicitudes() {
    this.postServices.getSolicitudes(this.DataUser.idUsuarios).then(data => {
      
      if (data) {

        let estado: any;

        for (let i = 0; i < data['response'].length; i++) {
          if (data['response'][i].estado == 1) {
            estado = 'Registrada';
            this.Valido = 'valido';
          } else if (data['response'][i].estado == 2) {
            estado = 'En revisión';
            this.Valido = 'valido2';
          } else if (data['response'][i].estado == 3) {
            estado = 'Aprovada';
            this.Valido = 'valido3';
          } else if (data['response'][i].estado == 4) {
            estado = 'Cerrada';
            this.Valido = 'valido4';
          }

          this.Solicitudes.push({
            'id': data['response'][i].idSolicitudes,
            'Monto': data['response'][i].Monto,
            'dias': data['response'][i].dias,
            'fecha': data['response'][i].fecha,
            'estado': estado,
          });
        }

      } else {

        this.presentAlertError();
      }
    });
  }

  async presentAlertError() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alerta',
      subHeader: '',
      message: 'Se ha presentado un error durante la consulta por favor intentelo de nuevo.',
      buttons: ['Cerrar']
    });

    await alert.present();
  }

  async presentLoadingBasic() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      spinner: 'circles',
      message: 'Por favor espere...',
      duration: 5000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
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
