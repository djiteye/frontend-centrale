import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { User } from '../model/user';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.scss']
})
export class UtilisateurComponent implements OnInit {

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


