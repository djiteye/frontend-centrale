import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { User } from '../model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
user:User= new User();
id:any;

  //User: User[] | undefined;
  constructor( private httpClient:HttpClient, private userservice:LoginService,private route:Router) { }

  ngOnInit(): void {
    //this.getUser();
   
  }
 /* getUser(): void{
    this.id=this.user.id;
      this.userservice.getUser(this.id).subscribe(data => {
        this.User = data;
      },error=>alert("error"));
      
  }*/
  save(User:string):void{
    localStorage.setItem('user', User);
   this.route.navigate(['/menu']);
  }
  lout(User:string):void{
    return localStorage.removeItem('user');
  }
}
