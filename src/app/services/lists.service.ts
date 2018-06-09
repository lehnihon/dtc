import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListsService {

  constructor(private http: HttpClient) {}

  getLists(nl){
    return this.http.get('http://34.200.50.59/api/lista.php?numlista='+nl);
  }
}
