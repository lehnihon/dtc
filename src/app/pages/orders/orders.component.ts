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
  cardMessage: String;
  cardMessageType : String;

  constructor(private ordersService: OrdersService) {
  }

  ngOnInit() {
  }

  search(){
    this.ordersService.getOrders(this.cb,this.nf,this.nl)
      .subscribe((data:DtcData) => {
        this.cardMessage = '';
        if(data.dados != null){
          this.data.unshift(data);
          this.cardMessage = "Encomenda encontrada";
          this.cardMessageType = "success";
        }else{
          this.cardMessage = data.erro;
          this.cardMessageType = "warning";
        }
      });
  }

}