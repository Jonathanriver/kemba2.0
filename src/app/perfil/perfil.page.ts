import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { ProviderService } from '../provider.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  Nombre: any;
  DataUser: any;
  NombreUser: any;
  DocuUser: any;
  EmailUser: any;
  PhoneUser: any;
  UserName: any;
  ApellidoUser: any;

  constructor(
    private router: Router,
    public storage: Storage,
    public postServices: ProviderService,
    public loadingController: LoadingController,
    public alertController: AlertController
  ) { }

  async ngOnInit() {
    this.Nombre = await this.storage.get('name');
    this.DataUser = await this.storage.get('Usuario');
    // console.log(this.DataUser);
    this.GetUsersId();
  }

  GetUsersId() {
    this.postServices.getUser(this.DataUser.idUsuarios).then(data => {
      // console.log(data);
      this.NombreUser = data['response'][0].nombre;
      this.ApellidoUser = data['response'][0].apellido;
      this.DocuUser = data['response'][0].numero_documento;
      this.EmailUser = data['response'][0].email;
      this.PhoneUser = data['response'][0].telefono;
      this.UserName = data['response'][0].username;
    })
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

  resetpass() {
    this.router.navigate(['/reset-pass']);
  }

  Actualizar() {

    if (this.NombreUser == null || this.NombreUser == undefined || this.NombreUser == '') {
      this.presentAlert('El campo Nombre no puede estar vacio.');
      return false;
    }

    if (this.ApellidoUser == null || this.ApellidoUser == undefined || this.ApellidoUser == '') {
      this.presentAlert('El campo Apellido no puede estar vacio.');
      return false;
    }

    if (this.DocuUser == null || this.DocuUser == undefined || this.DocuUser == '') {
      this.presentAlert('El campo Documento no puede estar vacio.');
      return false;
    }

    if (this.EmailUser == null || this.EmailUser == undefined || this.EmailUser == '') {
      this.presentAlert('El campo Email no puede estar vacio.');
      return false;
    }

    if (this.PhoneUser == null || this.PhoneUser == undefined || this.PhoneUser == '') {
      this.presentAlert('El campo Telefono no puede estar vacio.');
      return false;
    }

    if (this.UserName == null || this.UserName == undefined || this.UserName == '') {
      this.presentAlert('El campo Usuario no puede estar vacio.');
      return false;
    }

    this.postServices.AddUser(this.DataUser.idUsuarios, this.NombreUser, this.ApellidoUser, this.DocuUser, this.EmailUser, this.PhoneUser, this.UserName)
      .then(data => {
        this.presentLoadingBasic();
        if (data > 0) {
          this.presentAlert('Se realizo la actualizacon correctamente.');
        } else {
          this.presentAlert('Algo inesperado paso por favor revise los datos suministrados.');
        }
      });
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
    this.storage.remove('Usuario');
    this.storage.remove('name');
    this.router.navigate(['/inicio']);
  }

}
