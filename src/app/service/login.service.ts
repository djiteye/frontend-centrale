import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl="http://localhost:8082/api/auth";
  constructor(private httpClient: HttpClient, private route:Router) { }
 loginuser(user:User):Observable<object>{
    console.log(user)
    return this.httpClient.post(`${this.baseUrl}/signin`,user); 
  }
  save(User:string):void{
    localStorage.setItem('user', User);
   this.route.navigate(['/menu']);
  }
  lout(User:string):void{
    return localStorage.removeItem('user');
  }
 /* getUser(id:number): Observable<User[]> {
    return this.httpClient.get(`${this.baseUrl}/U/${id}`).pipe(
        map((res: any) => res));
}*/
}
