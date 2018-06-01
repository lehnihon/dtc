import { Component, ViewChild, OnInit, Input } from '@angular/core';
import { CardHeaderComponent } from '../../card-header/card-header.component';

@Component({
  selector: 'app-order-search',
  templateUrl: './order-search.component.html',
  styleUrls: ['./order-search.component.scss']
})
export class OrderSearchComponent implements OnInit {

  @Input() dataChild: any;
  @ViewChild(CardHeaderComponent) chc;

  constructor() { }

  ngOnInit() {
  }

}
