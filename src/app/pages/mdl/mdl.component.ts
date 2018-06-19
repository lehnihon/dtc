import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-mdl',
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({ opacity: 0}),
          animate('500ms', style({ opacity: 1}))
        ]),
        transition(':leave', [
          style({ opacity: 1}),
          animate('500ms', style({ opacity: 0}))
        ])
      ]
    )
  ],
  templateUrl: './mdl.component.html',
  styleUrls: ['./mdl.component.scss']
})
export class MdlComponent implements OnInit {

  @Output() mdlClose = new EventEmitter();
  btnState:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  mdlBtn(){
    console.log('click');
    this.btnState = true;
    this.mdlClose.emit(this.btnState);
  }

}
