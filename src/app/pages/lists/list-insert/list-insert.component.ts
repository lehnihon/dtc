import { Component, OnInit } from '@angular/core';
import { ListsService } from 'src/app/services/lists.service';
import { DtcData } from 'src/app/classes/dtc-data';

@Component({
  selector: 'app-list-insert',
  templateUrl: './list-insert.component.html',
  styleUrls: ['./list-insert.component.scss']
})
export class ListInsertComponent implements OnInit {

	data : any = [];
  md : any = 1;
  tl: any = '';
  bs: any = '';
  cb: any = '';
  nl: any = '';
	datatl : any;
	databs: any;
  cardMessage: String;
  cardMessageType: String;

  constructor(private listsService: ListsService) {
    this.listsService.getDefault()
      .subscribe((data:DtcData) => {
        this.datatl = data.dados.tipolista;
        this.databs = data.dados.base
      });
  }

  ngOnInit() {
  }

  insert(){
    if(this.cb == ''){
      this.cardMessage =  "Digite o código de barras";
      this.cardMessageType = "warning";
      return;
    }
    if(this.bs == ''){
      this.cardMessage =  "Selecione uma base";
      this.cardMessageType = "warning";
      return;
    }
    if(this.tl == ''){
      this.cardMessage = "Selecione um tipo de lista";
      this.cardMessageType = "warning";
      return;
    }
    this.listsService.insert(this.cb,this.bs,this.tl,this.nl,this.md)
      .subscribe((data:DtcData) => {
        if(data.dados != null){
          if(this.md == '1'){
            this.nl = data.dados.lista;
            this.cardMessage = this.cb+": Inserido com sucesso";
            this.cardMessageType = "success";
            this.data[0] = data.dados;
          }else{
            this.cardMessage = this.cb+": Removido com sucesso";
            this.cardMessageType = "success";
          }
          this.cb = '';
        }else{
          if(data.erro != null){
            this.cardMessage = data.erro;
            this.cardMessageType = "warning";
          }
        }
      });
  }

  newList(){
   this.data.unshift(Array('1'));
   this.nl = '';
  }

  newData(){
    console.log('teste');
  }

}
