import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewChild } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { Injectable } from '@angular/core';


@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.page.html',
  styleUrls: ['./preguntas.page.scss'],
})

@Injectable()
export class PreguntasPage implements OnInit {
  Valor: any;
  Dias = 1;
  Multinivel: any;
  Nombre: any;
  Acepta: any;
  Show: boolean = false;
  ShowDos: boolean = false;
  Parte2: boolean = false;
  Parte3: boolean = false;
  Credito: any = [];

  constructor(
    private router: Router,
    public alertController: AlertController,
    public loadingController: LoadingController,
    public storage: Storage
  ) {

  }

  async ngOnInit() {
    this.Nombre = await this.storage.get('name');
    this.Show = false;
  }

  Si(valor) {
    if (valor == 1) {
      this.Show = true;
      this.ShowDos = false;
      // console.log('Uno');
    } else if (valor == 2) {
      this.Show = false;
      this.ShowDos = true;
      // console.log('Dos');
    }
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

  Salir() {
    this.router.navigate(['/inicio']);
  }

  swipeNext() {

    // console.log(this.Valor);

    if (this.Valor == 0 || this.Valor == undefined || this.Valor == null || this.Valor == '') {
      let message = "El monto no puede ser '0'";
      this.presentAlertError(message);
      return false;
    } else {

      if (this.Valor > 600000) {
        // console.log(this.Valor);
        let message = "El valor ingresado supera el monto maximo.";
        this.presentAlertError(message);
        return false;
      }else if(this.Valor < 150000){
        // console.log(this.Valor);
        let message = "El valor ingresado es inferior al monto minimo.";
        this.presentAlertError(message);
        return false;
      }

      this.Show = false;
      this.Parte2 = true;
      let numero: number = +this.Valor;
      this.Credito.push({ 'Monto': numero });
    }
  }

  textareaMaxLengthValidation() {
    if (this.Valor.length > 6) {
      this.Valor = this.Valor.slice(0, 6);
      //console.log(this.Valor);
    }
  }

  swipeNext2() {

    this.Show = false;
    this.Parte2 = false;
    this.Parte3 = true;
    this.Credito.push({ 'Meses': this.Dias });
  }

  async Simular() {
    if (this.Multinivel == null) {
      let message = "Debe seleccionar un multinivel";
      this.presentAlertError(message);
      return false;
    } else {
      this.Credito.push({ 'Multinivel': this.Multinivel });
      await this.storage.remove('Solicitud');
      await this.storage.set('Solicitud', this.Credito);
      this.presentLoadingBasic();
      this.router.navigate(['/oferta-simulacion']);
    }
  }



  async presentAlertError(message) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Atención',
      //subHeader: 'Error',
      message: message,
      buttons: ['Continuar']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
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




}
