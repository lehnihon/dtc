import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { DtcData } from 'src/app/classes/dtc-data';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  login: any = '';
  pass: any = '';

  constructor(public router: Router, private usersService: UsersService) { }

  ngOnInit() {
  }

  loginUser(){
    this.usersService.login(this.login,this.pass);
  }

}
