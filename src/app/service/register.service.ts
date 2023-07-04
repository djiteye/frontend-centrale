import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private baseUrl="http://localhost:8082/api/auth";
  constructor(private httpClient: HttpClient, private route:Router) { }
 register(user:User):Observable<object>{
    console.log(user)
    return this.httpClient.post(`${this.baseUrl}/signup`,user); 
  }
}
