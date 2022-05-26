import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { ProviderService } from '../provider.service';


@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {

  //Declaracion variables
  nombre: any;
  tipo_doc: any;
  documento: any;
  email: any;
  telefono: any;
  username: any;
  password: any;
  repassword: any;
  valida: any;

  //overlay
  loading: any;

  constructor(
    private router: Router,
    public alertController: AlertController,
    public loadingController: LoadingController,
    public postServices: ProviderService
  ) { }

  ngOnInit() {
    this.presentLoadingBasic();
  }

  Registrar() {
    let resulta = this.validacionCampos();

    if (resulta == 1) {
      this.postServices.AddUser(this.nombre, this.tipo_doc, this.documento, this.email, this.telefono, this.username, this.password)
        .then(data => {
          this.presentLoadingBasic();
          this.presentLoading();

          if (data > 0) {
            this.Dismiss();
            this.presentAlertOk();
            this.router.navigate(['/inicio']);
          } else {
            
            this.presentAlertError();
          }
        });
    }

  }

  async presentLoadingBasic() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      spinner: 'circles',
      message: 'Por favor espere...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      spinner: null,
      duration: 5000,
      message: 'Haga click en cualquier parte de la pantalla para cerrara esta ventana de espera',
      translucent: true,
      cssClass: 'custom-class custom-loading',
      backdropDismiss: true
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed with role:', role);
  
  }

  Dismiss() {
    this.loadingController.dismiss().then((response) => {
      console.log('Loader closed!', response);
    }).catch((err) => {
      console.log('Error occured : ', err);
    });
  }

  validacionCampos() {

    let valor: any;

    if (this.nombre == '' || this.nombre == null || this.nombre == undefined) {
      this.presentAlert();
      valor = 0;
      return false;
    } else {
      valor = 1;
    }

    if (this.tipo_doc == '' || this.tipo_doc == null || this.tipo_doc == undefined) {
      this.presentAlert();
      valor = 0;
      return false;
    } else {
      valor = 1;
    }


    if (this.documento == '' || this.documento == null || this.documento == undefined) {
      this.presentAlert();
      valor = 0;
      return false;
    } else {
      valor = 1;
    }

    if (this.email == '' || this.email == null || this.email == undefined) {
      this.presentAlert();
      valor = 0;
      return false;
    } else {
      valor = 1;
    }

    if (this.telefono == '' || this.telefono == null || this.telefono == undefined) {
      this.presentAlert();
      valor = 0;
      return false;
    } else {
      valor = 1;
    }

    if (this.username == '' || this.username == null || this.username == undefined) {
      this.presentAlert();
      valor = 0;
      return false;
    } else {
      valor = 1;
    }

    if (this.password == '' || this.password == null || this.password == undefined) {
      this.presentAlert();
      valor = 0;
      return false;
    } else {
      valor = 1;
    }

    if (this.repassword == '' || this.repassword == null || this.repassword == undefined) {
      this.presentAlert();
      valor = 0;
      return false;
    } else {
      valor = 1;
    }

    return valor;

  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alerta',
      subHeader: '',
      message: 'Por favor llene todos los campos.',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
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

  async presentAlertOk() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Atención',
      subHeader: '',
      message: 'Se ha registrado correctamente, ya puede usar Kemba.',
      buttons: ['Continuar']
    });

    await alert.present();
  }



  Atras() {
    this.router.navigate(['/inicio']);
  }

}
