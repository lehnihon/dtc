import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { DtcUser } from 'src/app/classes/dtc-user';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  user: DtcUser = new DtcUser;
  showPage : boolean = false;
  route : string = '';
  page = 4;
  constructor(router : Router, location: Location, private usersService: UsersService) {
    if(!usersService.user.nome){
      router.navigate(['/login']);
    }else{
      this.user = usersService.user;
    }
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
