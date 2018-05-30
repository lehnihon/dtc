import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  cb : any;
  data : any;

  constructor(private ordersService: OrdersService) {
  }

  ngOnInit() {
  }

  pesquisar(){
    this.ordersService.getOrders(this.cb)
      .subscribe((data) => {
        this.data = data;
      });
  }

}