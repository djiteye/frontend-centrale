import { INJECTOR, Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpParams
} from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, finalize, share, tap, throwError } from 'rxjs';
import { LoginService } from './service/login.service';
import { Router } from '@angular/router';
import { User } from './model/user';
import { UserService } from './service/user.service';


@Injectable()
export class RefreshTokenInterceptorInterceptor implements HttpInterceptor {
//user: User=new User();
private isRefreshing = false;
  constructor(private loginService: LoginService , private userService: UserService, private route: Router) {}

  userString = localStorage.getItem('use');
  use = this.userString ? JSON.parse(this.userString) : null;
   AccessToken = this.use ? this.use.accessToken : null;

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      if (this.userService.getAccessToken()) {
        request = this.addAuthorizationHeader(request, this.userService.getAccessToken());
       /*const clonereq=request.clone(
        {
          params : new HttpParams().set('Authorization', this.AccessToken)
        }
       );*/
      // console.log(request);
      // return next.handle(request);
     // console.log(this.userService.getAccessToken());
        
      
      return next.handle(request).pipe(
        catchError((error) => {
          if ( error.status === 401 && this.isRefreshing==false) {
            // Déconnexion de l'utilisateur lorsque le statut est 401 (Unauthorized)
            this.isRefreshing=true;
            //alert("votre session a été expiré");
            localStorage.removeItem('use');
            this.route.navigate(['/login']);
            location.reload();
          }
          this.route.navigate(['/login']);
          location.reload();
          return throwError(error);
          
        })
      );}else{
        return next.handle(request);
      }
    }

   addAuthorizationHeader(request: HttpRequest<any>, token: String): HttpRequest<any> {
    return request.clone({ headers: request.headers.set('Authorization',  `Bearer ${token}`)});
  }
 
}
