import { Component, ViewChild, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';
import { DtcData } from 'src/app/classes/dtc-data';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  cb : any = '';
  nf: any = '';
  nl: any = '';
  data : any = [];
  cardTitle: String = "#";
  cardMessage: String;

  constructor(private ordersService: OrdersService) {
  }

  ngOnInit() {
  }

  pesquisar(){
    this.ordersService.getOrders(this.cb,this.nf,this.nl)
      .subscribe((data:DtcData) => {
        this.cardMessage = '';
        if(data.dados != null)
          this.data.unshift(data);
        else
          this.cardMessage = data.erro;
      });
  }

}