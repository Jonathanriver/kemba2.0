import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { ProviderService } from '../provider.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  arrayPosts: any;
  usuario: any;
  record: any;
  password: any;
  FINISH: any;

  constructor(
    private router: Router,
    public loadingController: LoadingController,
    public postServices: ProviderService,
    public storage: Storage,
    public alertController: AlertController
  ) { }

  ngOnInit() {
  }

  getPosts() {

    if (this.usuario == null || this.usuario == '' || this.usuario == undefined) {
      this.presentAlert('El campo Usuario no puede estar vacio');
      return false;
    }

    if (this.password == null || this.password == '' || this.password == undefined) {
      this.presentAlert('El campo Password no puede estar vacio');
      return false;
    }

    this.presentLoadingBasic();
    this.postServices.getPosts(this.usuario, this.password, this.record)
      .then(data => {

        if(data['error'] == 'Datos incorrectos...'){
          this.presentAlert('Los datos ingresados no concuerdan con nuestra base de datos por favor intentelo con los datos correctos.');
          return false;
        }

        this.arrayPosts = data;
        this.presentLoading();

        this.storage.remove('Usuario');
        this.storage.remove('name');

        this.storage.set('name', data['response']['nombre']);
        this.storage.set('Usuario', data['response']);

        this.router.navigate(['/dashboard']);
      });
  }

  ResetPass() {
    this.router.navigate(['/reset-pass']);
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
      message: 'Hola Gracias por estar con nosotros, disruta de lo que tenemos para ti.',
      translucent: true,
      cssClass: 'custom-class custom-loading',
      backdropDismiss: true
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed with role:', role);

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

  registrar() {
    this.router.navigate(['/registrar']);
  }

}
