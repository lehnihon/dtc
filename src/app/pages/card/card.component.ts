import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

	minimize: boolean = true;
	@Input() cardTitle: string;
  @Input() cardMessage: string;
	@Input() cardOp : any;

  constructor() { }

  ngOnInit() {
  }

}
