import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from "@angular/router"

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  

  login(data){
    return this.http.post('/api/users/login',data);
  }

  constructor(private http: HttpClient) { }
}
