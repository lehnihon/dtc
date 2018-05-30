import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient) { }

  getOrders(id) {
    return this.http.get('http://34.200.50.59/api/index.php?id='+id);
  }
}
