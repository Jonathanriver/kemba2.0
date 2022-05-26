import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-plan-pago',
  templateUrl: './plan-pago.page.html',
  styleUrls: ['./plan-pago.page.scss'],
})
export class PlanPagoPage implements OnInit {
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

  //Obj Credito
  CatMes = [];

  constructor(
    private router: Router,
    public storage: Storage,
    public alertController: AlertController,
    public loadingController: LoadingController,
  ) { }

  async ngOnInit() {
    this.Nombre = await this.storage.get('name');
    this.Credito = await this.storage.get('Solicitud');

    //Tiempo del prestamo
    this.Tiempo = this.Credito[1]['Meses'];

    for (let i = 0; i < this.Tiempo; i++) {

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
    // console.log(this.CatMes);

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

  Volver(){
    this.router.navigate(['/oferta-simulacion']);
  }

}
