import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DtcData } from 'src/app/classes/dtc-data';
import { DtcUser } from 'src/app/classes/dtc-user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  user:DtcUser = new DtcUser;

  constructor(private http: HttpClient,public router: Router) { }

  login(lgn,pss){
    this.http.get('http://34.200.50.59/api/login.php?login='+lgn+'&senha='+pss+'&tipo=1')
      .subscribe((data:DtcData) => {
        if(data.dados != null){
          this.user.nome = data.dados.nome;
          this.user.foto = data.dados.foto;
          this.router.navigate(['/painel']);
        }
    });
  }
}
