import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  Nombre: any;
  Vista = false;
  Panel: any;

  constructor(
    private router: Router,
    public storage: Storage,

  ) { }

  ngOnInit() {
    this.DtosUser();
  }

  Menu(){

    if(this.Vista == false){
      this.Vista = true;
      this.Panel = "display-gray";
    }else{
      this.Vista = false;
      this.Panel = "display-transparent";
    }
    
  }

  Productos() {
    this.router.navigate(['/dashboard']);
  }

  Credito() {
    this.router.navigate(['/credi-bankem']);
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
    this.storage.remove('Usuario');
    this.storage.remove('name');
    this.router.navigate(['/inicio']);
  }

  DtosUser() {
    let n = this.storage.get('name');
    n.then(data => {
      // console.log(data);
      this.Nombre = data;
    });
    // console.log(this.Nombre);
  }

  editar(){
    this.router.navigate(['/perfil']);
  }


}
