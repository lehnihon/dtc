import { Component, ViewChild, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-order-search',
  templateUrl: './order-search.component.html',
  styleUrls: ['./order-search.component.scss']
})
export class OrderSearchComponent implements OnInit {

  @Input() dataChild: any;
  order: any;

  constructor() { }

  ngOnInit() {
  }

  orderDetails(dd){
    this.order = dd;
  }

}
