import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { User } from '../model/user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
user:User= new User();
id:any;
genr:String="homme";
//param: any;
//paramObject: any;

  //User: User[] | undefined;
  constructor( private httpClient:HttpClient, private userservice:LoginService,private route:Router,private userService:UserService, private router: ActivatedRoute) { }

  ngOnInit(): void { //this.param= this.router.snapshot.params[this.param];
    //this.getUser();
   this.use;
   this.genr;
  }
 /* getUser(): void{
    this.id=this.user.id;
      this.userservice.getUser(this.id).subscribe(data => {
        this.User = data;
      },error=>alert("error"));
      
  }*/
   userString = sessionStorage.getItem('use');
 use = this.userString ? JSON.parse(this.userString) : null;
  save(User:string):void{
    localStorage.setItem('user', User);
   this.route.navigate(['/menu']);
  }
  lout():void{
    sessionStorage.removeItem('use');
    this.route.navigate(['/login']);
  }
  public getUser(id:number){
    this.userService.getUser(id).subscribe(data => {
      this.user = data;
     // this.rol = data;
    });
  }
  
}
