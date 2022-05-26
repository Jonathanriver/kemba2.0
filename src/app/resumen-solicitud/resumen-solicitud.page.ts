import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { ProviderService } from '../provider.service';

@Component({
  selector: 'app-resumen-solicitud',
  templateUrl: './resumen-solicitud.page.html',
  styleUrls: ['./resumen-solicitud.page.scss'],
})
export class ResumenSolicitudPage implements OnInit {
  Nombre: any;
  Credito: any;

  //variables
  SaldoInicial: any;
  ValorCuotaSinSeguro: any;
  AbonoCapital: any;
  TasaInteres: number = 0.024;
  Interes: any;
  ValordelSeguro: number = 1800;
  ValorCuotaConSeguro: any;
  SaldoFinal: any;
  Tiempo: any;
  usuario: any;
  arrayPosts: any;
  ValorPaso: any;
  

  //Obj Credito
  CatMes = [];
  constructor(
    private router: Router,
    public storage: Storage,
    public alertController: AlertController,
    public loadingController: LoadingController,
    public postServices: ProviderService,
  ) { }

  async ngOnInit() {
    this.Nombre = await this.storage.get('name');
    this.usuario =  await this.storage.get('Usuario');
    this.Credito = await this.storage.get('Solicitud');

    //Tiempo del prestamo
    this.Tiempo = this.Credito[1]['Meses'];

    for (let i = 0; i < this.Tiempo; i++) {
      console.log(i + 1);

      if (i == 0) {
        //Monto Incial
        this.SaldoInicial = this.Credito[0]['Monto'];
      } else {
        //Monto Incial
        this.SaldoInicial = this.SaldoFinal;
      }

      //Tasa de Interes
      this.Interes = this.SaldoInicial * this.TasaInteres;

      //Abono a capital
      this.AbonoCapital = this.Credito[0]['Monto'] / this.Tiempo;

      //Valor cuota sin seguro
      this.ValorCuotaSinSeguro = this.AbonoCapital + this.Interes;

      //Valor cuota con seguro
      this.ValorCuotaConSeguro = this.ValorCuotaSinSeguro + this.ValordelSeguro;

      //Saldo Final
      this.SaldoFinal = this.SaldoInicial - this.AbonoCapital;

      this.CatMes.push({ 'NumeroCuota': i + 1, 'SaldoInicial': this.SaldoInicial, 'ValorCuotaSinSegur': this.ValorCuotaSinSeguro, 'AbonoCapital': this.AbonoCapital, 'Interes': this.Interes, 'ValorSeguro': this.ValordelSeguro, 'ValorCuotaConSeguro': this.ValorCuotaConSeguro, 'SaldoFinal': this.SaldoFinal });

    }

    this.ValorPaso = this.CatMes[0]['ValorCuotaConSeguro'];
    console.log(this.CatMes[0]['ValorCuotaConSeguro']);
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

  SolicitarCredito() {
    let myDate: String = new Date().toISOString();
    let Dates = myDate.split('T');
    console.log(Dates[0]);
    this.presentLoadingBasic();
      this.postServices.AddSolicitud(this.usuario['idUsuarios'], 1, this.Credito[0]['Monto'], this.Credito[1]['Meses'],1,Dates)
        .then(data => {
          this.presentLoadingBasic();
          
          this.router.navigate(['/respuesta-credito']);


         console.log(data);
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

}
