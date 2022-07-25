import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fridge } from "../models/fridge.model";

const baseUrl = 'http://localhost:8080/api/fridges';

@Injectable({
  providedIn: 'root'
})
export class FridgeService {

  constructor(private http: HttpClient) { }

  getAllFridges(): Observable<Fridge[]>{
    return this.http.get<Fridge[]>(baseUrl);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl + "/add", data);
  }

}
