import { Component, OnInit } from '@angular/core';
import { ListsService } from 'src/app/services/lists.service';
import { DtcData } from 'src/app/classes/dtc-data';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {

	nl: any;
	data : any = [];
  cardMessage: String;

  constructor(private listsService: ListsService) { }

  ngOnInit() {
  }

  pesquisar(){
    this.listsService.getLists(this.nl)
      .subscribe((data:DtcData) => {
        this.cardMessage = '';
        if(data.dados != null)
          this.data.unshift(data);
        else
          this.cardMessage = data.erro;
      });
  }

}
