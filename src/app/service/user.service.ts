import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { User } from '../model/user';
import { Role } from '../model/role';
import { TokenDTO } from '../model/token-dto';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  [x: string]: any;

  private REST_API_SERVER = "http://localhost:8082/api/user"
  private REST_API_SERVERO = "http://localhost:8082/api/auth"
  private REST_API_SERVERR = "http://localhost:8082/api/auth/refresh-token"
  private REST_API_SERVER1 = "http://localhost:8082/api/roles"
  
  constructor(private httpService: HttpClient, private loginService: LoginService, private route:Router) { }
  getAllUsers(): Observable<User[]> {
    return this.httpService.get(`${this.REST_API_SERVER}/listU`).pipe(
        map((res: any) => res));
}

/*createUser(user: User): Observable<User> {
    return this.httpService.post<User>(`${this.REST_API_SERVER1}/signup`,user);
}

updateUser(id: number, value: User) {
    return this.httpService.put(`${this.REST_API_SERVER}/updateUser/${id}`, value);
}*/
getUser(id: any) : Observable<User>{
  return this.httpService.get(`${this.REST_API_SERVER}/U/${id}`).pipe(
    map((res: any) => res));
}
getRole(id: number) : Observable<any>{
  return this.httpService.get(`${this.REST_API_SERVER1}/R/${id}`).pipe(
    map((res: any) => res));
}

deleteUser(id: any): Observable<User> {
    return this.httpService.delete<User>(`${this.REST_API_SERVER}/deleteU/${id}`);
}
logout(tokenDTO:TokenDTO):Observable<object>{
  //console.log(tokenDTO);
  return this.httpService.post(`${this.REST_API_SERVERO}/logout`,tokenDTO); 
}
refreshAuthToken(): Observable<any> {
  // Récupérer le jeton de rafraîchissement de l'utilisateur depuis le stockage local ou tout autre endroit approprié
  //const refreshToken = localStorage.getItem('refreshToken');
  const refreshToken = localStorage.getItem('use');
 //use = this.refreshToken ? JSON.parse(this.refreshToken) : null;

  // Envoyer une requête HTTP pour rafraîchir le jeton d'authentification
  const headers = new HttpHeaders().set('Authorization', `Bearer ${refreshToken}`);
  return this.httpService.post<any>(this.REST_API_SERVERR, {}, { headers });
}

  getAccessToken(){
    const userString = localStorage.getItem('use');
const use = userString ? JSON.parse(userString) : null;
 const AccessToken = use ? use.accessToken : null;
    return AccessToken;
  }

}
