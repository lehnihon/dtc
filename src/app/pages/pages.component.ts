import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  showPage : boolean = false;

  constructor() { }

  ngOnInit() { }

  dropdown(event : any){
  	console.log(event);
  	if(event.currentTarget.className == 'sidebar-nav-link collapsed dropicon'){
			event.currentTarget.className  = "sidebar-nav-link collapsed";
  	}else{
  		event.currentTarget.className  = "sidebar-nav-link collapsed dropicon";
  	}
  	if(event.currentTarget.nextSibling.style.display == "block"){
  		event.currentTarget.nextSibling.style.display = "none";
  	}else{
  		event.currentTarget.nextSibling.style.display = "block";
  	}
  }
  notification(event : any){
  	if(event.currentTarget.nextSibling.style.display == "block"){
  		event.currentTarget.nextSibling.style.display = "none";
  	}else{
  		event.currentTarget.nextSibling.style.display = "block";
  	}
  }
}
