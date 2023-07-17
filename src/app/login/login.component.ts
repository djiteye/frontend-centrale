import { Component, OnInit } from '@angular/core';
import {  NavigationExtras, Params } from '@angular/router';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { Role } from '../model/role';
import { UserService } from '../service/user.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: User=new User();
  usa:any;
  ua:any;
  us:any;
  //paramObject: Params | null | undefined;
 
  constructor(private lserviceService: LoginService,private route:Router, private userService: UserService) { }

  ngOnInit(): void {
    this.us;
    this.ua;
   // this.storeAuthenticatedUser(this.us);
    
  }

 
  userlogin() {
    console.log(this.user)
    this.lserviceService.loginuser(this.user).subscribe(data=>{
      //alert("login succesfully");
      this.us=data;
      console.log(this.us);
      this.userService.getUser(this.us.userId).subscribe(data => {
        this.ua = data;
        console.log(this.ua);
       // this.rol = data;
      
      sessionStorage.setItem('use', JSON.stringify(this.us));
      if(this.hasRole("ROLE_ADMIN", this.ua.role)){
 
        this.route.navigate(['/admin']);
      }else{
        this.route.navigate(['/utilisateur']);
      }
    });
     // this.route.navigate(['/admin']);
    },error=>alert("error"));
   
    
  }
  
  hasRole(roleName: string, rol: Role[]): boolean {
    return rol.some(role => role.name === roleName);
  }
 /* public getUser(id:any){
    this.userService.getUser(id).subscribe(data => {
      this.usa = data;
     // this.rol = data;
    });
  }*/

   /* storeAuthenticatedUser(user: User): void {
    sessionStorage.setItem('authenticatedUser', JSON.stringify(user));
  }
  
   getAuthenticatedUser(): any {
    const user = sessionStorage.getItem('authenticatedUser');
    return user ? JSON.parse(user) : null;
  }
  
   clearAuthenticatedUser(): void {
    sessionStorage.removeItem('authenticatedUser');
  }*/
}
