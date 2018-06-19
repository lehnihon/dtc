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
      'https://api.dropboxapi.com/2/files/get_temporary_link',
      data,
      {headers:{"Authorization": "Bearer HGzQxS4LLQAAAAAAAAABNUw8CLwNlG6BlKNaJq_lP4z_M_h6DxJqdDqY5gbcnfFj", "Content-Type": "application/json"}});
  }
}
