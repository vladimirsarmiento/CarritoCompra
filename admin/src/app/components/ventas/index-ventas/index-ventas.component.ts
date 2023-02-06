import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../service/admin.service';
import { Router } from '@angular/router';

declare var iziToast: { show: (arg0: { title: string; titleColor: string; class: string; position: string; message: string; }) => void; };
declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-index-ventas',
  templateUrl: './index-ventas.component.html',
  styleUrls: ['./index-ventas.component.css']
})
export class IndexVentasComponent implements OnInit {

  public token: any;
  public desde: any;
  public hasta: any;

  public page = 1;
  public pageSize = 5;

  public ventas: Array<any> = [];

  public filtro_cod = '';
  public envio: any = {};
  public err_msg = false;
  public load_btn = false;

  constructor(
    private _adminService: AdminService,
    private _router: Router
  ) {
    this.token = localStorage.getItem('token');
  }

  ngOnInit(): void {
    this.init_data();
  }

  init_data() {
    this._adminService.obtener_ventas_admin(this.desde, this.hasta, this.token).subscribe(
      response => {
        this.ventas = response.data;
      }
    );
  }
}
