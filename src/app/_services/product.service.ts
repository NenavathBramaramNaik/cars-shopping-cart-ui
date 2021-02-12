import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const baseUrl = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {

   }

   getAllWarehouseDetails(){
    return this.http.get<any[]>('http://localhost:8080/api/cars');
   }
}
