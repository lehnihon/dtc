import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

	minimize: boolean = true;
  close: boolean = true;
	@Input() cardTitle: string;
  @Input() cardMessage: string;
  @Input() cardMessageType: string = "warning";
	@Input() cardOp : any;

  constructor() { }

  ngOnInit() {
  }

}
