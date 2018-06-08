import { Component, ViewChild, OnInit, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-order-search',
  templateUrl: './order-search.component.html',
  styleUrls: ['./order-search.component.scss']
})
export class OrderSearchComponent implements OnInit {

  @Input() dataChild: any;
  order: any;
  closeResult: string;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  orderDetails(dd, content){
    this.order = dd;
    this.modalService.open(content, { size: 'lg' });
  }

}
