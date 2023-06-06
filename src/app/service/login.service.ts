import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl="http://localhost:8082/User/login";
  constructor(private httpClient: HttpClient, private route:Router) { }
 loginuser(user:User):Observable<object>{
    console.log(user)
    return this.httpClient.post(`${this.baseUrl}`,user); 
  }
  save(User:string):void{
    localStorage.setItem('user', User);
   this.route.navigate(['/menu']);
  }
  lout(User:string):void{
    return localStorage.removeItem('user');
  }
}
