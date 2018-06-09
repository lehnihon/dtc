import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DropboxService {

  constructor(private http: HttpClient) { }

  getAR(lote,id) {
    var data: any = "{\"path\": \"/Pasta da equipe Scan/"+lote+"/"+id+".pdf\"}";

    return this.http.post(
      'http://34.200.50.59/api/index.php',
      data,
      {headers:{"Authorization": "Bearer HGzQxS4LLQAAAAAAAAABNUw8CLwNlG6BlKNaJq_lP4z_M_h6DxJqdDqY5gbcnfFj", "Content-Type": "application/json"}});
  }
}
