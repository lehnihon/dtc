import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-header',
  templateUrl: './card-header.component.html',
  styleUrls: ['./card-header.component.scss']
})
export class CardHeaderComponent implements OnInit {

  minimize: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  closeWindow(){
    this.minimize = false;
  }

}
