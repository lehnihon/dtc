import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-insert',
  templateUrl: './list-insert.component.html',
  styleUrls: ['./list-insert.component.scss']
})
export class ListInsertComponent implements OnInit {

	data : any = [];
	nl : any;
	bc : any;
	tl: any = ["Saca Base","Devolução","Deposito"];
	bs: any = ["Base 1","Base 2","Base 3"];
  cardMessage: String;

  constructor() {
  	this.data.push({l:"1000",d:[1,2,3,4,5]});
  	this.data.push({l:"1001",d:[1,2,3]});
  }

  ngOnInit() {
  }

  insert(cb : HTMLInputElement){
  	this.bc = cb.value;
  	cb.value = '';
  }

  newList(){}

}
