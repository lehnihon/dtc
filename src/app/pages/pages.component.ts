import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  showPage : boolean = false;
  route : string = '';
  page = 4;
  constructor(router : Router, location: Location) {
    router.events.subscribe((val) => {
      if(location.path() != ''){
        this.route = location.path();
      } else {
        this.route = 'Home'
      }
    });
  }

  ngOnInit() { }

  dropdown(event : any){
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
