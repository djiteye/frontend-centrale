import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { User } from '../model/user';
import { Role } from '../model/role';
import { TokenDTO } from '../model/token-dto';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  [x: string]: any;

  private REST_API_SERVER = "http://localhost:8082/api/user"
  private REST_API_SERVERO = "http://localhost:8082/api/auth"
  private REST_API_SERVER1 = "http://localhost:8082/api/roles"
  
  constructor(private httpService: HttpClient) { }
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
  console.log(tokenDTO);
  return this.httpService.post(`${this.REST_API_SERVERO}/logout`,tokenDTO); 
}

}
