import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-pass.page.html',
  styleUrls: ['./reset-pass.page.scss'],
})
export class ResetPassPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  Atras(){
    this.router.navigate(['/inicio']);
  }

  Recuperar(){
    this.router.navigate(['/inicio']);
  }

}
