import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, finalize, share, tap, throwError } from 'rxjs';
import { LoginService } from './service/login.service';
import { Router } from '@angular/router';
import { User } from './model/user';
import { UserService } from './service/user.service';


@Injectable()
export class RefreshTokenInterceptorInterceptor implements HttpInterceptor {
//user: User=new User();
  constructor(private loginService: LoginService , private userService: UserService, private route: Router) {}

  userString = localStorage.getItem('use');
  use = this.userString ? JSON.parse(this.userString) : null;

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      return next.handle(request).pipe(
        catchError((error) => {
          if (error.status === 401) {
            // Déconnexion de l'utilisateur lorsque le statut est 401 (Unauthorized)
            this.route.navigate(['/login']);
          }
          return throwError(error);
        })
      );
    }

 /* private addAuthorizationHeader(request: HttpRequest<any>, token: any): HttpRequest<any> {
    return request.clone({ headers: request.headers.set('Authorization', 'Bearer' + token)});
  }*/
}
