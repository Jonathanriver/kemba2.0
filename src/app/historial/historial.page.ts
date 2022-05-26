import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage implements OnInit {
  Nombre: any;
  constructor(
    private router: Router,
    public storage: Storage,
  ) { }

  ngOnInit() {
    this.DtosUser();
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

  DtosUser() {
    let n = this.storage.get('name');
    n.then(data => {
      // console.log(data);
      this.Nombre = data;
    });
    // console.log(this.Nombre);
  }

}
